# zp-home.github.io

`zp-home` 的个人项目与知识主页，用于展示公开项目、可复用 Agent Skills 和工程知识记录。

站点使用 [Astro](https://astro.build/) 生成纯静态页面，内容以 Markdown 管理，通过 GitHub Actions 部署到 GitHub Pages。

## 本地开发

需要 Node.js 24 及 npm。

```bash
npm ci
npm run dev
```

本地服务默认位于 `http://localhost:4321`。

发布前执行完整检查和生产构建：

```bash
npm run build
```

## 内容结构

| 内容 | 目录 | 用途 |
| --- | --- | --- |
| 项目 | `src/content/projects/` | 项目背景、职责边界、技术选择和公开来源 |
| Skills | `src/content/skills/` | 可复用能力、触发场景和验证方式 |
| 知识 | `src/content/knowledge/` | 工程判断、实验结果和方法记录 |

新建同类 Markdown 文件并填写 frontmatter 即可增加内容。字段约束集中在 `src/content.config.ts`，构建时会校验。项目图片放入 `public/images/`。

## 公开内容边界

- 只使用已公开的仓库、图片和技术信息。
- 公司项目、私有仓库、安装包、密钥和未公开内部细节不得提交。
- Fork 或开源协作项目必须如实标注身份与贡献边界。
- 提交前检查所有链接、图片、作者信息和 Git 变更。

## 部署

`main` 分支保存站点源码，`gh-pages` 分支只保存生成后的静态文件。发布时执行：

```bash
npm run deploy
```

该命令会先执行完整检查和生产构建，再把 `dist/` 推送到 `gh-pages`，并添加 `.nojekyll` 以保留 Astro 的 `/_astro/` 资源目录。GitHub Pages 的发布来源应设为 **Deploy from a branch**，分支为 `gh-pages`，目录为 `/ (root)`。
