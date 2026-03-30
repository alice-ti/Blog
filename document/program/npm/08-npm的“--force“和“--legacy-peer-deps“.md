# npm

## --force

f 或 --force：将强制 npm 获取远程资源，即使磁盘上存在本地副本也是如此。

## --legacy-peer-deps

NPM v7 预设会安裝 `peerDependencies`，这可能会导致有些模块出现依赖问题，这个时候可以在 `npm install` 的时候加上 `--legacy-peer-deps` 参数来解决。

> 在很多情况下，这会导致版本冲突，从而中断安装过程。

`--legacy-peer-deps` 标志是在v7中引入的，目的是绕过 `peerDependency` 自动安装

它告诉 **NPM** 忽略项目中引入的各个 **modules** 之间的相同 **modules** 但不同版本的问题并继续安装，保证各个引入的依赖之间对自身所使用的不同版本 **modules** 共存。

---

[安裝 NPM 套件時使用 --legacy-peer-deps 解決套件相依性問題](https://blog.poychang.net/npm-install-with-legacy-peer-deps/)
