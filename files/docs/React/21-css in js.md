# [css in js](https://styled-components.com/)

## styled-components 使用

安装 `styled-components`

```bash
npm install --save styled-components
```

基础使用案例如下

```jsx
import { styled } from 'styled-components';

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: blue;
`;

const Header = styled.div`
  padding: 20px;
  background: pink;
`;

function App() {

  return (
      <Header>
        <Title>
          Hello World!
        </Title>
      </Header>
  )
}

export default App
```

## 组件添加样式

### 给普通组件加上样式

```jsx
import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface LinkProps extends PropsWithChildren {
  href: string;
  className?: string;
}

const Link: FC<LinkProps> = (props) => {
  const {
    href,
    className,
    children
  } = props;

  return <a href={href} className={className}>{children}</a>
}

const StyledLink = styled(Link)`
  color: green;
  font-size: 40px;
`;

function App() {
  return <div>
    <StyledLink href='#aaa'>click me</StyledLink>
  </div>
}

export default App
```

> 组件必须接收 `className` 参数，因为 `styled-components` 会把样式放到 `className` 上

### 已有组件添加样式

```jsx
import { styled } from 'styled-components';

const Item = styled.li`
    margin: 10px 0;
    padding: 5px 15px;
    border-left: 3px solid #333;
    font-size: 16px;
    list-style: none;
    font-weight: bold;
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
`;

const RedItem = styled(Item)`
    color: #fff;
    background: #991302;
`;

export default List = () => {
    return (
        <>
            <Item>这是一条普通的记录</Item>
            <Item>这也是一条普通的记录</Item>
            <Item underline>这条记录有一条下划线</Item>
            <RedItem>这是一条红色的记录</RedItem>
        </>
    )
}
```

> 对于`styled.li`这种书写模式，实际上和`styled('li')`是等价的，只是一种方法的别名而已

如果还想改样式组件的标签，可以用 `as`

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b4c19c87399a41408fd8a10dd46d3fa4~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp#?w=1054&h=828&s=137991&e=png&b=1f1f1f)

对于其他三方组件也可以通过这种方式覆盖组件默认样式，例如 antd

```jsx
// antd与Styled-Components配合使用
import styled from ‘styled-components';
// 面包屑控件
import { Breadcrumb } from 'antd';

const BreadcrumbStyled = styled(Breadcrumb)`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

ReactDOM.createRoot(document.getElementById('root')).render(
    <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item href="">应用中心</Breadcrumb.Item>
        <Breadcrumb.Item href="">应用列表</Breadcrumb.Item>
        <Breadcrumb.Item>某应用</Breadcrumb.Item>
    </Breadcrumb>
);
```

## 组件传参

### 普通组件传参

### 样式组件传参

```tsx
import { styled } from 'styled-components';

const Title = styled.h1<{ $color?: string; }>`
  font-size: 30px;
  text-align: center;
  color: ${props => props.$color || 'blue'}
`;

const Header = styled.div`
  padding: 20px;
  background: pink;
`;

function App() {
  return <Header>
    <Title>
      Hello World!
    </Title>
    <Title $color='green'>
      Hello World!
    </Title>
    <Title $color='black'>
      Hello World!
    </Title>
  </Header>
}

export default App
```

为了区分 **样式组件** 和 **普通组件** 传参，一般样式组件的 `props` 用 `$` 开头

```tsx
const StyledLink = styled(Link)<{ $color?: string;}>`
  color: ${props => props.$color || 'green'};
  font-size: 40px;
`;

function App() {
  return <div>
    <StyledLink href='#aaa' $color="purple">click me</StyledLink>
  </div>
}
```

### 修改 props

默认情况下，样式组件会透传所有不是它的 `props` 给被包装组件

用 `attrs` 方法，接收传入的 `props` 返回修改后的 `props`。

```tsx
import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface LinkProps extends PropsWithChildren {
  href: string;
  className?: string;
}

const Link: FC<LinkProps> = (props) => {
  console.log(props);

  const {
    href,
    className,
    children
  } = props;

  return <a href={href} className={className}>{children}</a>
}

const StyledLink = styled(Link).attrs<{ $color?: string;}>((props) => {
  console.log(props);

  props.$color = 'orange';
  props.children = props.children + 'ADD Props';
  return props;
})`
  color: ${props => props.$color || 'green'};
  font-size: 40px;
`;

function App() {
  return <div>
    <StyledLink href='#aaa' $color="purple">click me</StyledLink>
  </div>
}

export default App
```

`attrs` 支持对象和函数，简单的场景直接传对象也可以

```jsx
const Input = styled.input.attrs({ type: 'checkbox'})`
 height: 30px;
 width: 100%;
`

function App() {
    return (
     <Input />
    )
}
```

## 常用api使用

### 声明全局样式

`styled-components` 用 `createGlobalStyle` 创建全局样式

```jsx
import { styled, createGlobalStyle } from 'styled-components';

const Thing = styled.div`
  && {
    color: blue;
  }
`;

const GlobalStyle = createGlobalStyle`
   div${Thing} {
     color: red;
   }
 `;

render(
  <React.Fragment>
    <GlobalStyle />
    <Thing>I'm blue, da ba dee da ba daa</Thing>
  </React.Fragment>
);
```

### 伪类、伪元素

### 复用css

### 动画

动画使用 `keyframes` api 进行

```tsx
import { styled, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  font-size: 50px;
  padding: 30px;
`;

function App() {
  return <Rotate>X</Rotate>
}

export default App;
```

---

## 附录

- 常用api

  | api                                | 描述                                                   | 示例                                                         |
  | ---------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------ |
  | `styled.tagname`                   | 创建一个基于指定 HTML 标签的样式化组件。               | const StyledButton = styled.button``;                        |
  | `styled(Component)`                | 创建一个基于指定 React 组件的样式化组件。              | const StyledComponent = styled(OtherComponent)``;            |
  | `styled(Component).attrs({})`      | 为组件定义默认属性和属性值。                           | const StyledButton = styled.button.attrs({ type: "button" })``; |
  | `styled(Component).withConfig({})` | 使用指定的配置对象创建样式化组件。                     | const StyledComponent = styled(Component).withConfig({ displayName: "CustomComponent" })``; |
  | `css`                              | 用于编写样式字符串或动态样式的辅助函数。               | `const dynamicStyles = css`color: ${props => props.color};``; |
  | `ThemeProvider`                    | 用于向组件树提供主题对象，使样式可以根据主题进行定制。 | `<ThemeProvider theme={themeObject}><App /></ThemeProvider>`; |
  | `createGlobalStyle`                | 创建全局样式组件，可以在整个应用程序中共享和应用样式。 | const GlobalStyle = createGlobalStyle`body { margin: 0; }``; |

- [Antd Design Style - CSS in JS 快速入门](https://ant-design.github.io/antd-style/zh-CN/guide/css-in-js-intro)

- [神光 - 快速掌握 styled-components](https://juejin.cn/book/7294082310658326565/section/7353515881827139624)
