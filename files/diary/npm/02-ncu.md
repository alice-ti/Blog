
# ⛵ 如何更新 **package.json** 中的依赖

在一个项目中，其包依赖项列表保存在 **package.json** 文件中。每个已安装的包都被分配了一个版本号，一般由 三部分组成：**major** 、 **minor** 、  **patch** 。

- **^1.0.1** **major** 表示非兼容的重大 API 改变
- **~1.0.1** **minor** 表示向后兼容的功能性改变  
- **\*1.0.1** **patch** 表示向后兼容的 bug 修正

---

## 使用 **npm install** 或 **npm update** 更新

1. 执行 **npm** 命令行：**npm outdated** 找到过期的包

2. 修正 **package.json** 中相关的版本规格。

3. 运行 **npm install** 或 **npm update** 以升级。

- **npm install** 会安装一个包及其依赖的任何包。如果该包中存在 **package-lock** 或 **shrinkwrap** 文件（在并存时后者优先级更高），将会按其进行依赖项安装。

- **npm update** 会更新依赖项列表中出现的所有包，同时也会安装缺失的包。

二者的区别是什么呢？

如果已安装的包版本满足 **package.json** 中定义的规范。

- **npm install** 会以模糊版本策略忽略掉它，并不会重新安装。
- **npm update** 会在符合定义的前提下将其升级到对应的最新 **latest** 版本。

---

## 使用 **npm-check-updates** 更新依赖

> [npm-check-updates 文档](https://github.com/raineorshine/npm-check-updates)

### 👒 一个强大的工具是 **npm-check-updates**，会自动化地对 **package.json** 进行更新

该 **npm** 工具可以被全局化安装：

```shell
npm install -g npm-check-updates
```

要升级依赖性，你只需要运行

```shell
npm-check-updates -u
npm-check-updates --upgrade
```

当然，你也可以使用 **npx**

```shell
npx npm-check-updates -u
```

运行之后，**package.json** 中的依赖项就被升级到最新了，包括 **major** 位的更新

之后 **npm i** 或 **npm update** 以完成升级

> 使用 **ncu -u** 方法更新后，**npm install** 不会自动运行，所以一定要在之后运行它来更新 **package-lock.json**

### 使用 **npm-check-updates** 互动模式

互动模式允许你选择特定的软件包进行更新。默认情况下，所有软件包都被选中。

向下浏览每一个软件包，用 **空格** 来取消选择，当你准备好升级所有选择的软件包时，**回车键(enter)** 确定。

```bash
ncu --interactive

// or 
ncu -i
```

有几种方法可以提升交互式 **npm-check-updates** 的体验。

```bash
ncu --interactive --format group
```

这个命令将软件包分组并组织成 主版本（major）、次要（minor）和补丁（patch）版本。
