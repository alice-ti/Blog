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

## HTMLCollection 和 NodeList

### NodeList 类型

NodeList 类型是一组节点的集合，通常由查询 DOM 树返回。它是一个类数组对象，它的每个元素都是一个 `Node` 类型的节点。`NodeList` 类型是**只读**的，**不能**直接修改其中的元素。

### HTMLCollection 类型

HTMLCollection 类型是一组元素节点的集合，通常由查询 DOM 树返回。它是一个类数组对象，它的每个元素都是一个 Element 类型的元素节点。HTMLCollection 类型也是只读的，不能直接修改其中的元素。

### 如何获取

#### ***HTMLCollection***

- `document.getElementsByTagName`
- `document.getElementsByClassName`
- `HTMLElement.children`
- `document.forms`
- `document.images`

#### ***NodeList***:

- `document.getElementsByName`
- `document.querySelectorAll`
- `HTMLElement.childNodes`

> 最重要的区别是，**HTMLCollection** 仅包含 tags(以及id/name分别标记的) 元素， 而 **NodeList** 包含所有的节点。

差异：

- `NodeList` 类型和 `HTMLCollection` 类型都是只读的，不能直接修改其中的元素。但 `NodeList` 类型通常是动态的，即当 **DOM 树**发生变化时，`NodeList` 对象会自动更新。而 `HTMLCollection` 类型通常是静态的，即它们只包含文档加载时存在的元素节点，不会自动更新。

- `HTMLCollection` 元素可以通过 `name`，`id` 或 `index` 索引来获取。`NodeList` 只能通过 `index` 索引来获取。

- `NodeList` 类型和 `HTMLCollection` 类型都具有一些相似的属性和方法，例如 `length`、`item()` 和 `[index]`。但 `HTMLCollection` 类型还具有一个特有的方法 `namedItem()`，它可以根据元素的名称或 ID 返回元素节点。

- `HTMLCollection` 和 `NodeList` 本身无法使用数组的方法，都是类数组，`NodeList` 可以直接使用 `forEach()`方法

---

参考blog

- [HTMLCollection 和 Nodelist 的异同](https://www.cnblogs.com/jaycethanks/p/17125951.html)
