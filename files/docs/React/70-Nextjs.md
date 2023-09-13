# Next.js

## 创建 NextJs 项目

通过调用 `create-next-app` 工具完成的，该工具为你创建了一个 Next.js 应用程序。通过 `--example` 参数指定使用 [此模板](https://github.com/vercel/next-learn-starter/tree/master/learn-starter) 。

> 如果不成功，请查看 [此页面](https://github.com/vercel/next-learn-starter/blob/master/errors/install.md)。

```bash
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
```

```bash
# 使用pnpm
npx create-next-app nextjs-blog --use-pnpm
```

### 运行开发服务器

现在，您有了一个名为 `nextjs-blog` 的新目录。我们 `cd` 进入此目录：

```bash
cd nextjs-blog
```

```bash
npm run dev
```

这将在 **3000** 端口上启动 Next.js 应用程序的“开发服务器”, 在浏览器中打开 [http://localhost:3000](http://localhost:3000/) 。

## NextJs 目录解析

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

### 平行路由和插槽功能

使用 `@` 开头的目录名下面的文件，将会自动注入到 `Layout` 组件的 props 中。

## Next.js 项目创建

## Next.js 路由

在 **Next.js 12（及以下**）对应的路由系统，是所有路由文件都写在 **pages** 目录下，每个文件都会生成一个路由

相比于 **Next 12** ,**Next 13** 一个比较大的改动是基于文件的路由系统，增加了一个 **app** 目录，每一层路由必须建一个文件夹，在该文件夹中建立 **page.tsx** 作为该路由主页面

![Segment](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9741de1ba84b4b478863c0a8155cc6a6~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

Next.js 更改基于文件的路由系统

1. 实现嵌套路由和持久化缓存
2. 支持 React 18 中的 `React server Component`，实现 `Streaming`（流渲染）
3. 实现代码目录分组，将当前路由下的测试文件、组件、样式文件友好地放在一起，避免全局查找

### app 文件夹下的约定式路由

```tree
./app
├── GlobalNav.tsx
├── layout.tsx
├── page.tsx
├── layouts
│   ├── CategoryNav.tsx
│   ├── [categorySlug]
│   │   ├── SubCategoryNav.tsx
│   │   ├── [subCategorySlug]
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── template.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── template.tsx
```

每个文件下都有 3 个文件 `layout.tsx`、`page.tsx` 、`template.tsx`、

- `layout.tsx` 该路由下的公共导航，切换路由时，不会刷新
- `template.tsx` 该路由下的公共部分，切换路由时，会刷新
- `page.tsx` 该路由的主页面

当我们点击导航时候，页面上刷新部分边框会高亮闪烁，我们可以很好地理解代码目录结构组织与页面呈现的路由和渲染。

在 app 目录下每个文件夹下，还可以有 `loading.tsx`、`error.tsx`

- `loading.tsx` 该路由的主页面在异步渲染中，会显示的 loading 组件的内容；例如我们可以用它来写骨架屏（Skeleton）
- `error.tsx` 该路由的页面渲染出错，会显示该页面，也就是封装了 React 的 ErrorBoundary。

以上除了 `page.tsx` 其他文件都是可选的，除了这些约定名称的文件外，我们可以建立任意文件，比如 `components.tsx`、 `test.tsx` 等自定义文件。

app 目录可以很好地将页面、组件、测试文件放在一起，管理代码目录，避免开发时全局查找。

### 路由分组

app 同层级目录下还支持多个 `layout`， 使用 `（文件夹）`区分，`（文件夹）`不会体现在路由上，只是单纯用来做代码分组。

```tree
./app
├── (checkout)
│   ├── checkout
│   │   └── page.tsx
│   ├── layout.tsx
│   └── template.tsx
├── (main)
│   ├── layout.tsx
│   ├── page.tsx
│   └── template.tsx
```

![route-group](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-group-organisation.png&w=1920&q=75&dpl=dpl_FpaZTH2NWJVagicr5Ufftx42ZVuQ)

## React Server Components

## [渲染方式](..\..\wrong\基础渲染模式.md)

> 默认的js文件都只会运行在服务端，不会出现在客户端，如果需要在客户端进行交互的组件，那么需要在 `js` 文件最顶部添加 `"use client"` 来标识，表明代码需要在客户端运行，这时候这部分代码才会出现在客户端

---
[Next.js 13](https://nextjs.org/blog/next-13)

[你好，Next.js 13](https://juejin.cn/post/7160084572942630926)

[Next.js 13 的 app 目录模式功能梳理](https://juejin.cn/post/7221162775074734135)

[一起来学 next.js - getStaticProps、getStaticPaths 篇](https://juejin.cn/post/7177288314163036217)