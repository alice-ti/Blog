
# React 读书笔记

> [React Docs]("https://beta.reactjs.org/learn/sharing-state-between-components")

## JSX

## render & commit

1. Triggering a render
2. Rendering the component
3. Committing to the DOM

render 始终是一个 **pure-function**

## state

> React waits until all code in the event handlers has run before processing your state updates.
> (React 会等到事件处理程序中的所有代码都运行后、才会处理状态更新)

> After the event handler completes, React will trigger a re-render. During the re-render, React will process the queue.

**setState** 更新函数命名规范

```jsx
setEnabled(e => !e);
setLastName(ln => ln.reverse());
setFriendCount(fc => fc * 2);
```

## component

### 受控组件与非受控组件

## Build

常见创建react项目方式

### 🍓 Cra

```sh
npx create-react-app react-app
```

你也可以使用TS

```sh
npx create-react-app react-ts-app --template typescript
```

### 🍇 Umi

> 你可以通过 **yarn create umi** 或 **npm create umi** 使用 **create-umi**。推荐使用 **yarn create** 命令、能确保每次使用最新的脚手架。[Umi传送门]('https://v2.umijs.org/zh/guide/create-umi-app.html#%E4%BB%8B%E7%BB%8D-create-umi')

```sh
mkdir myapp && cd myapp
yarn create umi
```

### 🍒 Vite

创建vite项目

使用npm

```sh
npm create vite@latest
```

使用yarn

```sh
yarn create vite
```

使用pnpm

```sh
pnpm create vite
```

然后按照提示操作即可！

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。

查看 [create-vite]('https://github.com/vitejs/vite/tree/main/packages/create-vite') 以获取每个模板的更多细节：**vanilla**、**vanilla-ts**、**vue**、**vue-ts**、**react**、**react-ts**、**preact**、**preact-ts**、**lit**、**lit-ts**、**svelte**、**svelte-ts**。

### 🍊 Next

创建Next项目

```sh
npx create-next-app nextjs-app
```
