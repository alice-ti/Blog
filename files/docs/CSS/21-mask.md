# Mask

CSS 属性 **mask** 允许使用者通过部分或者完全隐藏一个元素的可见区域。这种效果可以通过遮罩或者裁切特定区域的图片。

```css
.target {
  mask: url(#c1) luminance;
}

.anothertarget {
  mask: url(resources.svg#c1) 50px 30px/10px 10px repeat-x exclude;
}
```

[CSS Masking](https://ishadeed.com/article/css-masking/)
