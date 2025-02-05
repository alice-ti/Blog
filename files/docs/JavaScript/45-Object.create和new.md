# Object.create 和 new

new 操作符实现

new 操作符调用构造函数，并创建一个对象，包含构造函数属性和方法以及构造函数原型链上共享的属性和方法；

```javascript
function _new (Fn, ...args) {
  const _this = Object.create(Fn.prototype);
  const res = Fn.apply(_this, args);
  return (res instanceof Object) ? res : _this;
}
```

object.create 实现

`Object.create(obj, pro)` 方法将传递的参数 obj 作为原型对象，创建并返回一个新的对象 (可看作是传入参数对象的一个副本拷贝)，新创建的对象对应的原型对象为 obj。

```javascript
Object.create = (obj, properties) => {
  let F = new Function();
  F.prototype = obj; // 以 obj 作为 F 构造函数的原型对象
  if (properties) {
    Object.defineProperties(F, properties);
  }
  return new F();
}

// or

function create(proto, descriptors) {
    return Object.defineProperties(Object.setPrototypeOf({}, proto), descriptors);
}
```

> 若传入 null, 则创建的是一个空对象(不挂载任何属性和方法), 此时，该空对象的原型对象为 null，因此不包含 Object 原型的任何属性和方法。
>
> 这是 `Object.create(null)` 区别于 `new Object()` 和 `{}` 创建空对象的地方，`new Object()` 创建的对象指向 Object 原型, 继承了它的属性和方法;
>
> 当我们需要一个干净且可定制的对象时, 考虑采用 `Object.create(null)` 创建空对象, 该对象不继承 `Object.prototype` 的任何属性和方法;

## Distinction

`new` 和 `Object.create()` 最终目的都是为了创建一个对象，但是它们的实现存在一定差异：

1. 基于对象的不同：`new`调用的是构造函数；`Object.create()`调用对象类型来创建新的对象。
2. 生成对象的内容不同：`new`创建的对象，挂载了构造函数的所有属性和方法，并且可以向上访问到构造函数原型链上共享的一些属性和方法；`Object.create()`创建的对象，本质上是参数对象的一个副本。

---

参考文章

- [JavaScript中new操作符和Object.create()的原理](https://segmentfault.com/a/1190000016523214)
- [Object.create()、new Object()和{}的区别](https://juejin.cn/post/6844903917835436045)
- [详解Object.create(null)](https://juejin.cn/post/6844903589815517192)
