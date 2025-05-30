# Common JS 和 ES Moudle

原生 **js** 引入很容易出现 **全局污染** 和 **依赖混乱** 现象

**全局污染**

```html
<body>
  <script src="./index.js"></script>
  <script src="./a.js"></script>
  <script src="./b.js"></script>
</body>
```

在 **index.js** 中的变量 `count` 可以在 **a.js** 中使用和修改，进而影响到 **index.js** 中其他使用到`count`的部分。

**依赖混乱**

正常情况下，执行 js 的先后顺序就是 **script** 标签排列的前后顺序

假设三个 js 中，都有一个公共方法 `fun1` ， `fun2` ， `fun3`。且互为依赖调用时，下层 js 能调用上层 js 的方法，但是上层 js 无法调用下层 js 的方法。

## Common JS

- 在 `commonjs` 中每一个 js 文件都是一个单独的模块，我们可以称之为 `module`；
- 该模块中，包含 `CommonJS` 规范的核心变量: `exports`、`module.exports`、`require`；
- `exports` 和 `module.exports` 可以负责对模块中的内容进行导出；
- `require` 函数可以帮助我们导入其他模块（自定义模块、系统模块、第三方库模块）中的内容；

```javascript
// name.js
const name = 'Alice-Ti'
module.exports = function getName (){
    return name
}
```

```javascript
// index.js
const Name = require('./name.js')
module.exports = function say(){
    return {
        name: getName(),
        author:'我不是外星人'
    }
}
```

`require`  查找文件顺序如下

- 在当前目录下的 `node_modules` 目录查找。
- 如果没有，在父级目录的 `node_modules` 查找，如果没有在父级目录的父级目录的 `node_modules` 中查找。
- 沿着路径向上递归，直到根目录下的 `node_modules` 目录。
- 在查找过程中，会找 `package.json` 下 main 属性指向的文件，如果没有  `package.json` ，在 node 环境下会以此查找 `index.js` ，`index.json` ，`index.node`

### exports 和 module.exports

## ES Module

### **导出 export 和导入 import**

所有通过 **export** 导出的属性，在 **import** 中可以通过结构的方式，解构出来。

导出 a.js

```js
// a.js
const name = 'Alice-Ti'

const Syna = () => {
    // xxx
}

export { name }
export default Syna
```

导入

```javascript
// b.js
import Syna, { name } from './a.js'
```

通过 export 导出的变量，这种情况下 import { } 内部的变量名称，要与 export { } 完全匹配

对于引入默认导出的模块，`import anyName from 'module'`， anyName 可以是自定义名称

### 重命名导入

```javascript
import { name as Aname } from 'module'
```

> 从 **module** 模块中引入 **name** ，并重命名为 Aame 。然后在当前模块下，使用被重命名的名字。

### 重定向导入

可以把当前模块作为一个中转站，一方面引入 **module** 内的属性，然后把属性再给导出去

```javascript
export * from 'module' // 第一种方式
export { name, ..., } from 'module' // 第二种方式
export { name as Aname, ... } from 'module' //第三种方式
```

- 第一种方式：重定向导出 module 中的所有导出属性， 但是不包括 `module` 内的 `default` 属性。
- 第二种方式：从 **module** 中导入 name  再以相同的属性名，导出。
- 第三种方式：从 **module** 中导入 name ，重属名为 Aname 导出。

### 动态导入

```javascript
const promise = import('module')
```

`import('module')`，动态导入返回一个 `Promise`。为了支持这种方式，需要在 `webpack`  或 `vite`中做相应的配置处理

### ES Moudle 特性

- **静态语法**

  ES6 module 的引入和导出是静态的，`import` 会自动提升到代码的顶层 。

  > `import` , `export` 不能放在块级作用域或条件语句中。  
  >
  > import` 的导入名不能为字符串或在判断语句。

- **导出绑定**

  **不能修改import导入的属性**

  - 使用 import 被导入的模块运行在严格模式下。
  - 使用 import 被导入的变量是只读的，可以理解默认为 const 装饰，无法被赋值
  - 使用 import 被导入的变量是与原变量绑定/引用的，可以理解为 import 导入的变量无论是否为基本类型都是引用传递。

### **import() 动态引入**

`import()` 返回一个 `Promise` 对象， 返回的 `Promise` 的 then 成功回调中，可以获取模块的加载成功信息

#### **动态加载**

`import()` 动态加载一些内容，可以放在条件语句或者函数执行上下文中

```javascript
if(isRequire){
    const IMG  = import('./img.png')
}
```

#### **懒加载**

`import()` 可以实现懒加载

例如vue 中的路由懒加载

````javascript
[
   {
        path: 'home',
        name: '首页',
        component: ()=> import('./home') ,
   },
]
````

**React中动态加载**

```jsx
const LazyComponent =  React.lazy(()=>import('./text'))

const Home = () => {
 return (
        <Suspense 
            maxDuration={500} 
            fallback={<div>抱歉，请耐心等待 Loading...</div>}
        >
            <OtherComponent />
            <OtherComponentTwo />
        </Suspense>
    )
}
```

### Tree Shaking 和 Code Splitting

// TOBE Continue

---

[CommonJS模块和ESM模块](https://mp.weixin.qq.com/s/dq-RHXhn9ZjlLqdV9mabpQ)

[「万字进阶」深入浅出 Commonjs 和 Es Module](https://cloud.tencent.com/developer/article/1884093)
