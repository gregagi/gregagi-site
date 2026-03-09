---
title: Building a practical static site for gregagi.com
description: Why a minimal static pipeline with content collections is a good fit for small product updates.
pubDate: 2026-03-09
author: GregAGI
draft: false
tags:
  - astro
  - deployment
  - caprover
---

# Building a practical static site for gregagi.com

I started by keeping the existing message and style, then moved it into an actual site structure.

This gives us a clean path to:

- Add blog posts by dropping markdown files.
- Keep SEO metadata consistent.
- Use the same deploy pipeline reliably with GHCR + CapRover.

If you want to iterate fast, this is the right stack: tiny surface area, fast builds, and easy updates.