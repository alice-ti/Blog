# 认识 NestJS

项目开发离不开工程化的部分，比如创建项目、编译构建、开发时 watch 文件变动自动构建等。

Nest 项目自然也是这样，所以它在 `@nestjs/cli` 这个包里提供了 `nest` 命令。

可以直接 npx 执行，npm 会把它下载下来然后执行：

```bash
npx nest new 项目名
```

也可以安装到全局，然后执行，更推荐这种：

```bash
npm install -g @nestjs/cli

nest new 项目名
```

不过后者要时不时升级下版本，不然可能用它创建的项目版本不是最新的：

```bash
npm update -g @nestjs/cli
```

那 nest 都提供了啥命令呢？

nest -h 看看:

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5825f0b71ed243ccaff39c6d5010110d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

有创建新项目的 nest new，有创建某些代码的 nest generate，还有编译构建的 nest build，开发模式的 nest start 等。

分别看一下：

nest new 我们用过，就是创建一个新的 nest 项目的。

它有这么几个选项：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b94ca38aaef4d13acb999234c0ea3df~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

--skip-git 和 --skip-install 很容易理解，就是跳过 git 的初始化，跳过 npm install。

--package-manager 是指定包管理器的，之前创建项目的时候会让我们选择：

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74fe9a9c3c77465c904b587574c128ed~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

指定之后，就跳过包管理器选择这步了：

![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33871e97763d4ddc983f0a36099164c5~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

--language 可以指定 typescript 和 javascript，一般我们都选择 ts，用默认的就好。

--strict 是指定 ts 的编译选项是否开启严格模式的，也就是这么 5 个选项：

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e004a861e0146fd8b2b48c7d954a744~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

默认是 false，也可以指定为 true：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e7c8a78c688481695933d04055634b4~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

这个之后需要的话再改就行。

至于 --collection 的解释，就要涉及到 nest generate 命令了：

nest 命令除了可以生成整个项目外，还可以生成一些别的代码，比如 controller、service、module 等。

比如生成 module：

```bash
nest generate module aaa
```

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ffdcbbd08fc4d048b59a860b55b4312~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

它会生成 module 的代码：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14fdef17ae594e62b25623a4254a34d8~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

还会在 AppModule 里引入：

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/357fecc074a540eeb6e4f70a1b5f5471~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

当然你也可以生成 controller、service 等代码：

```bash
nest generate controller aaa
```

![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df4ffe08e5ee40a792f3ca7927bcca16~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

同样，它也会更新到 module 的依赖里去。

生成 service 也是一样：

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1545c50932654314b02f35e4f9dac3be~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

当然，如果是要完整生成一个模块的代码，不需要一个个生成，可以用

```bash
nest generate resource xxx
```

它会让你选择是哪种代码，因为 nest 支持 http、websocket、graphql、tcp 等，这里我们选择 http 的 REST 风格 api：

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1480b030b48b4517b9ee38e8bda06e81~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

然后会让你选择是否生成 CRUD 代码：

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/90edc9b8005547cb9d7c6e10e8f2b73a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

选择是。

然后就会生成整个模块的 CRUD + REST api 的代码：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/94ebae465ba94991a154ffe7652b3557~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d1c3305fcc647fea46629933fb4432f~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

当然，它同样会自动在 AppModule 引入：

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e09b9ac107e840b2883c81764d0dc48d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

这就是 nest generate，可以快速生成各种代码：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a33cc387c39b4870b698dbc518a98530~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

这些代码模版的集合是在 @nestjs/schematics 这个包里定义的。

还记得 nest new 创建项目的时候有个 --collection 选项么，就是配置这个的。

不过一般我们不需要配置。

你可以在 [@nestjs/schematics](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fnestjs%2Fschematics%2Ftree%2Fmaster%2Fsrc%2Flib) 里看到这些代码模版的定义：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d9109ed36fa4287b05803b841ca5754~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

它的实现原理很简单，就是模版引擎填充变量，打印成代码：

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e441a62a8904bb8b4832df6b48508bb~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

其中有种 application 的类型：

它生成的就是整个项目结构：

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa83daac4d9a4b26a1ad680c3c100ff0~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/979c236ff2304eeda7a75d5cd329b4d5~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

其实 nest new 的底层就是 nest generate application，只不过 nest new 额外做了 git init 和 npm install 等处理。

nest generate 也有不少选项：

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76df459728cd4f69bfede05aec788658~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

--flat 和 --no-flat 是指定是否生成对应目录的：

![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d37577a1f5ef4d9aa7b1ccb4c2502cda~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

--spec 和 --no-spec 是指定是否生成测试文件：

![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8f052d8088f41c3a881ab289c551c3e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

--skip-import 是指定不在 AppModule 里引入：

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a635e5d8a0b6494eb59109bfe5e10fce~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

也就是不生成这部分代码：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef965983632c43b6a314aada5d2e572c~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

至于 --project，这是指定生成代码在哪个子项目的，等之后用到 monorepo 项目的时候再说。

这就是 nest cli 提供的快速生成各种代码的能力，是不是还挺方便的？

然后就是 nest build 了，它是用来构建项目的:

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe5cb526a5724f3a95a299e51193ff6e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

执行 nest build，会在 dist 目录下生成编译后的代码。

同样，它也有一些选项：

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e74a180fe0f481cbe6d99f38071488e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

--wepback 和 --tsc 是指定用什么编译，默认是 tsc 编译，也可以切换成 webpack。

这是 tsc 的编译产物：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/afac24d943e14446aa9c3d593770b06a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

这是 webpack 的编译产物：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/706b166b0afc4fc18a6af653f846f63a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

tsc 不做打包、webpack 会做打包，两种方式都可以。

node 模块本来就不需要打包，但是打包成单模块据说能提升加载的性能。

--watch 是监听文件变动，自动 build 的。

但是 --watch 默认只是监听 ts、js 文件，加上 --watchAssets 会连别的文件一同监听变化，并输出到 dist 目录，比如 md、yml 等文件。

--path 是指定 tsc 配置文件的路径的。

那 --config 是指定什么配置文件呢？

是 nest cli 的配置文件。

刚刚我们说的那些选项都可以在 nest-cli.json 里配置：

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2297cf557e54157961a7e6ee67ee180~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

比如 compilerOptions 里设置 webpack 为 true 就相当于 nest build --webpack，一样的效果：

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fad42dc73a404089abbd5f921c43350a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

webpack 设置为 false 就是用 tsc 了。

deleteOutDir 设置为 true，每次 build 都会都清空 dist 目录。

而 assets 是指定 nest build 的时候，把那些非 js、ts 文件也复制到 dist 目录下。

可以通过 include、exclude 来精确匹配，并且可以单独指定是否 watchAssets。

然后是 generateOptions，这些就和我们 nest generate 时的 --no-spec、--no-flat 一样的效果。

比如我把 flat 设置为 false、spec 设置为 false，那再 generate 代码时就是这样的：

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb9a3995fd3a47138eb2be3f12169954~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

生成了一层目录，并且没有生成测试文件。

sourceRoot 是指定源码目录。

entryFile 是指定入口文件的名字，默认是 main。

而 $schema 是指定 nest-cli.json 的 schema，也就是可以有哪些属性的：

[json.schemastore.org/nest-cli](https://link.juejin.cn/?target=https%3A%2F%2Fjson.schemastore.org%2Fnest-cli)

这是一种 json schema 的规范，还是挺容易看懂的：

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6afce9b2ea204fd49f1ef2fef2c59312~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

如果想全面了解 nest-cli.json 都有啥属性，可以看看这个 schema 定义。

最后，再来看下 nest start 命令：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42a6eb5dd0f94712ace4e9db607701a7~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

可以看到每次重新 build 了，并且用 node 把 main.js 跑了起来。

它有这些选项：

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c961834fd8124bcb8803a39769f30679~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

--watch 是最常用的选项了，也就是改动文件之后自动重新 build：

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35e9594f302f4344be3adc4e84af0342~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

而且你还可以输入 rs 来手动重启：

![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1892485d5574e65b4ce1c9428793329~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

--debug 是启动调试的 websocket 服务，用来 debug。

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/921f0364a9ef4f5799a7217b0ebef375~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

--exec 可以指定用什么来跑，默认是用 node 跑，你也可以切换别的 runtime。

其余选项和 nest build 一样，就不复述了。

最后还有个 nest info 命令，这个就是查看项目信息的，包括系统信息、 node、npm 和依赖版本：

![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71eaf4f2c4d24447bab2aa00e598c7dc~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

## 总结

nest 在 @nestjs/cli 包里提供了 nest 命令，它可以用来做很多事情：

- 生成项目结构和各种代码
- 编译代码
- 监听文件变动自动编译
- 打印项目依赖信息

也就是这些子命令：

- nest new 快速创建项目
- nest generate 快速生成各种代码
- nest build 使用 tsc 或者 webpack 构建代码
- nest start 启动开发服务，支持 watch 和调试
- nest info 打印 node、npm、nest 包的依赖版本

并且，很多选项都可以在 nest-cli.json 里配置，比如 generateOptions、compilerOptions 等。

---

以上转自 [zxg_神说要有光](https://juejin.cn/user/2788017216685118)
