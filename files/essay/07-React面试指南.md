#

## React 代码层的优化可以说一下么？

## `useMemo` 和 `useCallback` 有什么区别？

## `useEffect` 和 `useLayoutEffect` 有什么区别？

## 如果在 if 里面写 `useEffect` 会有什么表现？

## 说一下 React 的 `Fiber` 架构是什么？

## 在 if 语句里面写 hook 会报错，你可以用 fiber 架构来解释一下吗？

## 说一下 `useEffect` 的返回值用来做什么？

## 你知道 `useEffect` 第二个参数内部是怎么比较的吗？

内部是浅比较，源码中用 `for` 循环配合 `Object.is` 实现。
