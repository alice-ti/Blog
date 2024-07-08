# `<meta>` 标签

`<meta>` 标签主要用于表示和当前文档相关的 元数据 信息。

而 **元数据（`metadata`）**，简单的来说就是描述数据的数据。例如，一个 **HTML** **文件是一种数据**，但 HTML 文件也能在 **`<head>`** 元素中包含描述该文档的 **元数据**，比如该文件的作者和概要。

## `<meta> 属性`

### **`name`属性**

**`name`** 和 **`content`** 属性一起配合使用，以 **键值对** 的方式给文档提供元数据，其中 **`name`** 作为元数据的 **键**，**`content`** 作为元数据的 **值**。

- **name="`author`"**

  - 用来表示网页的作者的名字，例如某个组织或者机构，例如 `<meta name="author" content="aaa@mail.abc.com">`

- **name="`description`"**![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/p3q0CDzmjJMiaOdc66KmWcqicrWgtuVicb3nJ2ia3et6e42SQEIgWekzORRwicdUHsoOicTcr4QfZGOW10jhuuO0e8bQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  - 一段简短而精确的、对页面内容的描述

- **name="`keywords`"**![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/p3q0CDzmjJMiaOdc66KmWcqicrWgtuVicb3IV7mU2JukzxSwPxCTvAnVryJSWPRSrrIKcux0dy6b1oCMAXg5ZDKQg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  - 与页面内容相关的关键词，使用逗号分隔，便于某些搜索引擎在遇到这些关键字时对文档进行分类

- **name="`viewport`"**

  - 来控制视口的大小和形状，**详情可见**

- **name="`robots`"**

  - **all**：搜索引擎将索引此网页，并继续通过此 **网页的链接索引文件** 将被检索
  - **none**：搜索引擎将 **忽略** 此网页
  - **index**：搜索引擎 索引 此网页
  - **follow**：搜索引擎继续通过此网页的链接索引搜索 **其它的网页**
  - 表示爬虫对此页面的处理行为 或 应当遵守的规则，是用来做搜索引擎抓取的
  - 可设置 **`<meta name="robots" content="all | none | index | follow">`**<img src="https://mmbiz.qpic.cn/sz_mmbiz_png/p3q0CDzmjJMiaOdc66KmWcqicrWgtuVicb3Tz4ZIxhqr4I6azhuc0NIvrcs4V07YrUbEiaPoBp2cViaXeLhOEMJia4AQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1" alt="图片" style="zoom:150%;" />

- **name="`renderer`"**

  - 用来指定支持双核浏览器要采用哪种的渲染方式，如 360 浏览器

    <img src="https://mmbiz.qpic.cn/sz_mmbiz_png/p3q0CDzmjJMiaOdc66KmWcqicrWgtuVicb3NojOSvNh0WuQiaSvickX09hRJXM4C1gxe96jvAiavtjFkkBa1x35olobQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1" alt="图片" style="zoom:150%;" />

    ```html
    <meta name="renderer" content="webkit"> // 默认 webkit 内核
    
    <meta name="renderer" content="ie-comp"> //默认 IE 兼容模式
    
    <meta name="renderer" content="ie-stand"> //默认 IE 标准模式
    ```

### **http-equiv**

通过该属性可以设置特定 HTTP 标头内容，例如（非全部）：

- **http-equiv="X-UA-Compatible"**

  - 一般用来是做 **IE 浏览器适配** 的，如以下告诉 IE 浏览器使用最高版本来渲染页面 ![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/p3q0CDzmjJMiaOdc66KmWcqicrWgtuVicb3gQwPTAMrIUQ9x0wK0E6xIWH5iakNeUYxVhFrL2rXld1Uibo5RJZ1WAeg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- **http-equiv="Content-Type"**

  - 用于声明 **MIME 类型** 和 文档的 **字符编码**

    ```html
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    ```

- **http-equiv="x-dns-prefetch-control"**

  - **HTML** 页面中的 **`<a>` 标签** 会 **自动启用 DNS 提前解析** 来提升网站性能，但是在使用 **https** 协议的网站中失效，可通过设置以下方式进行打开

    ```html
    <meta http-equiv="x-dns-prefetch-control" content="on">
    ```

### **content**

此属性包含 **`http-equiv`** 或 **`name`** 属性的值，具体取决于所使用的值。

### **charset**

用于声明了 **文档的字符编码**，值得注意的是：

- 若使用这个属性，那么它的值只能是字符串 **`"utf-8"`** （不区分 ASCII 大小写），因为 **UTF-8 是 HTML5 文档的唯一有效编码**
- 声明字符编码的 **`<meta>`** 元素必须完全位于 **文档的前 1024 个字节内**

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/p3q0CDzmjJMiaOdc66KmWcqicrWgtuVicb3AiaaW4cHiaw9NaicqZ3qobrJakPhB4Em2ziao2qtANb7ctX8YZfe9ltLicA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

## **`<meta>` 扩展**

### **清除缓存**

在 **单页面应用 (`Single Page Application, SPA`)** 中，对应的 **html 文件** 是不需要被缓存的，只需要对 html 文件中的 **`CSS、JavaScript`** 等资源进行缓存（得益于现代构建工具的特性，可以直接使用 **强缓存**），那么此时我们就可以通过设置 **`<meta http-equiv>`** 来实现 html 文件清除缓存功能，如下：

```
html    <meta http-equiv="Expires" content="0" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Cache-control" content="no-cache" />
    <meta http-equiv="Cache" content="no-cache" />
```

这样的方式有利于在发布新版本后，避免通过手动清除浏览器缓存，如果不清除缓存就会加载旧版本的资源。

### **禁止翻译**

通常项目中可能会存在 **国际化** 的需求，这就意味着用户可以手动选择 **当前的语言环境**，但除此之外，通过浏览器本身也会存在对应的 **翻译插件**。

问题点在于，如果用户先使用 **浏览器翻译插件** 默认翻译文档内容，又切换了 **项目中的国际化** 功能，那么此时就导致文档中的内容出现翻译不准确。

而这个问题是亲身经历过的，只记得当时用户在 **Chrome 浏览器** 中反馈翻译不准确甚至出现意料之外字符的问题时，也是花费了一番功夫才确定是用户使用 **浏览器翻译插件** 的问题，针对 **Chrome 浏览器** 在访问我们自己的项目时可以让其不进行 **自动翻译**，可进行如下设置：

```html
<meta name="google" content="notranslate" />
```

### **自定义元数据**

除了使用 **`<meta>`** 标签本身提供特定元数据内容之外，我们其实也可以自定义元数据，只不过这个元数据不会被当前文档所识别并被应用，例如：

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/p3q0CDzmjJMiaOdc66KmWcqicrWgtuVicb359MB9ZvOxNz6IO5sjHrBQpjZxvfic9S3n0kMtpP0LqKYNBDpV2Pdib2A/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

---

[写 H5 页面真的要了解 <meta> 标签!](https://mp.weixin.qq.com/s/Rb0BCYmjMw7iHH4bi_wZCQ)
