#

```tsx
function App() {
  const [dom, setDOM] = useState(null);
 
  return <div ref={setDOM}></div>;
}
```

**ref** 有两种形式

- 形如 **{current: T}** 的数据结构
- 回调函数形式，会在 **ref** 更新、销毁时触发
例子中的 **setDOM** 是 **useState** 的 **dispatch** 方法，也有两种调用形式：

直接传递更新后的值，比如 **setDOM(xxx)**
传递更新状态的方法，比如 **setDOM(oldDOM => return /*一些处理逻辑*/)**
在例子中，虽然反常，但**ref**的第二种形式和**dispatch**的第二种形式确实是契合的。

也就是说，在例子中传递给**ref**的**setDOM**方法，会在「**div对应DOM**」更新、销毁时执行，那么**dom**状态中保存的就是「**div对应DOM**」的最新值。

---

[2个奇怪的React写法](https://zhuanlan.zhihu.com/p/613787501)
