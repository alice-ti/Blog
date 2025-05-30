# Tailwind CSS

## 项目中引入 **Tailwind CSS**

下载 **tailwind CSS** 所需依赖

```bash
npm install -D tailwindcss postcss autoprefixer
```

```js
/** postcss.config.js */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

将 `@tainwind` 指令放到 **css** 文件中

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 日常使用技巧

### 渐变背景使用

开始颜色`from-{color}`, 结束颜色`to-{color}`, 中间颜色`via-{color}`

```html
<div class="bg-gradient-to-r from-cyan-500 to-blue-500 ..."></div>
<div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></div>
```

### 背景图片

`bg-[url('图片路径')]`

```html
<div class="bg-[url('/img/hero-pattern.svg')]">
  <!-- ... -->
</div>
```

### 滚动条

[Tailwind CSS 方案简介](https://mp.weixin.qq.com/s/YH3RCYGdvd67jkmN8DPIgg)

[深入理解Tailwind CSS](https://mp.weixin.qq.com/s/rM83WQaWoQeNdLk-KyV3fQ)
