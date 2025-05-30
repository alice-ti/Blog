# CommonJs 和 ES Module

**Js** 社区存在多种模块化规范，目前流行的js模块化规范有CommonJS、AMD、CMD、UMD以及ES6。其中最常使用到的是 **node** 本身实现的 `commonjs` 和 es6 标准的 `es module`。

## **CommonJS**

NodeJS是CommonJS规范的主要实践者，它有四个重要的环境变量为模块化的实现提供支持：`module`、`exports`、`require`、`global`。实际使用时，用`module.exports`定义当前模块对外输出的接口（不推荐直接用`exports`），用`require`加载模块

```javascript
// 定义模块math.js
var total = 10;
function add(a, b) {
  return a + b;
}
// 需要向外暴露的函数、变量
module.exports = {
  add: add,
  total: total
}

/** 必须加./路径，不加的话只会去node_modules文件找 **/
// 引用自定义的模块时，参数包含路径，可省略.js
var math = require('./math');
math.add(2, 5);

// 引用核心模块时，不需要带路径
var http = require('http');
http.createService(...).listen(3000);
```

`CommonJS` 用**同步**的方式加载模块。**在服务端，模块文件都存放在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。**

### `exports`和`module.export`区别

- `exports`：对于本身来讲是一个变量（对象），它不是module的引用，它是`{}`的引用，它指向`module.exports`的{}模块。只能使用`.`语法 向外暴露变量。
- `module.exports`：`module`是一个变量，指向一块内存，`exports`是`module`中的一个属性，存储在内存中，然后`exports`属性指向`{}`模块。既可以使用`.`语法，也可以使用`=`直接赋值。

## **AMD**

AMD规范采用**异步方式加载模块**，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。

## CMD

CMD 是另一种js模块化方案，它与AMD很类似，不同点在于：**AMD推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行**

## **UMD（Universal Module Definition - 通用模块定义）**

UMD是AMD和CommonJS的一个糅合。AMD是浏览器优先，异步加载；CommonJS是服务器优先，同步加载。

先判断是否支持node.js的模块，存在就使用node.js；再判断是否支持AMD（define是否存在），存在则使用AMD的方式加载。这就是所谓的UMD。

## **ES6 Module**

ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为浏览器和服务器通用的模块解决方案。其模块功能主要由两个命令构成：`export`和`import`。`export`命令用于规定模块的对外接口，`import`命令用于输入其他模块提供的功能。

```javascript
/** export default **/
//定义输出
export default { basicNum, add };

//引入
import math from './math';
function test(ele) {
    ele.textContent = math.add(99 + math.basicNum);
}
```

## **ESM 模块与 CommonJS 模块**

1. **CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用**

   > CommonJS 模块输出的是**值的拷贝**，也就是说，一旦输出一个值，**模块内部的变化就影响不到这个值**。

2. **CommonJS 模块是运行时加载，ES6 模块是编译时输出接口**

   > - 运行时加载: `CommonJS` 模块就是对象。即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。
   > - 编译时加载: `ES6` 模块不是对象，而是通过 `export` 命令显式指定输出的代码，`import`时采用静态命令的形式。即在`import`时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。模块内部引用的变化，会反应在外部。

## SUMMARY

1. CommonJs 主要针对服务端，AMD/CMD/ES Module主要针对浏览器端

2. AMD/CMD区别

   > 都是并行加载js文件，但还是有所区别，

   1. AMD是预加载，在并行加载js文件同时，还会解析执行该模块（因为还需要执行，所以在加载某个模块前，这个模块的依赖模块需要先加载完成）
   2. CMD是懒加载，虽然会一开始就并行加载js文件，但是不会执行，而是在需要的时候才执行。

---

[深入浅出 ESM 模块 和 CommonJS 模块](https://segmentfault.com/a/1190000041396029)

[彻底搞懂AMD、CMD、UMD、ESM和CommonJS](https://zhuanlan.zhihu.com/p/467991875)
