# vue 中动态引入图片方案

## require

```javascript
<img :src="require(`@/assets/image-demo.jpg`)" />
// 或者
    
const url = require(`@/assets/image-demo.jpg`)
```

不使用 require 动态导入

````javascript
<img :src="../assets/logo.png" alt="logo">
````

动态添加的 src 最终会编译成一个静态的字符串地址。

程序运行的时候，会按照这个地址去项目目录中引入资源。而去项目目录中引入资源的这种方式，就是将该资源当成了静态资源。

> Q&A
>
> **加上require为什么能正确的引入资源？**
>
> 通过require方法拿到的文件地址，是资源文件编译过后的文件地址（dist下生成的文件或base64文件），因此可以找对应的文件，从而成功引入资源。

### 图片预加载

```javascript
// example 
// 图片预加载, 
preloadImages () {
    let imgCounts = 0;      // 已加载图片计数，可实现真实进度条 
    const imgsFun = require.context('../images', true, /.(png|jpg)$/);
    const imgKeys = imgsFun.keys();

    imgKeys.forEach(item => {
        const Img = new Image();
        Img.src = imgsFun(item);
        Img.onload = function () {
            imgCounts++;
        }
        Img.onerror = function () {
            imgCounts++;
        };
    });
}
```

## import()

```javascript
import(specifier);
```

import 函数的参数 specifier，指定所要加载的模块的位置。import 命令能够接受什么参数，import()函数就能接受什么参数，两者区别主要是后者为动态加载

> 使用 import() 需要考虑异步问题，新造一个变量接收或者原始数据中多加一个键，**还要注意这引入是异步的，需要async、await转同步**

## [new URL(url, import.meta.url)](https://cn.vitejs.dev/guide/assets.html#new-url-url-import-meta-url)

[import.meta.url](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta) 是一个 ESM 的原生功能，会暴露当前模块的 URL。

```javascript
const imgUrl = new URL('./img.png', import.meta.url).href

document.getElementById('hero-img').src = imgUrl
```

这个模式同样还可以通过字符串模板支持动态 URL：

```javascript
function getImageUrl(name) {
  return new URL(`./dir/${name}.png`, import.meta.url).href
}
```

## require 和 import 之间的区别

require 是运行时加载模块，但 import 命令会被 javascript 引擎静态分析，先于模块内其他模块执行，做不到运行时加载，因此为了实现类似于 require 的动态加载，就提出了实现一个 import() 函数方法。

---

[在vue中动态的引入图片为什么要使用require](https://zhuanlan.zhihu.com/p/622465389)
