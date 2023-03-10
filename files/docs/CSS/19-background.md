#

## 背景混合模式

**[background-blend-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-blend-mode)** 定义该元素的背景图片，以及背景色如何混合。

```css
/* 单值 */
background-blend-mode: normal;

/* 双值，每个背景一个值 */
background-blend-mode: darken, luminosity;
```

## [background-clip](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)

**background-clip** 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。

```css
background-clip: border-box; /* 背景延伸至边框外沿（但是在边框下层） */
background-clip: padding-box; /* 背景延伸至内边距（padding）外沿。不会绘制到边框处。 */
background-clip: content-box; /* 背景被裁剪至内容区（content box）外沿。 */
background-clip: text; /* 背景被裁剪成文字的前景色。 */
```
