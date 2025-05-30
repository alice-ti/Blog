# JSX 使用与理解

## JSX 概念

根据**React**官网的解释
> JSX 是 JavaScript 的语法扩展(*syntax extension*)，允许您在 JavaScript 文件中编写类似 HTML 的标记

**JSX** 实质上是 **[cloneElement](https://beta.reactjs.org/reference/react/cloneElement)** 的语法糖，每一个标签都会被 JSX 转换成纯 **Javascript** 代码。

## JSX 使用

JSX 有一些规则必须遵守

- **JSX** 必须返回单个根节点（如果你不想使用`div`在父级包裹，你可以使用 **[Fragment](https://beta.reactjs.org/reference/react/Fragment)**）
- 同 **HTML** 一样，每个标签必须是关闭的。
- 使用小驼峰替换 HTML 中的连字符写法，所有 HTML 原生属性与方法都替换为小驼峰。

### 在 HTML 中使用 JSX

```jsx
<div>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</div>
```

### 在 JavaScript 中使用 JSX

使用 *{}* 来加载 **JavaScript** 内容

```jsx
export default function TodoList() {
  const name = 'Gregorio Y. Zara';
  return (
    <h1>{name}'s To Do List</h1>
  );
}
```

同样，你也可以用来加载 **CSS** 对象

```jsx
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

## 条件渲染

> 在 *JSX* 中可以使用 **JavaScript** 中的 *?*、*if*、*&&* 来实现

```jsx
function Item({ name, isPacked }) {

  if(isPacked) {
    return <li className="item"> {name} {isPacked && '✔'} </li>
  }

  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```

## 列表渲染

> 可以使用JavaScript数组方法来处理数据数组。如 **filter()** 和 **map()**.

```jsx
const people = [{
  id: 0, // Used in JSX as a key
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1, // Used in JSX as a key
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2, // Used in JSX as a key
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}];

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

```
