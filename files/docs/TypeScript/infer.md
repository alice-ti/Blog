# infer

```typescript
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```

> **infer** 只能在 extends 的右边使用，**infer P** 的 **P** 也只能在条件类型为 True 的一边使用

1. **infer**  必须在 **extends** 右侧使用，因为必须保证这个已知类型是由右侧的泛型推出来的，不然推导它的参数还有什么意义呢？检查时会跳过使用了 **infer** 的地方。
2. 遵循以下规则推导 P，有四种情况：

- P 只在一个位置占位：直接推出类型
- P 都在协变位置占位：推出占位类型的联合
- P 都在逆变位置占位：推出占位类型的交叉（目前只有参数是逆变）
- P 既在顺变位置又在逆变位置：只有占位类型相同才能使 extends 为 true，且推出这个占位类型

## 推导泛型参数

```typescript
type numberPromise = Promise<number>;
type n = numberPromise extends Promise<infer P> ? P : never; // number
```
