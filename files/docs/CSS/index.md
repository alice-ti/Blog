---
title 关于CSS
---

## 如何理解外边距塌陷？

外边距塌陷也被称为外边距合并。

是指两个在正常流中相邻的**上下块级元素**的边距塌陷，垂直距离取两个值中的较大者。

## 子元素有高度，父元素高度为 0，有哪些情况？

首先，这种情况被称为**高度坍塌**。

1. 父元素 `position: absolute` 绝对定位，脱离文档流

2. 父元素 `float` 设置了浮动，脱离文档流

## 伪元素和伪类的区别？

首先，先不要纠结于伪，先搞懂，什么是类，什么是元素。

- 伪类

类不就是 `class='title'` ，所以，它就是添加所谓的效果的。

常用的伪类有： `:active` , `:focus` , `:hover` , `:link` , `:visited` , `:visited` 等。

- 伪元素

元素不就是类似于 `<div></div>` 这种，在文档中有实际的占用空间的，能用来创建一些原有 DOM 结构不存在的元素。

常用的伪元素有： `::before` , `::after` , `::first-letter` , `::first-line` 等。

一般伪元素用 `::` 双冒号，伪类用 `:` 单冒号

## link 和@import 的区别？

## display:none 与 visibility:hidden 的区别

## z-index 属性在什么情况下会失效

---

title 关于CSS
---

## link 和@import 的区别

## 常见的图片格式及使用场景

## 对 CSSSprites 的理解

## CSS 预处理器是什么？为什么要使用它们

## 对 CSS 工程化的理解

## CSS 选择器

### 伪类和伪元素的区别

## 页面样式

### display:none 与 visibility:hidden 的区别

### 如何理解外边距塌陷

### 单行、多行文本溢出隐藏

### li 与 li 之间有看不见的空白间隔是什么原因引起的？如何解决？

### z-index 属性在什么情况下会失效

## 页面布局

### 两栏布局的实现

### 三栏布局的实现

### 水平垂直居中的实现

### 如何根据设计稿进行移动端适配

### 响应式设计的概念及基本原理

## 定位与浮动

### 为什么需要清除浮动？清除浮动的方式

### 使用 clear 属性清除浮动的原理

### 对 BFC 的理解，如何创建 BFC

### position 的属性有哪些，区别是什么

## 变形、滤镜与动画

### 对 requestAnimationframe 的理解

## 场景应用

### 实现一个三角形

### 实现一个宽高自适应的正方形

### 画一条 0.5px 的线

### 设置小于 12px 的字体

### 如何解决 1px 问题