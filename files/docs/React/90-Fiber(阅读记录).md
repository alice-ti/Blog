
# ⛵

> [React 技术揭秘](https://react.iamkasong.com/)

React 架构

- Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler
- Reconciler（协调器）—— 负责找出变化的组件
- Renderer（渲染器）—— 将变化的组件渲染到页面上

---

## Fiber实现原理

> [Fiber Principles](https://github.com/facebook/react/issues/7942)

Fiber并不是计算机术语中的新名词，中文翻译叫做纤程，与进程（Process）、线程（Thread）、协程（Coroutine）同为程序执行过程。

**React Fiber** 可以理解为：React内部实现的一套状态更新机制。支持任务不同**优先级**，可中断与恢复，并且恢复后可以复用之前的**中间状态**。
其中每个任务更新单元为 **React Element** 对应的 **Fiber节点**。

### Fiber 结构

```javascript
function FiberNode(
  tag: WorkTag,
  pendingProps: mixed,
  key: null | string,
  mode: TypeOfMode,
) {
  // 作为静态数据结构的属性
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.type = null;
  this.stateNode = null;

  // 用于连接其他Fiber节点形成Fiber树
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;
  this.refCleanup = null;

  // 作为动态的工作单元的属性
  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;
  this.dependencies = null;

  this.mode = mode;

  // Effects
  this.flags = NoFlags;
  this.subtreeFlags = NoFlags;
  this.deletions = null;

  // 调度优先级相关
  this.lanes = NoLanes;
  this.childLanes = NoLanes;

  // 指向该fiber在另一次更新时对应的fiber
  this.alternate = null;
}
```

每个Fiber节点有个对应的 **React element**，多个 **Fiber节点** 依靠如下属性连接形成树

```JavaScript
// 指向父级Fiber节点
this.return = null;
// 指向子Fiber节点
this.child = null;
// 指向右边第一个兄弟Fiber节点
this.sibling = null;
```

### 静态的数据结构

保存组件相关信息

```javascript
// Fiber对应组件的类型 Function/Class/Host...
this.tag = tag;
// key属性
this.key = key;
// 大部分情况同type，某些情况不同，比如FunctionComponent使用React.memo包裹
this.elementType = null;
// 对于 FunctionComponent，指函数本身，对于ClassComponent，指class，对于HostComponent，指DOM节点tagName
this.type = null;
// Fiber对应的真实DOM节点
this.stateNode = null;
```

---

## Fiber工作原理

**Fiber节点** 可以保存对应的 **DOM节点**，**Fiber节点** 构成的 **Fiber树** 就对应 **DOM树**

**DOM** 更新使用到了 **[双缓冲(在内存中构建并直接替换)](https://baike.baidu.com/item/%E5%8F%8C%E7%BC%93%E5%86%B2/10953356)** 技术

### 双缓冲

> **双缓冲** 即在内存中创建一个与屏幕绘图区域一致的对象，先将图形绘制到内存中的这个对象上，再一次性将这个对象上的图形拷贝到屏幕上，这样能大大加快绘图的速度。

**React** 使用 **双缓冲** 来完成 **Fiber树** 的构建与替换——对应着 **DOM树** 的创建与更新

### 双缓冲Fiber树

在 **React** 中最多会同时存在两棵 **Fiber树**。  
当前屏幕上显示内容对应的 **Fiber树** 称为 **current Fiber树**，正在内存中构建的 **Fiber树** 称为 **workInProgress Fiber树**。

**current Fiber树** 中的 **Fiber节点** 被称为 **current fiber**，**workInProgress Fiber树** 中的 **Fiber节点** 被称为 **workInProgress fiber**，他们通过 **alternate** 属性连接。

```javascript
  currentFiber.alternate === workInProgressFiber;
  workInProgressFiber.alternate === currentFiber;
```

React应用的根节点通过使 **current指针** 在不同Fiber树的 **rootFiber** 间切换来完成 **current Fiber树** 指向的切换。

即当 **workInProgress Fiber树** 构建完成交给 *Renderer* 渲染在页面上后，应用根节点的 **current指针** 指向 **workInProgress Fiber树**，此时 **workInProgress Fiber树** 就变为 **current Fiber树**。

每次状态更新都会产生新的 **workInProgress Fiber树**，通过 **current** 与 **workInProgress** 的替换，完成 **DOM更新**。

> **workInProgress fiber** 的创建可以复用 **current Fiber** 树对应的节点数据。（由diff算法决定是否复用）
