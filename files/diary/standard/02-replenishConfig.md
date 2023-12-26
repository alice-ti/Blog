# 补充设置

## [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)

> 一个 **ESLint** 插件，它用于自动对 **JavaScript** 或 **TypeScript** 中的 **import** 语句进行排序。这个插件使用简单的规则对 **import** 语句进行分类，将其分为以下几类：

- 从 **npm** 包中导入的模块
- 从本地文件夹中导入的模块
- 从文件夹的上级目录中导入的模块
- 从根目录中导入的模块

按照这些规则，**eslint-plugin-simple-import-sort** 可以自动将 **import** 语句按照上述顺序进行排序，从而使代码更加整洁。

### 在项目中安装 **eslint-plugin-simple-import-sort**

```bash
npm install --save-dev eslint-plugin-simple-import-sort
```

### 在项目的 **ESLint** 配置文件中启用该插件

```js
{
  "plugins": ["simple-import-sort"],
  "rules": {
    "simple-import-sort/sort": "error"
  }
}
```
