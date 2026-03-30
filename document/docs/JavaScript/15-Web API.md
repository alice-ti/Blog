# Web API

## [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)

> **MutationObserver** 是用于监视 **DOM** 树内的特定节点的 **Web API** 接口，一旦监测到节点发生变化，就会通知回调函数执行相应的逻辑。

## [structuredClone](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/structuredClone)

> 浏览器原生深拷贝API

```javascript
// 创建一个具有值和对自身的循环引用的对象。
const original = { name: "MDN" };
original.itself = original;

// 对它进行克隆
const clone = structuredClone(original);

console.assert(clone !== original); // 对象并不相同（标识不同）
console.assert(clone.name === "MDN"); // 它们具有相同的值
console.assert(clone.itself === clone); // 且保留了循环引用
```
