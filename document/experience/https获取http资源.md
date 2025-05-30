# https 中获取 http 资源问题

## 原因

由于谷歌在一次更新中加入了对于 **混合内容** 的处理

在浏览器中访问 **https** 页面时，如果该 **htpps** 页面中有一些 **http** 资源，我们可以把这些 **http** 资源，叫做**混合内容**（**Mixed Content**）。**htpps** 页面在显示**混合内容**时候，会出现以下问题：

 1. 加载了混合内容，但会出现警告

 2. 不加载混合内容，直接会显示空白内容

 3. 在加载混合内容之前，会出现类似是否“显示”，或存在不安全风险而被“阻止”的提示！

## 解决办法

其中一种解决办法是在html头部中添加如下信息

浏览器在解析请求的时候会自动把 **http** 请求转化为 **https** 请求。（ps: **https**可正常访问）

```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

---

[No More Mixed Messages About HTTPS](https://blog.chromium.org/2019/10/no-more-mixed-messages-about-https.html)
