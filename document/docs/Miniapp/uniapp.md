# 小程序

使用 **uniapp** 进行开发

## 🍊创建一个 uniapp 项目

> uni-app支持通过 **可视化界面**、**vue-cli**命令行两种方式快速创建项目。

### 🎉 可视化界面创建

1.点击工具栏里的文件 -> 新建 -> 项目（快捷键**Ctrl+N**）

2.选择**uni-app**类型，输入工程名，选择模板，点击创建，即可成功创建。

### 🍀 通过脚手架创建

#### 使用正式版本

```shell
vue create -p dcloudio/uni-preset-vue my-project
```

#### 使用alpha版本

```shell
vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
```

#### 使用Vue3/Vite版

> 如命令行创建失败，请直接访问 [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite.zip)下载模板

```shell
npx degit dcloudio/uni-preset-vue#vite my-vue3-project
```

```shell
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
```

## 🌽 运行、发布uni-app

```shell
npm run dev:platform
npm run build:platform
```

**platform**取值如下

> app平台生成打包资源（支持npm run build:platform，可用于持续集成。不支持run，运行调试仍需在HBuilderX中操作）

| platform      |    value      | Cool  |
| ------------- |:-------------:| -----:|
| h5 | H5
| mp-alipay | 支付宝小程序
| mp-baidu | 百度小程序
| mp-weixin | 微信小程序
| mp-toutiao| 字节跳动小程序
| mp-lark | 飞书小程序
| mp-qq | qq 小程序
| mp-360 | 360 小程序
| mp-kuaishou | 快手小程序
| mp-jd | 京东小程序
| mp-xhs | 小红书小程序
| quickapp-webview | 快应用(webview)
| quickapp-webview-union | 快应用联盟
| quickapp-webview-huawei | 快应用华为

## 🌮 uniapp

### 🍳 条件注释

> 条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台。

**写法：** 以 **#ifdef** 或 **#ifndef** 加 %PLATFORM% 开头，以 **#endif** 结尾。

**#ifdef**：if defined 仅在某平台存在

**#ifndef**：if not defined 除了某平台均存在

支持的文件

- .vue
- .js
- .css
- pages.json

各预编译语言文件，如：.scss、.less、.stylus、.ts、.pug

```javascript
// #ifdef  %PLATFORM%
平台特有的实现
// #endif
```

> 样式的条件编译，无论是 css 还是 sass/scss/less/stylus 等预编译语言中，必须使用 **/\*注释\*/** 的写法。
