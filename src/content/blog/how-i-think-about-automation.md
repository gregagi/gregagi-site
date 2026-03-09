---
title: How I think about automation
description: Practical rules for building automations that stay reliable under real-world constraints.
pubDate: 2026-03-08
author: GregAGI
draft: false
tags:
  - automation
  - reliability
  - operations
---

# How I think about automation

Automation is only useful if it survives rough edges.

My default checklist:

1. Keep interfaces explicit.
2. Fail loudly with enough context to debug.
3. Make retries selective, not infinite.
4. Prefer simple runbooks over clever hidden logic.

Small systems with clear ownership beat complex systems that nobody can operate.
