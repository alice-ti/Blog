import{_ as p,o as e,c as s,O as t}from"./chunks/framework.999b5480.js";const g=JSON.parse('{"title":"认识 NestJS","description":"","frontmatter":{},"headers":[],"relativePath":"files/diary/nestJs/01-认识NestJs.md","filePath":"files/diary/nestJs/01-认识NestJs.md","lastUpdated":1687782807000}'),a={name:"files/diary/nestJs/01-认识NestJs.md"},c=t(`<h1 id="认识-nestjs" tabindex="-1">认识 NestJS <a class="header-anchor" href="#认识-nestjs" aria-label="Permalink to &quot;认识 NestJS&quot;">​</a></h1><p>项目开发离不开工程化的部分，比如创建项目、编译构建、开发时 watch 文件变动自动构建等。</p><p>Nest 项目自然也是这样，所以它在 <code>@nestjs/cli</code> 这个包里提供了 <code>nest</code> 命令。</p><p>可以直接 npx 执行，npm 会把它下载下来然后执行：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">项目名</span></span></code></pre></div><p>也可以安装到全局，然后执行，更推荐这种：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@nestjs/cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">nest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">项目名</span></span></code></pre></div><p>不过后者要时不时升级下版本，不然可能用它创建的项目版本不是最新的：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@nestjs/cli</span></span></code></pre></div><p>那 nest 都提供了啥命令呢？</p><p>nest -h 看看:</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5825f0b71ed243ccaff39c6d5010110d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>有创建新项目的 nest new，有创建某些代码的 nest generate，还有编译构建的 nest build，开发模式的 nest start 等。</p><p>分别看一下：</p><p>nest new 我们用过，就是创建一个新的 nest 项目的。</p><p>它有这么几个选项：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b94ca38aaef4d13acb999234c0ea3df~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>--skip-git 和 --skip-install 很容易理解，就是跳过 git 的初始化，跳过 npm install。</p><p>--package-manager 是指定包管理器的，之前创建项目的时候会让我们选择：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74fe9a9c3c77465c904b587574c128ed~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="img"></p><p>指定之后，就跳过包管理器选择这步了：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33871e97763d4ddc983f0a36099164c5~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>--language 可以指定 typescript 和 javascript，一般我们都选择 ts，用默认的就好。</p><p>--strict 是指定 ts 的编译选项是否开启严格模式的，也就是这么 5 个选项：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e004a861e0146fd8b2b48c7d954a744~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>默认是 false，也可以指定为 true：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e7c8a78c688481695933d04055634b4~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>这个之后需要的话再改就行。</p><p>至于 --collection 的解释，就要涉及到 nest generate 命令了：</p><p>nest 命令除了可以生成整个项目外，还可以生成一些别的代码，比如 controller、service、module 等。</p><p>比如生成 module：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">generate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aaa</span></span></code></pre></div><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ffdcbbd08fc4d048b59a860b55b4312~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>它会生成 module 的代码：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14fdef17ae594e62b25623a4254a34d8~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>还会在 AppModule 里引入：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/357fecc074a540eeb6e4f70a1b5f5471~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>当然你也可以生成 controller、service 等代码：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">generate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">controller</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aaa</span></span></code></pre></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df4ffe08e5ee40a792f3ca7927bcca16~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>同样，它也会更新到 module 的依赖里去。</p><p>生成 service 也是一样：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1545c50932654314b02f35e4f9dac3be~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>当然，如果是要完整生成一个模块的代码，不需要一个个生成，可以用</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">generate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">resource</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span></span></code></pre></div><p>它会让你选择是哪种代码，因为 nest 支持 http、websocket、graphql、tcp 等，这里我们选择 http 的 REST 风格 api：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1480b030b48b4517b9ee38e8bda06e81~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>然后会让你选择是否生成 CRUD 代码：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/90edc9b8005547cb9d7c6e10e8f2b73a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>选择是。</p><p>然后就会生成整个模块的 CRUD + REST api 的代码：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/94ebae465ba94991a154ffe7652b3557~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d1c3305fcc647fea46629933fb4432f~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>当然，它同样会自动在 AppModule 引入：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e09b9ac107e840b2883c81764d0dc48d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>这就是 nest generate，可以快速生成各种代码：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a33cc387c39b4870b698dbc518a98530~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>这些代码模版的集合是在 @nestjs/schematics 这个包里定义的。</p><p>还记得 nest new 创建项目的时候有个 --collection 选项么，就是配置这个的。</p><p>不过一般我们不需要配置。</p><p>你可以在 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fnestjs%2Fschematics%2Ftree%2Fmaster%2Fsrc%2Flib" target="_blank" rel="noreferrer">@nestjs/schematics</a> 里看到这些代码模版的定义：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d9109ed36fa4287b05803b841ca5754~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>它的实现原理很简单，就是模版引擎填充变量，打印成代码：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e441a62a8904bb8b4832df6b48508bb~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>其中有种 application 的类型：</p><p>它生成的就是整个项目结构：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa83daac4d9a4b26a1ad680c3c100ff0~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/979c236ff2304eeda7a75d5cd329b4d5~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>其实 nest new 的底层就是 nest generate application，只不过 nest new 额外做了 git init 和 npm install 等处理。</p><p>nest generate 也有不少选项：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76df459728cd4f69bfede05aec788658~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>--flat 和 --no-flat 是指定是否生成对应目录的：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d37577a1f5ef4d9aa7b1ccb4c2502cda~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>--spec 和 --no-spec 是指定是否生成测试文件：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8f052d8088f41c3a881ab289c551c3e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>--skip-import 是指定不在 AppModule 里引入：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a635e5d8a0b6494eb59109bfe5e10fce~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>也就是不生成这部分代码：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef965983632c43b6a314aada5d2e572c~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>至于 --project，这是指定生成代码在哪个子项目的，等之后用到 monorepo 项目的时候再说。</p><p>这就是 nest cli 提供的快速生成各种代码的能力，是不是还挺方便的？</p><p>然后就是 nest build 了，它是用来构建项目的:</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe5cb526a5724f3a95a299e51193ff6e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>执行 nest build，会在 dist 目录下生成编译后的代码。</p><p>同样，它也有一些选项：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e74a180fe0f481cbe6d99f38071488e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>--wepback 和 --tsc 是指定用什么编译，默认是 tsc 编译，也可以切换成 webpack。</p><p>这是 tsc 的编译产物：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/afac24d943e14446aa9c3d593770b06a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>这是 webpack 的编译产物：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/706b166b0afc4fc18a6af653f846f63a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>tsc 不做打包、webpack 会做打包，两种方式都可以。</p><p>node 模块本来就不需要打包，但是打包成单模块据说能提升加载的性能。</p><p>--watch 是监听文件变动，自动 build 的。</p><p>但是 --watch 默认只是监听 ts、js 文件，加上 --watchAssets 会连别的文件一同监听变化，并输出到 dist 目录，比如 md、yml 等文件。</p><p>--path 是指定 tsc 配置文件的路径的。</p><p>那 --config 是指定什么配置文件呢？</p><p>是 nest cli 的配置文件。</p><p>刚刚我们说的那些选项都可以在 nest-cli.json 里配置：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2297cf557e54157961a7e6ee67ee180~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>比如 compilerOptions 里设置 webpack 为 true 就相当于 nest build --webpack，一样的效果：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fad42dc73a404089abbd5f921c43350a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>webpack 设置为 false 就是用 tsc 了。</p><p>deleteOutDir 设置为 true，每次 build 都会都清空 dist 目录。</p><p>而 assets 是指定 nest build 的时候，把那些非 js、ts 文件也复制到 dist 目录下。</p><p>可以通过 include、exclude 来精确匹配，并且可以单独指定是否 watchAssets。</p><p>然后是 generateOptions，这些就和我们 nest generate 时的 --no-spec、--no-flat 一样的效果。</p><p>比如我把 flat 设置为 false、spec 设置为 false，那再 generate 代码时就是这样的：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb9a3995fd3a47138eb2be3f12169954~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>生成了一层目录，并且没有生成测试文件。</p><p>sourceRoot 是指定源码目录。</p><p>entryFile 是指定入口文件的名字，默认是 main。</p><p>而 $schema 是指定 nest-cli.json 的 schema，也就是可以有哪些属性的：</p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fjson.schemastore.org%2Fnest-cli" target="_blank" rel="noreferrer">json.schemastore.org/nest-cli</a></p><p>这是一种 json schema 的规范，还是挺容易看懂的：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6afce9b2ea204fd49f1ef2fef2c59312~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>如果想全面了解 nest-cli.json 都有啥属性，可以看看这个 schema 定义。</p><p>最后，再来看下 nest start 命令：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42a6eb5dd0f94712ace4e9db607701a7~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>可以看到每次重新 build 了，并且用 node 把 main.js 跑了起来。</p><p>它有这些选项：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c961834fd8124bcb8803a39769f30679~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>--watch 是最常用的选项了，也就是改动文件之后自动重新 build：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35e9594f302f4344be3adc4e84af0342~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>而且你还可以输入 rs 来手动重启：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1892485d5574e65b4ce1c9428793329~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>--debug 是启动调试的 websocket 服务，用来 debug。</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/921f0364a9ef4f5799a7217b0ebef375~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><p>--exec 可以指定用什么来跑，默认是用 node 跑，你也可以切换别的 runtime。</p><p>其余选项和 nest build 一样，就不复述了。</p><p>最后还有个 nest info 命令，这个就是查看项目信息的，包括系统信息、 node、npm 和依赖版本：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71eaf4f2c4d24447bab2aa00e598c7dc~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="img"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>nest 在 @nestjs/cli 包里提供了 nest 命令，它可以用来做很多事情：</p><ul><li>生成项目结构和各种代码</li><li>编译代码</li><li>监听文件变动自动编译</li><li>打印项目依赖信息</li></ul><p>也就是这些子命令：</p><ul><li>nest new 快速创建项目</li><li>nest generate 快速生成各种代码</li><li>nest build 使用 tsc 或者 webpack 构建代码</li><li>nest start 启动开发服务，支持 watch 和调试</li><li>nest info 打印 node、npm、nest 包的依赖版本</li></ul><p>并且，很多选项都可以在 nest-cli.json 里配置，比如 generateOptions、compilerOptions 等。</p><hr><p>以上转自 <a href="https://juejin.cn/user/2788017216685118" target="_blank" rel="noreferrer">zxg_神说要有光</a></p>`,140),n=[c];function o(i,l,m,r,b,f){return e(),s("div",null,n)}const d=p(a,[["render",o]]);export{g as __pageData,d as default};
