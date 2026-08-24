---
title: DSH Weixin ClawBot
summary: 通过腾讯官方微信 ClawBot/iLink 通道，从手机侧连接并控制 DSH 工作流。
date: 2026-08-24
tags: [Weixin, Remote Control, Plugin, Messaging]
featured: false
role: 个人项目
status: 持续迭代
image: /images/project-weixin.jpg
repository: https://github.com/zp-home/dsh-weixin-clawbot
---

这个插件把 DSH 的工作入口延伸到手机侧。重点不是简单转发消息，而是让远程请求进入一个有通道身份、会话状态和执行边界的插件流程。

## 关注方向

- 对接腾讯官方 ClawBot/iLink 通道。
- 在移动端请求和 DSH 会话之间建立映射。
- 保留插件级配置与错误诊断。
- 控制远程能力范围，避免消息入口直接获得无限执行权限。
