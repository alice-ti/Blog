
# [Data URL](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)

> Data URL，即前缀为 **data:** 协议的 URL，其允许内容创建者向文档中嵌入小文件。

**Data URL** 由四个部分组成：前缀（data:）、指示数据类型的 MIME 类型、如果非文本则为可选的 **base64** 标记、数据本身

```sh
data:[<mediatype>][;base64],<data>
data:[<mime type>][;charset=<charset>][;<encoding>],<encoded data>
```

目前支持的 `<mime type>` 有以下格式

```
data:,
data:text/plain,
data:text/html,
data:text/html;base64,
data:text/css,
data:text/css;base64,
data:text/javascript,
data:text/javascript;base64,
data:image/gif;base64,
data:image/png;base64,
data:image/jpeg;base64,
data:image/x-icon;base64
```

使用时候,直接在`<img>` src 属性，或者在css中 url 直接使用

```html
<img src="data:xxxxxxxxxxxx" />
```

## Data URL 的优缺点

优点

- 当访问外部资源很麻烦或受限时
- 当图片是在服务器端用程序动态生成，每个访问用户显示的都不同时。
- 可以减少网络请求（当图片的体积太小，占用一个HTTP会话不是很值得时）。
- 字符串编码方便传输存储。

缺点

- Base64编码的数据体积通常是原数据的体积4/3，也就是Data URL形式的图片会比二进制格式的图片体积大1/3。
- Data URL形式的图片不会被浏览器缓存，这意味着每次访问这样页面时都被下载一次。这是一个使用效率方面的问题——尤其当这个图片被整个网站大量使用的时候。
- 不能在客户端进行缓存。（如图片，只能通过css文件进行背景图片缓存）
- 渲染时需要base64解码，需要消耗cpu资源。
