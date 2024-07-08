# this 指向问题

## 箭头函数 this 指向

箭头函数无法通过 `bind` `call` `apply` 等方式设置 this，由于箭头函数的this是在定义时而非调用时绑定的，所以你不能使用.bind(this)等方式来改变箭头函数内部的this指向
