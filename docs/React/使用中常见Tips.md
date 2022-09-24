
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
