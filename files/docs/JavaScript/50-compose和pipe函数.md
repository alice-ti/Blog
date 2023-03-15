
## compose 函数

**compose** 函数可以将需要嵌套执行的函数平铺，嵌套执行就是一个函数的返回值将作为另一个函数的参数。

```js
// 参数从右往左执行
const res = compose(second, first)(10)
```

**compose** 方法实现，需要借助一下 **Array.prototype.reduceRight**

```js
const compose = function(){
  // 将接收的参数存到一个数组， args == [multiply, add]
  const args = [].slice.apply(arguments)
  return function(x) {
    return args.reduceRight((res, cb) => cb(res), x)
  }
}
```

使用 **ES6** 语法会更加简洁

```js
const compose = (...args) => x => args.reduceRight((res, cb) => cb(res), x);
```

## pipe 函数

**pipe** 函数跟 **compose** 函数的左右是一样的，也是将参数平铺，只不过他的顺序是 **从左往右**,只需要将 **reduceRight** 替换为 **reduce** 即可。

```js
const pipe = function(){
  const args = [].slice.apply(arguments);
  return function(x) {
    return args.reduce((res, cb) => cb(res), x);
  }
}
```

**ES6** 写法

```js
const pipe = (...args) => x => args.reduce((res, cb) => cb(res), x)
```
