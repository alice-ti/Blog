
# Typescript

## React.FC

## HTMLAttributes

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

## 常见事件的类型

> **onchange** 事件类型

```tsx
<input type="text" onChange={handleChange} />

const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // ...
}
```
