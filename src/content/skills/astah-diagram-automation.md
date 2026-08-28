---
title: Astah Diagram Automation
summary: 用 Astah Java API 在事务里创建、修改和校验 .asta 中的类图、时序图与鲁棒性图，而不是去碰二进制工程文件。
date: 2026-07-01
tags: [UML, Astah, Java, Automation]
featured: false
kind: Design Skill
repository: https://github.com/zp-home/astah-diagram-automation
triggers: [类图生成, 时序图自动化, asta 工程修改]
---

UML 建模最容易被做错的自动化方式，是把 `.asta` 当成文本去改。它不是 XML 也不是 JSON，而是 Astah 的二进制工程数据，直接编辑的结果通常是一个打不开的文件。

这项 Skill 固定了另一条路径：用 Java 程序调 Astah API 打开工程，开事务，创建或删除模型元素与图上的表示，保存，再跑校验程序确认结果。

## 流程约束

- **先看再改。** 用 `DumpAstah` 打印包、图、类和 presentation 数量，确认目标位置，而不是凭猜测写入。
- **写前备份。** 以可写方式打开之前，先把 `.asta` 按时间戳复制一份到旁边。
- **改完必校验。** 时序图这类结构改动之后跑 `VerifySequenceBoundaries` 一类的校验器，确认模型元素和图上表示都对得上。
- **区分模型和表示。** 创建了模型元素不等于图上能看到它，两者要分别处理。

工具源码集中在 `asta_tools/`，编译和运行都显式带上 `astah-api.jar` 与 `astah-pro.jar` 的路径，保证换机器时失败得明显，而不是悄悄跑出一个空图。
