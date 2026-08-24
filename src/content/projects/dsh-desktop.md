---
title: DSH Desktop Packaging
summary: 在公开协作分支中整理 Windows 快速安装路径、ASAR 运行时布局和三端打包验证边界。
date: 2026-08-24
tags: [Electron, TypeScript, NSIS, ASAR]
featured: true
role: 开源协作 / Fork
status: 已验证初版
image: /images/project-desktop.webp
repository: https://github.com/zp-home/deepseek-harness-desktop
website: https://dshdesktop.cn
---

该工作基于公开的 DSH Desktop 仓库，重点处理 Electron 安装包体积、Windows 安装 I/O 与打包后运行时完整性之间的平衡。

## 负责的部分

- 将普通 JavaScript 和资源收回 `app.asar`。
- 仅为原生模块、可执行文件和真实路径资源保留 `app.asar.unpacked` 白名单。
- 排除 source map、TypeScript 源码和非目标架构原生文件。
- 建立 packaged-runtime、Loader、Profile、CLI 与 installer 校验记录。
- 为 Windows、macOS 与 Linux 明确原生宿主和签名边界。

## 结果

Windows x64 初步安装器缩减到约 116 MiB，并保留运行时闭包和 PE 校验。该记录只描述公开协作内容，不代表组织项目由个人独立完成。
