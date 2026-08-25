interface GitHubRepositoryResponse {
  forks_count: number
  stargazers_count: number
}

interface GitHubReleaseResponse {
  assets: Array<{ download_count: number }>
}

interface GitHubIssueResponse {
  reactions?: { '+1'?: number }
}

export interface RepositoryStats {
  downloads: number | null
  forks: number
  stars: number
}

const repositoryCache = new Map<string, Promise<RepositoryStats | null>>()
const issueCache = new Map<number, Promise<number | null>>()

function requestHeaders() {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }

  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  return headers
}

export function parseGitHubRepository(repository: string) {
  try {
    const url = new URL(repository)
    if (url.hostname !== 'github.com') return null
    const [owner, name] = url.pathname.split('/').filter(Boolean)
    if (!owner || !name) return null
    return { owner, name: name.replace(/\.git$/, '') }
  } catch {
    return null
  }
}

export function getRepositoryStats(repository: string) {
  const reference = parseGitHubRepository(repository)
  if (!reference) return Promise.resolve(null)

  const key = `${reference.owner}/${reference.name}`
  const cached = repositoryCache.get(key)
  if (cached) return cached

  const request = (async () => {
    try {
      const repositoryResponse = await fetch(`https://api.github.com/repos/${key}`, {
        headers: requestHeaders(),
      })
      if (!repositoryResponse.ok) return null

      const data = (await repositoryResponse.json()) as GitHubRepositoryResponse
      let downloads: number | null = null

      const releasesResponse = await fetch(`https://api.github.com/repos/${key}/releases?per_page=100`, {
        headers: requestHeaders(),
      })
      if (releasesResponse.ok) {
        const releases = (await releasesResponse.json()) as GitHubReleaseResponse[]
        downloads = releases.reduce(
          (total, release) => total + release.assets.reduce((subtotal, asset) => subtotal + asset.download_count, 0),
          0,
        )
      }

      return {
        downloads,
        forks: data.forks_count,
        stars: data.stargazers_count,
      }
    } catch {
      return null
    }
  })()

  repositoryCache.set(key, request)
  return request
}

export function getArticleLikes(issueNumber: number) {
  const cached = issueCache.get(issueNumber)
  if (cached) return cached

  const request = (async () => {
    try {
      const response = await fetch(`https://api.github.com/repos/zp-home/zp-home.github.io/issues/${issueNumber}`, {
        headers: requestHeaders(),
      })
      if (!response.ok) return null
      const issue = (await response.json()) as GitHubIssueResponse
      return issue.reactions?.['+1'] ?? 0
    } catch {
      return null
    }
  })()

  issueCache.set(issueNumber, request)
  return request
}
