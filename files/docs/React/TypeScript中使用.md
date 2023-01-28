
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
