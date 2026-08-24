---
title: DSH Recommend
summary: 面向 DSH 插件生态的透明排行与推荐站，自动采集公开仓库并用可解释规则生成榜单。
date: 2026-08-24
tags: [JavaScript, GitHub Actions, Static Site, Data Pipeline]
featured: true
role: 个人项目
status: 持续迭代
image: /images/project-recommend.webp
repository: https://github.com/zp-home/dsh-recommend
website: https://zp-home.github.io/dsh-recommend/site/
---

DSH Recommend 把分散的 `dsh-plugin` 公开仓库整理成可浏览、可比较的插件目录。核心不是给出一个神秘分数，而是让采集来源、评分项和更新时间都可以被检查。

## 负责的部分

- 设计每日自动采集和静态数据生成流程。
- 建立公开评分模型和推荐维度。
- 将结果输出为无需后端服务的静态站点。
- 为异常仓库、缺失字段和重复插件保留可追踪的处理路径。

## 工程取舍

选择 GitHub Actions 与静态站，是为了让榜单在低运维成本下持续更新。评分规则与生成物跟随仓库版本管理，便于回溯一次排行为什么发生变化。
