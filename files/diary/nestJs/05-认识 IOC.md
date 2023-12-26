# IOC (Inverse Of Control)

**[依赖倒转原则 (Dependency Inversion Principle, DIP)](https://notfalse.net/1/dip)** ：

1. 高阶模块不应该依赖于低阶模块，两者都改依赖抽象。
2. 抽象不应该依赖于具体实现方式。
3. 具体实现方式则应该依赖抽象。

## 什么是 IOC(控制反转)

在采用面向对象方法设计的软件系统中，它的底层实现都是由N个对象组成的，所有的对象通过彼此的合作，最终实现系统的业务逻辑。

例如：

A对象內部需要使用B对象 A,B对象中有依赖的成份

控制反转就是把原本A对B直接控制权移交給由第三方容器

降低A对B对象的耦合程度，并让双方都依赖抽象。

> 系统中模块建议依赖抽象，因为各个模块间不需要知道对方太多细节，知道越多耦合越强。



为了解决对象之间的耦合度过高的问题，提出了IOC理论，用来实现对象之间的“解耦”

> **IOC** 借助于“第三方”(也就是IOC容器)实现具有依赖关系的对象之间的解耦



## IOC 与 DI Dependency Injection (依赖注入)

依赖注入(DI)和控制反转(IOC)是从不同的角度的描述的同一件事情，就是指通过引入IOC容器，利用依赖关系注入的方式，实现对象之间的解耦。



---

[控制反轉 (IoC) 與 依賴注入 (DI)](https://notfalse.net/3/ioc-di)

[如何理解IOC 依赖注入的思想（目前见过最好的对DI的描述）](https://developer.aliyun.com/article/69721)

[IOC(控制反轉) ， DI(依賴注入) 深入淺出~](https://ithelp.ithome.com.tw/articles/10211075)

[Inversion of Control Containers and the Dependency Injection pattern](https://martinfowler.com/articles/injection.html)
