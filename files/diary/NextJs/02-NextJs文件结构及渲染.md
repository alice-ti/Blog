# 文件结构

## 目录结构

```tree
app
├── features
│   ├── metadata
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── template.tsx
│   ├── loading.tsx
│   └── error.tsx
├── page.tsx
├── layout.tsx
├── template.tsx
├── loading.tsx
├── error.tsx
└── not-found.tsx
```

路由为 `/` 页面会组合成这样的代码结构

```tsx
<Layout>
    <Template>
        <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
                <Page />
            </Suspense>
        </ErrorBoundary>
    </Template>
</Layout>

```

路由为 `/features/metadata` 页面的代码结构：

```tsx
<Layout>
    <Template>
        <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
                <Layout>
                    <Template>
                        <ErrorBoundary fallback={<Error />}>
                            <Suspense fallback={<Loading />}>
                                <Page />
                            </Suspense>
                        </ErrorBoundary>
                    </Template>
                </Layout>
            </Suspense>
        </ErrorBoundary>
    </Template>
</Layout>
```
