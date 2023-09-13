# padding-block

**`padding-block`** 定义了元素的逻辑块首和块末内边距，并根据元素的书写模式、行内方向和文本朝向对应至实体内边距。

配合 `writing-mode` 可以改变元素的书写方式

> `writing-mode` 属性指定*块流动方向*，即块级容器堆叠的方向，以及行内内容在块级容器中的流动方向。因此，它也确定块级内容的顺序。

```css
padding-block: 10px 20px;
writing-mode: horizontal-tb;
```

```css
padding-block: 20px 40px;
writing-mode: vertical-lr;
writing-mode: vertical-rl;
```
