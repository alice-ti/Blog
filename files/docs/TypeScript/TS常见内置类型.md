
## Partial 将一个类型的属性全部变为可选

```typescript
type Partial<T> = {
    [P in keyof T]?: T[P]
}
```

## Required 将一个类型的属性全部变为必选

```typescript
type Required<T> = {
    [P in keyof T]-?: T[P]
}
```

## Readonly 将一个类型的属性全部变为只读状态

```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}
```

## Record 构造一个字面量对象 Type

```typescript
type Record<K extends keyof any, T> = {
    [P in K]: T
}
```

## Pick 从一个 Type 中选取一些属性来构造一个新的对象 Type

```typescript
type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}
```

> 使用示例

```typescript
interface User {
    name: string
    age: number
}

// 只需要 User 的 name 属性。
type UserType = Pick<User, "name">
```

## Omit 从一个对象类型中删除一些属性来构造一个新的对象 Type

```typescript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
```

> 使用示例

```typescript
interface User {
    name:string;
    age:number;
}

// 不需要 User的 name 属性。
type UserType = Omit<User, "name">
```

## Exclude 排除一个联合类型中的某一些类型来构造一个新 Type

```typescript
type Exclude<T, U> = T extends U ? never : T
```

> 使用示例

```typescript
// 排除掉 "name"
type UserType = Exclude<"name" | "age", "name">

// 等价于
type User= "age"
```

## Extract 提取出一个联合类型中的某一些类型来构造一个新 Type

```typescript
type Extract<T, U> = T extends U ? T : never
```

> 使用示例

```typescript
// 从 T1 中 提取出 T2
type T1 = "name" | "age" | "hob"
type T2 = "name" | "age"
type UserType = Extract<T1, T2>

// 等价于
type UserA = "name" | "age"
```

## NonNullable 从类型中排除 null 和 undefined 来构造一个新的 Type

```typescript
type NonNullable<T> = T extends null | undefined ? never : T
```

> 使用示例

``` typescript
// 从 UserInfoK 中 排除掉 null | undefined 
type UserInfoK = NonNullable<"name" | "hob" | undefined>

// 等价于
type UserInfoKA = "name" | "hob"
```

## Parameters 从 [函数 Type] 的形参构造一个数组 Type

```typescript
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
```

## ReturnType 用函数 Type 的返回值定义一个新的 Type

```typescript
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
```

## ConstructorParameters 从定义的[构造函数]的形参构造数组 Type

```typescript
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
```
