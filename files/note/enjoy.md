---
title: Enjoy
tech:
  -
    name: Vue3 Docs
    link: https://vuejs.org/
  - 
    name: React Docs
    link: https://react.dev/
  - 
    name: Astro Docs
    link: https://astro.build/

upper:
  -
    name: Next
    link: https://nextjs.org/

deploy:
  -
    name: Vercel
    link: https://vercel.com/docs?redirected=1
  - 
    name: Railway
    link: https://railway.app/dashboard

forward:
  - 
    name: Chat GPT
    link: https://chat.openai.com/chat
---

# {{ $frontmatter.title }}

## technology

<Tools :list="$frontmatter.tech" />

## Upper frame

<Tools :list="$frontmatter.upper" />

## Deployment

<Tools :list="$frontmatter.deploy" />

## AIGC

<Tools :list="$frontmatter.forward" />
