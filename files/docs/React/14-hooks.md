# Hooks

## react 常用hooks

### useState & useReducer

### useEffect & useLayoutEffect

#### [useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)

### useMemo & useCallback

### useContent

### useImmer

### useRef

## 常用 Api

### forwardRef

访问其他组件的DOM节点

1. ```<MyInput ref={inputRef} />``` 告诉React将相应的DOM节点放入 **inputRef.current** 。这通常取决于 **MyInput** 组件，默认情况下，它不会.
2. ```MyInput``` 组件使用 **forwardRef** 声明。它接收来自 **prop** 的 **inputRef** 作为第二个 **ref** 参数.
3. ```MyInput``` 将它直接接收到的 **ref** 传递给内部的 ```<input>```

```jsx
import { forwardRef, useRef } from 'react'

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />
})

export default function Form() {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus()
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  )
}
```

#### 使用 **useImperativeHandle** 限制公开的能力

## React-DOM

### flushSync
