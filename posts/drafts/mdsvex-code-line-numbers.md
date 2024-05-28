---
title: "Adding line numbers to code blocks in Mdsvex"
date: "01-07-2023"
updated: null
categories: 
- svelte
- sveltekit
- mdsvex
- prism.js
coverImage: "/images/mdsvex.gif"
coverImageAlt: drops
coverWidth: 800
coverHeight: 450
excerpt: Diving into surreal db row security.
author: Daniel Railean
authorCurrentRole: Engineer
authorImageUrl: /images/pas.png
minutesToRead: 5
---

https://github.com/orgs/remarkjs/discussions/642

npm i remark-prism

yarn add @bitmachina/highlighter@1.0.0-alpha.6

```js title="Say hello to Shiki highlighting" showLineNumbers {0..3,7}
console.log('Hello, Shiki!");
console.log('Hello, Shiki!");
console.log('Hello, Shiki!");
console.log('Hello, Shiki!");
console.log('Hello, Shiki!");
console.log('Hello, Shiki!");
```