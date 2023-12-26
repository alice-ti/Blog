# <input>

## 激活拼写校验

**spellcheck** 可以使用 HTML 的 **spellcheck** 属性并将其设置为true以激活拼写检查。使用 **lang** 属性指定待检查的语言。

```html
<input type="text" spellcheck="true" lang="en">
```



## compositionEvent API

DOM 接口 **`CompositionEvent`** 表示用户间接输入文本（如使用输入法）时发生的事件。

此接口的常用事件有

- [`compositionstart`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/compositionstart_event) 在IME的文本复合系统打开时触发。即开始输入拼音时候触发
- [`compositionupdate`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/compositionupdate_event) 在插入新字符时触发，同 input 事件触发一样，只是触发的时机早于 input
- [`compositionend`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/compositionend_event) 输入完成，即选中文字真正输入输入框之后

> **如果直接输入完成（如直接输入英文）是不会触发这三个事件的，只有 onChange 事件。**
>
> **如果 input 的 value 没有变化则不会触发 `onCompositionStartEnd` 事件**



> 使用此 API 结合 `onChange` 可以解决 `<Input>` 输入中文输入法时 `onchange` 触发多次问题

### useCompositions

```tsx
import React from 'react';

type TInputElement = HTMLInputElement | HTMLTextAreaElement;

export interface CompositionsResult {
  value: string, 
  setValue: React.Dispatch<React.SetStateAction<string>>,
  onChange: (event: React.ChangeEvent<TInputElement>) => void,
  onComposition: (event: React.CompositionEvent<TInputElement>) => void,
}

function useCompositions(
  defaultValue: string,
  onSearch?: (value: string) => void,
): CompositionsResult{
  const [value, setValue] = React.useState<string>(defaultValue);
  const compositionLockRef = React.useRef<boolean>(false);

  const handleSearch = (value: string) => {
    onSearch && onSearch(value);
  }

  const onChange = (event: React.ChangeEvent<TInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (compositionLockRef.current) return; // 允许输入中文时更新视图 value，但不触发数据逻辑
    handleSearch(newValue);
  }

  const onComposition = (event: React.CompositionEvent<TInputElement>) => {
    if (event.type === 'compositionend') {
      compositionLockRef.current = false;
      handleSearch(event.currentTarget.value);
    } else {
      compositionLockRef.current = true;
    }
  }

  return {
    value,
    setValue,
    onChange,
    onComposition
  }
}

export default useCompositions
```

### 使用

```tsx
const App = () => {
    const handlerSearch = _.throttle((val: string) => {
        fetchListDataApi(val); // fetch API
    })
    
    const { value, onChange, onComposition } = useCompositions('', handlerSearch)
    
    return (
        <input 
            value={value} 
            onChange={onChange}
            onCompositionStart={onComposition}
            onCompositionEnd={onComposition}
        />
    )
}
```

