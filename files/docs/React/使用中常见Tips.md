
# Tips

## 拆分请求组件

对于一些逻辑交互不是很复杂的数据显示部分，使用独立的组件，独立请求数据，并独立控制呈现模式。

```jsx
function ComponentA(){
    const [ dataA, setDataA ] = useState(null)
    useEffect(()=>{
       getDataA().then(res=> setDataA(res.data)  )
    },[])
    return  <div> { dataA } </div>
} 

function ComponentB(){
    const [ dataB, setDataB ] = useState(null)
    useEffect(()=>{
       getDataB().then(res=> setDataB(res.data)  )
    },[])
    return  <div> { dataB } </div>
} 

function ComponentC(){
    const [ dataC, setDataC ] = useState(null)
    useEffect(()=>{
       getDataC().then(res=> setDataC(res.data)  )
    },[])
    return  <div> { dataC } </div>
}  

function Index (){
    return <div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
    </div>
}
```

## React 中使用 css

```jsx
import styles from './index.css';

const App = () => (
    ...
    <div className={styles['app']}>App</div>
    ...
)
```

一般直接在 JS 文件中导入一个 CSS 文件，如 **import './index.css'**，这种方式引入的 CSS 会在全局作用域内有效

在 Create React App 中的一种解决方案是，以 **.module.css** 为后缀的文件会启用 CSS Modules，以 **.css** 为后缀的文件不启用。

## 常用组件分类

- 通用型组件: 比如Button, Icon等.
- 布局型组件: 比如Grid, Layout布局等.
- 导航型组件: 比如面包屑Breadcrumb, 下拉菜单Dropdown, 菜单Menu等.
- 数据录入型组件: 比如form表单, Switch开关, Upload文件上传等.
- 数据展示型组件: 比如Avator头像, Table表格, List列表等.
- 反馈型组件: 比如Progress进度条, Drawer抽屉, Modal对话框等.
- 其他业务类型
