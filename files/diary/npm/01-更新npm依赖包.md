# 更新npm包依赖

## 使用 **npm outdated** 命令查看依赖关系

```bash
npm outdated
```

该命令将检查每个已安装的依赖关系，并将当前版本与 [npm registry](https://www.npmjs.com/) 中的最新版本进行比较。它在终端打印出一个表格，概述了可用的版本。

它是内置在 **NPM** 中的，所以不需要下载额外的软件包

```bash
Package             Current          Wanted          Latest  Location                  Depended by
@types/node         18.13.0        18.15.11        18.15.11  node_modules/@types/node  Blog
```

- **Current** 是当前安装的版本。
- **Wanted** 是根据 **semver** 范围内的软件包的最大版本。
- **Latest** 是在 [npm registry](https://www.npmjs.com/) 中被标记为最新的软件包版本。

## 使用 **npm update** 更新依赖

```bash
npm update
```

ps: 使用 **npm update** 永远不会更新到一个主要的（**major**），具有破坏性变化的版本。它更新 **package.json** 和 **package-lock.json** 中的依赖关系。将使用 **Wanted(想要的)** 版本。

为了获得 "最新" 的版本，在单个安装中附加 **@latest**，例如 **npm install react@latest**。

## 使用 **npm-check-updates** 更新依赖

[ncu](./02-ncu.md#使用-npm-check-updates-更新依赖)

---
[如何更新 NPM 依赖 (中)](https://www.freecodecamp.org/chinese/news/how-to-update-npm-dependencies/)
[How to Update NPM Dependencies (英)](https://www.freecodecamp.org/news/how-to-update-npm-dependencies/)
