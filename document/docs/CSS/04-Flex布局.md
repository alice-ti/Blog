# Flex

## **display: flex** 和 **display: inline-flex**

> [CSS Display Module Level 3](https://link.zhihu.com/?target=https%3A//www.w3.org/TR/css-display-3/%23values) 定义了 **display** 可以接受两个值：

```css
.block-container {
    display: flex;

    /*相当于*/
    display: block flex;
}

.inline-container {
    display: inline-flex;
    /* 相当于 */
    display: inline flex;
}
```

## Flexbox中的换行

默认情况之下，位于Flexbox容器的所有子元素都会排在同一行（或同一列），但 **Flexbox** 容器的可用空间是未知的。当Flexbox没有足够多的空间来容纳其所有 **Flex** 项目（其子元素）时，**Flex** 项目会溢出 **Flexbox** 容器，将会打破布局或出现滚动条：

在Flexbox容器上显式设置 **flex-wrap** 的值为 **wrap**（默认值为 **nowrap** ）

```css
.flex-box {
    display: flex;
    flex-wrap: wrap;
}
```

**flex-wrap: wrap** 只有在Flex项目不能自动收缩扩展状态下有效.如果在Flex项目中显式设置了 **flex: 1** 时，即使你在**Flexbox**容器上显式设置**flex-wrap**为**wrap**也不能让**Flex**项目换行：

```html
<div class="flex-box">
  <div class="flex-item"></div>
  <div class="flex-item"></div>
  <div class="flex-item"></div>
</div>
```

```css
.flex-box {
    display: flex;
    flex-wrap: wrap;
}

.flex-item {
    flex: 1;
}
```

## flex: 1

**flex: 1** 它相当于

```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
```

如果未显式设置**flex**（它是**flex-grow**、**flex-shrink** 和 **flex-basis**的简写属性）时，其初始值是：

```css
flex-grow: 0;
flex-shrink: 1;
flex-basis: auto;
```

> 默认情况下，元素不会缩短至小于内容框尺寸，若想改变这一状况，请设置元素的 **min-width** 与 **min-height** 属性。

当 **flex-basis** 为 auto 时，Flex项目的宽度是 **max-content**。  

当设置 **flex:1** 时，**flex-basis**变成了0%，这将覆盖Flex项目的内在尺寸（**max-content**），Flex项目的基本尺寸现在是 **0**，但由于 **flex-grow**的存在，它们都可以增长以填补空的空间（Flexbox的剩余空间）。  

在这种情况下，**flex-shrink**不再做任何事情，因为所有的Flex项目现在的宽度都是0，并且正在增长以填补可用空间。
只不过，Flexbox容器有可有没有剩余空间，甚至是有不足空间。这个时候，flex:1也就不能均分Flexbox容器了。

```css
.item {
    flex: 1 1 0%;
    min-width: 0;
}
```

主轴上Flex项目的 **overflow** 属性是 **visible** 时，主轴上Flex项目的最小尺寸（**min-size**）将会指定一个自动的（**automatic**）最小尺寸 ”

## flex-flow

**`flex-flow`** 属性是 flex-direction 和 flex-wrap 的简写。

flex-direction 中的 `row-reverse` 表现同 **row** ，但是置换了主轴起点和主轴终点

## Flex 上的滚动失效

[flex-end为什么overflow无法滚动及解决方法](https://link.zhihu.com/?target=https%3A//www.zhangxinxu.com/wordpress/2021/12/flex-end-overflow/)

---
[让CSS flex布局最后一行列表左对齐的N种方法](https://www.zhangxinxu.com/wordpress/2019/08/css-flex-last-align/)

[CSS 防御](https://www.zhihu.com/question/424471207/answer/2317334806)

[终于搞懂了Flex:1 是怎么工作的了！](https://www.51cto.com/article/683878.html)
