export interface SkillHubStats {
  downloads: number
  installs: number
  stars: number
  version: string
}

interface SkillHubResponse {
  latestVersion?: { version?: string }
  skill?: {
    stats?: {
      downloads?: number
      installs?: number
      stars?: number
    }
  }
}

const skillCache = new Map<string, Promise<SkillHubStats | null>>()

function parseSkillHubSlug(url: string) {
  try {
    const parsed = new URL(url)
    if (parsed.hostname !== 'skillhub.cn' && parsed.hostname !== 'www.skillhub.cn') return null
    const segments = parsed.pathname.split('/').filter(Boolean)
    if (segments[0] !== 'skills') return null
    return segments.at(-1) ?? null
  } catch {
    return null
  }
}

export function getSkillHubStats(url: string) {
  const slug = parseSkillHubSlug(url)
  if (!slug) return Promise.resolve(null)

  const cached = skillCache.get(slug)
  if (cached) return cached

  const request = (async () => {
    try {
      const response = await fetch(`https://api.skillhub.cn/api/v1/skills/${encodeURIComponent(slug)}`, {
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) return null

      const data = (await response.json()) as SkillHubResponse
      const stats = data.skill?.stats
      const version = data.latestVersion?.version
      if (!stats || !version) return null

      return {
        downloads: stats.downloads ?? 0,
        installs: stats.installs ?? 0,
        stars: stats.stars ?? 0,
        version,
      }
    } catch {
      return null
    }
  })()

  skillCache.set(slug, request)
  return request
}
