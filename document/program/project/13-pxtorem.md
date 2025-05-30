# pxtorem

## postcss-pxtorem

是一个PostCSS插件，它会将px单位转换成rem单位。首先，你需要在你的项目中安装这个插件以及PostCSS：

```bash
npm install postcss postcss-pxtorem --save-dev
```

然后，你可以在项目的根目录下创建或修改`postcss.config.js` 配置文件，加入 `postcss-pxtorem` 的配置：

```json
module.exports = {
  plugins: {
    tailwindcss: {}, // 如果你使用Tailwind CSS，保留这行
    autoprefixer: {}, // 自动添加浏览器前缀，如果需要的话

    // 配置postcss-pxtorem
    'postcss-pxtorem': {
      rootValue: 16, // 根据设计稿来，例如设计稿宽度为750px，则此值可以设置为75
      propList: ['*'], // 需要转换的属性列表，['*']表示所有属性
      unitPrecision: 5, // 转换后的小数位数
      mediaQuery: false, // 允许在媒体查询中转换px
      minPixelValue: 0, // 设置要替换的最小像素值
      exclude: /node_modules/i // 忽略node_modules目录下的文件
    }
  },
}
```

## lib-flexible

---

[lib-flexible与viewport--关于移动端适配方案的替换](https://juejin.cn/post/6961658865876205576)
