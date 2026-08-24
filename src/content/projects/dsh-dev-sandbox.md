---
title: DSH Dev Sandbox
summary: 为插件开发启动隔离的 DSH Web 镜像实例，分离 DSH_HOME、端口、Profile 与宿主继承选项。
date: 2026-08-21
tags: [Developer Tools, Sandbox, Plugin, Automation]
featured: false
role: 个人项目
status: 开发工具
image: /images/project-dev-sandbox.png
repository: https://github.com/zp-home/dsh-dev-sandbox
---

插件调试最容易污染的不是代码，而是宿主状态。DSH Dev Sandbox 为每次开发运行建立独立的 home、端口和 profile，同时允许显式继承需要的宿主 API 或模型配置。

## 能力

- 启动隔离的 DSH Web mirror。
- 自动挂载正在开发的插件。
- 提供 GUI 面板和 `sandbox_*` Agent 工具。
- 让继承项变成显式选项，而不是隐含共享整个用户环境。
