# [React Router](https://reactrouter.com/en/main)

在 React 社区中，关于 Router 的方案比较多，用的比较多的一种是 React Router。

## 常用 Components

### [`<Navigate>`](https://reactrouter.com/en/main/components/navigate)

`<Navigate>`元素在呈现时改变当前位置。它是useNavigate的组件包装器，并接受所有与 props 相同的参数。

> 有一个基于组件的 useNavigate 钩子，在React中更容易使用这个特性。

### [Outlet](https://reactrouter.com/en/main/components/outlet)

在父路由元素中使用`<Outlet>`来呈现它们的子路由元素。在展示子路由时显示嵌套 UI。如果父路由完全匹配，它将展示子索引路由，如果没有索引路由，不展示。

> 有点类似 vue 中的 `<router-view>`

```tsx
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="messages"
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
    </Routes>
  );
}
```

## 常用 hooks

### [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)

useNavigate钩子返回一个函数，允许你以编程方式导航，例如在effect中:

```tsx
import { useNavigate } from "react-router-dom";

function useLogoutTimer() {
  const userIsInactive = useFakeInactiveUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (userIsInactive) {
      fake.logout();
      navigate("/session-timed-out");
    }
  }, [userIsInactive]);
}
```

```typescript
declare function useNavigate(): NavigateFunction;

interface NavigateFunction {
  (
    to: To,
    options?: {
      replace?: boolean;
      state?: any;
      relative?: RelativeRoutingType;
    }
  ): void;
  (delta: number): void;
}
```

导航函数有两个参数:

传递一个To值(与`<Link To >`类型相同)，并带有第二个可选的 `{replace, state}` 参数或
在历史堆栈中传递您想要的增量。例如，navigate(-1) 相当于点击后退按钮。

如果使用 `replace: true`，导航将替换历史堆栈中的当前条目，而不是添加一个新条目。

### [useParams](https://reactrouter.com/en/main/hooks/use-params)

useParams钩子返回一个由`<Route path>`匹配的当前URL动态参数的`键/值对`组成的对象。子路由继承父路由的所有参数。

```tsx
import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function ProfilePage() {
  // Get the userId param from the URL.
  const { userId } = useParams();
  // ...
}

function App() {
  return (
    <Routes>
      <Route path="users">
        <Route path=":userId" element={<ProfilePage />} />
        <Route path="me" element={...} />
      </Route>
    </Routes>
  );
}
```

### [useSearchParams](https://reactrouter.com/en/main/hooks/use-search-params)

```tsx
import * as React from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  let [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event) {
    event.preventDefault();
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.
    let params = serializeFormQuery(event.target);
    setSearchParams(params);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>{/* ... */}</form>
    </div>
  );
}
```

> setSearchParams 的第二个参数与 navigate 的第二个参数类型相同。

### [useLocation](https://reactrouter.com/en/main/hooks/use-location)

这个hooks 返回当前 location 对象

```tsx
import * as React from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();

  React.useEffect(() => {
    // Google Analytics
    ga('send', 'pageview');
  }, [location]);

  return (
    // ...
  );
}
```

### [useRoutes](https://reactrouter.com/en/main/hooks/use-routes)

useRoutes钩子在功能上相当于`<Routes>`，但它使用 JavaScript 对象而不是`<Route>`元素来定义路由。这些对象具有与普通`<Route>`元素相同的属性，但它们不需要 JSX 。

useRoutes 的返回值要么是一个有效的 React 元素，你可以用它来呈现路由树，如果没有匹配他就是``null`。

```tsx
import * as React from "react";
import { useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "messages",
          element: <DashboardMessages />,
        },
        { path: "tasks", element: <DashboardTasks /> },
      ],
    },
    { path: "team", element: <AboutPage /> },
  ]);

  return element;
}
```
