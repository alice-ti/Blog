# DOM

## document

### document.activeElement

> 返回当前在 **DOM** 或者 **shadow DOM** 树中处于聚焦状态的 **Element**

```js
// 判断输入框是否聚焦
document.getElementById('#input') == document.activeElement
```

## scrollWidth、clientWidth、offsetWidth的区别

- 网页可见区域宽：document.body.clientWidth;
- 网页可见区域高：document.body.clientHeight;
- 网页可见区域高：document.body.offsetWeight:
- 网页可见区域高：document.body.offsetHeight;
- 网页正文全文宽：document.body.scrollWidth;
- 网页正文全文高：document.body.scrollHeight;
- 网页被卷去的高：document.body.scrollTop;
- 网页被卷去的左：document.body.scrollLeft;
- 网页正文部分上：window.screenTop;
- 网页正文部分左：window.screenLeft;
- 屏幕分辨率的高：window.screen.height;
- 屏幕分辨率的宽：window.screen.width;
- 屏幕可用工作区高度：window.screen.availHeight;
- 屏幕可用工作区宽度：window.screen.availWidth;

> **scrollWidth**  是对象的实际内容的宽，不包边线宽度，会随对象中内容的多少改变（内容多了可能会改变对象的实际宽度）

> **clientWidth**  是对象可见的宽度，不包滚动条等边线，会随窗口的显示大小改变。

> **offsetWidth**  是对象的可见宽度，包滚动条等边线，会随窗口的显示大小改变。
