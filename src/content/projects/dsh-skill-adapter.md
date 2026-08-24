---
title: DSH Skill Adapter
summary: 将 Claude Code 与 Codex 生态中的 SKILL.md 导入或运行时挂载进 DeepSeek Harness。
date: 2026-08-14
tags: [Agent Skills, CLI, Plugin, Interoperability]
featured: true
role: 个人项目
status: 可用原型
image: /images/project-skill-adapter.webp
repository: https://github.com/zp-home/dsh-skill-adapter
---

不同 Agent 平台都在积累可复用的 Skill，但目录结构、加载方式和运行时约束并不一致。DSH Skill Adapter 尝试建立一个可检查的适配层。

## 能力

- 从本地 Skill 目录导入 `SKILL.md` 与相关资源。
- 以 CLI 完成检查和迁移。
- 通过 DSH Plugin 在运行时挂载能力。
- 保留来源信息，避免导入后无法追溯原始 Skill。

这个项目把“复制提示词”升级为“迁移有结构、有资源、有边界的能力包”。
