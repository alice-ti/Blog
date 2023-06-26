# `export default` 和 `export`

## import 中的解构赋值

```javascript
// a.js
export default {
    name: "alice",
    age: 16
}
```

正常在 `b.js` 中使用是没问题的

```javascript
// b.js
import aaa from "./a"

const { name } = aaa;
console.log(name);
```

当我们尝试在`import`时使用解构赋值，则会出现问题

```javascript
// b.js
import { name } from "./a"

console.log(name); // undefined
```

此时的`name`值是`undefined` ，`import` 中的解构与一般意义上的解构并不完全一致，我们的代码在经过`babel`转译之后会发生变化：

```javascript
export default {
    name: "alice",
    age: 16
}

// 经过babel转译后
module.exports.default = {
    name: "alice",
    age: 16
}
```

我们在 `import xxx from xxx` 时，程序实际上会去自动获取 `xxx` 的 `default` 下的值。只要我们将 `default` 下的值直接赋值到 `module.exports` 下就可以实现 `import` 的解构赋值。

```javascript
module.exports = exports['default'];
```

已经有插件来实现类似操作 [babel-plugin-add-module-exports](https://github.com/59naga/babel-plugin-add-module-exports#readme)

## export 导出解构对象

