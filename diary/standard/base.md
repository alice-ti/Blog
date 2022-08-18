
# 🍳 项目规范配置

这对团队来说特别有帮助。这会避免你和你团队成员产生额外的心智负担，一旦你接受了如何写你的代码以及如何格式化的某些约定，

## 🧊 代码规范

> eslint + prettier + husky + lint-staged + commitlint

## 🦑 eslint

安装 **eslint** 依赖

```shell
npm install eslint --save-dev
```

### 初始化配置文件

```shell
npx eslint --init

✔ How would you like to use ESLint? 
✔ What type of modules does your project use? 
✔ Which framework does your project use? 
✔ Does your project use TypeScript? 
✔ Where does your code run? 
✔ How would you like to define a style for your project? 
✔ Which style guide do you want to follow? 
✔ What format do you want your config file to be in? 
```

## 🦐 Pritter

安装 **prettier** 依赖

```shell
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

- eslint-config-prettier: 关闭所有不必要或可能跟 **prettier** 产生冲突的规则
- eslint-plugin-prettier: 可以让 **eslint** 使用 **prettier** 规则进行检查

**.eslintrc.cjs** 文件中添加 **extends** 设置

```shell
{
    // ...
    "extends": [
        // ...
        "plugin:prettier/recommended",
    ],
}
```

根目录下创建 **.prettierrc.cjs** 文件

```shell
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": true,
  "singleQuote": true
}
```

## 🦞 配置 commitlint

安装相关依赖

```shell
npm i @commitlint/cli @commitlint/config-conventional -D
```

### 根目录创建 commitlint.config.js

```shell
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

| platform      |    value      |
|:------------: |:-------------:|
| build |  编译相关的修改，例如发布版本、对项目构建或者依赖的改动 |
| ci | 持续集成修改|
| docs | 文档修改
| feat | 新特性、新功能|
| fix | 修改
| bugperf | 优化相关，比如提升性能、体验|
| refactor | 代码重构|
| revert | 回滚到上一个版本|
| style | 代码格式修改, 注意不是 css 修改|
| test | 测试用例修改|
| chore | 其他修改，比如改变构建流程、或者增加依赖库、工具等|

## 🦀 集成 husky 与 lint-staged

使用 **mrm** 集成 husky 与 lint-staged

```shell
npx mrm@2 lint-staged
```

执行命令之后，你就会看到你的 **package.json** 里多了一个 **lint-staged** 配置项，且根目录下多了一个 **.husky** 目录，里面就包含了 **pre-commit** 文件，文件里包含了一个最基础的命令：**npx lint-staged**

---

## npx 查找规则

1. 去 **/node_modules/.bin** 目录下查找是否存在对应的命令，如果没有找到则执行第 2 步；
2. 去 **$PATH** 里查找是否有对应的命令，通常在这里查找的是你全局安装的命令，如果没有找到则执行第 3 步；
3. 创建一个临时目录，下载命令对应的依赖，然后执行这个命令，完成之后就删除这个临时目录。

如果期望项目里的命令在每一个 **developer** 那里都能有相同的表现，建议在项目内统一安装对应的 **dependency**。
