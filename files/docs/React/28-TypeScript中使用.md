
# Typescript

## React.FC

## HTMLAttributes

## React.CSSProperties

```tsx
const listStyle: React.CSSProperties = {
    lineHeight: '200px',
    textAlign: 'center',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16
  }

  return (
    <>
      <AdvancedSearchForm />
      <div style={listStyle}>Search Result List</div>
    </>
  )
```

## PropsWithChildren

```tsx
import React, { HTMLAttributes, PropsWithChildren } from 'react'

interface HelloProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
}

const Hello: React.FC<PropsWithChildren<HelloProps>> = ({
    name,
    children,
    ...rest
}) => {
    return (
        <div>
            <div {...rest}>{`Hello, ${name}!`}</div>
            {children}
        </div>
    );
}
```

## 在指定条件下需要属性定义

```ts
type ItemType = 'input' | 'rangePicker' | 'select'
interface SearchOptionsWithType {
  type: 'select' // 指定值的类型
  label: string
  name: string
  options: number[] // 只在 type 为时需要 options
}

interface SearchOptionsWithoutType {
  type?: Exclude<ItemType, 'select'> // 排除掉指定值的类型
  label: string
  name: string
}

export type SearchOptions = SearchOptionsWithType | SearchOptionsWithoutType
```

## 常见事件的类型

> **onchange** 事件类型

```tsx
<input type="text" onChange={handleChange} />

const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // ...
}
```

> **onclick** 事件类型

````tsx
import { type MouseEvent } from 'react'

const handleClick = (e: MouseEvent<HTMLElement>) => {
  console.log('click button', e)
}

<Button type="primary" onClick={handleClick}>TME</Button>
````

## 请求处理

```tsx
export type AwaitWrap<T, K = any> = Promise<[T | null, AxiosError<K> | null]>

export const awaitwrap = async <T, K>(promise: Promise<AxiosResponse<T>>): AwaitWrap<T, K> => {
  return await promise
    .then(async (data: AxiosResponse<T>) => await ([data, null] as unknown as AwaitWrap<T, K>))
    .catch(async (err: AxiosError<K>) => await ([null, err] as unknown as AwaitWrap<T, K>))
}
```

使用：

```tsx
export const Test = async (data: Partial<TestParams>): AwaitWrap<API_REST<num>> => {
  return await awaitwrap(
    request('/api/test', {
      method: 'GET',
      data
    })
  )
}
```
