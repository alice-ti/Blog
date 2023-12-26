# npm 基础知识

`npm link`是一种把包链接到包文件夹的方式，即：可以在不发布npm模块的情况下，调试该模块，并且修改模块后会实时生效，不需要通过`npm install`进行安装

## npm link

`npm link` 命令可以将一个任意位置的 **npm** 包链接到全局执行环境，从而在任意位置使用命令行都可以直接运行该 **npm** 包。

这个命令主要做了两件事

- 为 npm 包目录创建软链接，将其链到 `{prefix}/lib/node_modules/<package>`，是一个快捷方式
- 为可执行文件(bin)创建软链接，将其链到 {prefix}/bin/{name}



### **npm link** 使用：

- npm link：将当前的包link到全局
- npm link {pkg}：將当前项目文件夹的 node_modules/{pkg} 链接到本地全局对应的包

> 这里的 **pkg** 要对应 **npm** 包 **package.json** 里的 **name** 字段值。



### 去除软链接

1. 在使用 npm 包项目的文件目录下解除特定的链接

   ```bash
   npm unlink pkg
   ```

2. 在 npm 包所在的文件目录下去除全局链接

   ```bash
   npm unlink 
   ```



#### 查看所有创建的全局链接名称

```bash
npm ls --global --depth 0
```

---

[如何使用 npm link 進行 node module 測試](https://etrexkuo.medium.com/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-npm-link-%E9%80%B2%E8%A1%8C-node-module-%E6%B8%AC%E8%A9%A6-9d3b98db768c)
