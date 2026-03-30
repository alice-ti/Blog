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

### 响应式

#### 断点前缀:类名

Tailwind CSS 通过 `断点前缀:类名` 的形式定义元素的响应式样式：

```react
'use client';

import useWindowWidth from '@/hooks/useWindowWidth';

export default function Home() {
  const width = useWindowWidth();

  return (
    <main className="text-center sm:bg-red-300 md:bg-orange-300 lg:bg-yellow-300 xl:bg-green-300 2xl:bg-blue-300">
      <div>hello tailwind css</div>
      <div>current width: {width}px</div>
    </main>
  );
}
```

没有加上断点前缀的类名默认是作用于所有设备大小的

#### 定义范围

如果只想在 `sm` 到 `lg` 的范围内应用某个样式，单纯的 `lg`是无法满足的。

这个时候就需要使用 `:max-`，`[min]`**:max-**`[max]`

```tsx
<main className="sm:max-lg:bg-red-300">
  <div>hello tailwind css</div>
</main>
```

### 滚动条

[Tailwind CSS 方案简介](https://mp.weixin.qq.com/s/YH3RCYGdvd67jkmN8DPIgg)

[深入理解Tailwind CSS](https://mp.weixin.qq.com/s/rM83WQaWoQeNdLk-KyV3fQ)
