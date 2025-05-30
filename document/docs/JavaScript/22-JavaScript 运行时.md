# JavaScript runtime

<img src="https://gcdeng.com/assets/images/js-engine-c9d4b21208066e974fa3a538c0dd79c2.jpeg" alt="js-engine.jpeg" style="zoom:150%;" />

可以把浏览器的 runtime 想成一个机器，这个机器由若干个零件组成。

![runtime](https://ithelp.ithome.com.tw/upload/images/20210909/20129476TQdN4y0K6I.png)

## JavaScript 引擎

里面有两个东西：

1. Memory Heap
2. Calling Stack

### Memory Heap（堆）

1. 分配空间给「复杂数据类型」使用，分配好之后会得到一个地址（例如 function, object, array）
2. 释放不再使用的内存空间(Garbage Collection)

### Calling Stack（栈）

1. 用来保存「基本数据类型」（例如 number, string…）
2. JavaScript 执行上下文（Execution Context）（决定什么时候会做什么事情）

### Web APIs

1. 通过浏览器 `window` 物件可以用浏览器提供的方法
2. 所以 JavaScript 本身沒有这些方法，只是接到了浏览器的 ***Web APIs***  所以才可以用它们

### Callback Queue/Task Queue（**回调队列**也叫**消息队列**）

这个队列负责保存「已经调用」的 `callback function`。然后当 `Calling Stack` 空了的时候，**Event loop** 就会把队列中的 `callback function` 传给 `Calling Stack` ，以便执行 `callback function` 的任务。

### Event Loop（**事件循环**）

Event Loop 最重要的工作，就是控制 *Call Stack* 和 *Callback Queue(Task Queue)*

`Event Loop`只有一个任务：检查call stack是否是空的，如果发现是空的，就从消息队列(callback queue)推送(push)一个任务(item)进call stack

> 要注意 Event loop 一次只会推一个，当 call stack 空了它才会推另一个。

![event-loop](https://cdn.datainfinities.com/images/10-event-loop.png)

1. Javascript engine 执行 call stack 中的任务。
2. 当遇到 Web APIs 或是无法处理的任务时候会交给 Javascript runtime 执行，Javascript runtime 处理完成后会将任务交给 callback function，并将 callback function 放进 queue 中，形成 Callback Queue。
3. Javascript runtime 等待 call stack 中的任务全部执行结束变成空的，从 callback queue 中拉取第一个任务放进 call stack，回到第一步继续重复循环下去。

### Macrotask Queue（宏任务）

macrotask 包含：

- 从 `<script src="...">` 外部下载的 script
- DOM event handlers，例如 mousemove event 的 callback function handler
- 各种 Web APIs，例如 setTimeout 的 callback function
- ajax callback function

macrotask 在执行时浏览器不会渲染(render)DOM，浏览器会被阻塞住，也就是只执行 macrotask 不会做其他事情，有时我门会看到浏览器跳出页面沒有响应的警告，可能就是因為 macrotask 有复杂运算(CPU-hungry tasks)或是代码逻辑错误导致无限循环发生，使得其他任务无法被处理。

<img src="https://gcdeng.com/assets/images/Screen_Shot_2021-05-16_at_10.37.11_PM-82dd3d3de0ac10d80cccff54a783ea5e.png" style="zoom:150%;" />

### Microtask Queue（微任务）

microtask 包含:

- Promise `.then/catch/finally` 中的 callback function
- `queueMicrotask(func)` 中的 func

每个 macrotask 执行结束后会先將 microtask queue 中的 task 全部执行完，才会继续执行浏览器渲染跟其他 macrotask。

将 callback queue 分解成 macrotask 以及 microtask 之后，他门在 Event Loop 中详细的运行流程会是这样：

1. 从 macrotask queue 中拿出一个 macrotask 丟到 call stack 中执行。
2. 將 microtask queue 中全部的 task 依照顺序 Dequeue 到 call stack 中执行。
3. Browser render DOM。
4. 如果 macrotask queue 是空的，sleep 直到 macrotask 再次出现。
5. 回到步驟 1。

<img src="https://gcdeng.com/assets/images/Screen_Shot_2021-05-17_at_12.55.38_AM-6ebd3c9e3fe41d1f60883fda4dff857a.png" style="zoom:150%;" />

## 调用栈 (Call Stack)

JavaScript 是一个单线程编程语言，这意味着它只有一个调用栈。因此在同一时间它执行一个任务。

`Call Stack` 会记录我们目前代码跑到什么位置，如果执行了一个函数，我们会把这个函数放到 (pop in) Stack 的顶端，函数执行结束之后，这个函数就会跳出 (pop out) Stack 中

调用栈是一种我们程序中的基本记录的数据结构。

- 每调用一个函数，解释器就会把该函数添加进调用栈并开始执行。
- 正在调用栈中执行的函数还调用了其他函数，那么新函数也将会被添加进调用栈，一旦这个函数被调用，便会立即执行。
- 当前函数执行完毕后，解释器将其清出调用栈，继续执行当前执行环境下的剩余的代码。
- 当分配的调用栈空间被占满时，会引发“堆栈溢出”错误。

![js-call-stack.png](https://gcdeng.com/assets/images/js-call-stack-dc991081d4b66d710932b193427678af.png)

## 执行过程

JavaScript 执行过程分为两个阶段:

- 编译阶段
- 执行阶段

### 编译阶段

在编译阶段 JS 引擎主要做了三件事：

- 词法分析
- 语法分析
- 字节码生成

### 执行阶段

在执行阶段，会分情况创建各种类型的执行上下文，例如：**全局执行上下文** (只有一个)、**函数执行上下文**。而执行上下文的创建分为两个阶段：

- 创建阶段
- 执行阶段

在创建阶段会做如下事情：

- 绑定 this
- 为函数和变量分配内存空间
- 初始化相关变量为 `undefined`

我们日常提到的 变量提升 和 函数提升 就是在 **创建阶段** 做的，所以下面的写法并不会报错：

```javascript
console.log(msg);
add(1,2)

var msg = 'hello'
function add(a,b){
  return a + b;
}
```

因为在执行之前的创建阶段，已经分配好了 `msg` 和 `add` 的内存空间。

---

[JavaScript 工作原理：JS 引擎，runtime 和调用栈的概述](https://lyn-ho.github.io/posts/b2f2d94f/)

[解釋 Event Loop ( 下 ) --- Task Queue ( Callback Queue )](https://ithelp.ithome.com.tw/m/articles/10261593)

[Event Loop and Callback Queue in JavaScript](https://www.datainfinities.com/10/event-loop-and-callback-queue-in-javascript)

[深入了解事件循环(Event Loop，Macrotask和Microtask)](https://gcdeng.com/series/Javascript/javascript-deep-dive-into-event-loop)
