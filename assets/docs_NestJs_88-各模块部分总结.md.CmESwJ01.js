import{_ as a,c as n,o as p,af as e}from"./chunks/framework.BivmJ8bT.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/NestJs/88-各模块部分总结.md","filePath":"docs/NestJs/88-各模块部分总结.md","lastUpdated":1748594539000}'),i={name:"docs/NestJs/88-各模块部分总结.md"};function l(t,s,r,o,c,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h2 id="_88" tabindex="-1">88 <a class="header-anchor" href="#_88" aria-label="Permalink to &quot;88&quot;">​</a></h2><p>大概图解</p><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── config/                 # 配置文件目录</span></span>
<span class="line"><span>│   ├── database.config.ts</span></span>
<span class="line"><span>│   ├── jwt.config.ts</span></span>
<span class="line"><span>│   └── app.config.ts</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── modules/               # 业务模块目录</span></span>
<span class="line"><span>│   ├── users/            # 用户模块</span></span>
<span class="line"><span>│   │   ├── dto/         # 数据传输对象</span></span>
<span class="line"><span>│   │   ├── entities/    # 数据库实体</span></span>
<span class="line"><span>│   │   ├── interfaces/  # 接口定义</span></span>
<span class="line"><span>│   │   ├── users.controller.ts</span></span>
<span class="line"><span>│   │   ├── users.service.ts</span></span>
<span class="line"><span>│   │   ├── users.module.ts</span></span>
<span class="line"><span>│   │   └── users.repository.ts</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   └── auth/            # 认证模块</span></span>
<span class="line"><span>│       ├── dto/</span></span>
<span class="line"><span>│       ├── strategies/   # 认证策略</span></span>
<span class="line"><span>│       ├── guards/      # 守卫</span></span>
<span class="line"><span>│       ├── auth.controller.ts</span></span>
<span class="line"><span>│       ├── auth.service.ts</span></span>
<span class="line"><span>│       └── auth.module.ts</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── common/              # 公共代码目录</span></span>
<span class="line"><span>│   ├── decorators/     # 自定义装饰器</span></span>
<span class="line"><span>│   ├── filters/        # 异常过滤器</span></span>
<span class="line"><span>│   ├── guards/         # 全局守卫</span></span>
<span class="line"><span>│   ├── interceptors/   # 拦截器</span></span>
<span class="line"><span>│   ├── middlewares/    # 中间件</span></span>
<span class="line"><span>│   └── pipes/          # 管道</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── shared/             # 共享模块目录</span></span>
<span class="line"><span>│   ├── services/       # 共享服务</span></span>
<span class="line"><span>│   └── utils/         # 工具函数</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── database/           # 数据库相关</span></span>
<span class="line"><span>│   ├── migrations/     # 数据库迁移文件</span></span>
<span class="line"><span>│   └── seeds/         # 数据库种子文件</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── app.module.ts       # 应用程序根模块</span></span>
<span class="line"><span>├── app.controller.ts   # 应用程序根控制器</span></span>
<span class="line"><span>├── app.service.ts      # 应用程序根服务</span></span>
<span class="line"><span>└── main.ts            # 应用程序入口文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>test/                  # 测试目录</span></span>
<span class="line"><span>├── e2e/              # 端到端测试</span></span>
<span class="line"><span>└── unit/             # 单元测试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>├── .env              # 环境变量文件</span></span>
<span class="line"><span>├── .env.development</span></span>
<span class="line"><span>├── .env.production</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>├── tsconfig.json</span></span>
<span class="line"><span>├── nest-cli.json</span></span>
<span class="line"><span>└── README.md</span></span></code></pre></div><h2 id="module" tabindex="-1">Module <a class="header-anchor" href="#module" aria-label="Permalink to &quot;Module&quot;">​</a></h2><p>每个模块都会包含 controller、service、module、dto、entities 这些东西</p><p>controller 是处理路由，解析请求参数的。</p><p>service 是处理业务逻辑的，比如操作数据库。</p><p>dto 是封装请求参数的。</p><p>entities 是封装对应数据库表的实体的。</p><h2 id="controllers-services" tabindex="-1">Controllers &amp;&amp; Services <a class="header-anchor" href="#controllers-services" aria-label="Permalink to &quot;Controllers &amp;&amp; Services&quot;">​</a></h2><p>对于某个Module来说，Controllers是接收请求的入口，Services则是方法实现</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c749f018b4b84466bf648ce8d215ba7c~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=440&amp;h=712&amp;s=6959&amp;e=png&amp;b=121212" alt="img"></p><h2 id="provider" tabindex="-1">Provider <a class="header-anchor" href="#provider" aria-label="Permalink to &quot;Provider&quot;">​</a></h2><p>Controllers是如何调用Services的呢？</p><ul><li>当Services成为Provider时**</li></ul><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// pokemon.module.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 推荐</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  controllers: [PokemonController],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  providers: [PokemonService],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  imports: [PrismaModule],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  exports: [PokemonService],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 不推荐</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  controllers: [PokemonController],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  providers: [PokemonService, PrismaService],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  imports: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  exports: [PokemonService],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h3 id="import-vs-provider" tabindex="-1">Import vs Provider <a class="header-anchor" href="#import-vs-provider" aria-label="Permalink to &quot;Import  vs Provider&quot;">​</a></h3><p>区别在于：<strong>import module会复用已经创建的实例，而每个provider都会创建新的实例。</strong></p><p>前者占用更少的内存，且一个可复用的实例在多处被使用在需求中也更加常见。</p><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>看一个Nestjs应用就是看明白Module之间是如何互相作用的。</p><ul><li>定义自己的controllers</li><li>定义自己的service</li><li>把自己的service放在providers中，这样controllers才能用service</li><li>如果需要用外部的service，将外部module放在imports里</li><li>如果自己的service也需要被其他module使用，将自己的service放到exports里</li></ul><h2 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h2><p>Nest 从接收到请求，到返回响应的这个流程，有很多切面，路由最终是在 cotnroller 的方法，也就是 handler 里处理的。</p><p>在 main.ts 里调用 NestFactory.create 方法，就会从 AppModule 开始递归解析 Module，实例化其中的 provider、controller，并依次调用它们的 onModuleInit 生命周期方法。</p><p>之后会再递归调用每个 Module 的 provider、controller 的还有 Module 自身的 onApplicationBootstrap 生命周期方法。</p><p>Nest 销毁的时候，也会依次调用 Module 的 provider、controller 还有 Module 自己的 onModuleDestroy 方法、beforeApplicationShutdown 还有 onApplicationShutdown 的生命周期方法。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24060e0f32204907887ede38c1aa018c~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="img"></p><hr><p>文章参考</p><ul><li><a href="https://juejin.cn/post/7342148728134074380" target="_blank" rel="noreferrer">图解Nestjs - 适合中国宝宝的入门指导 2024-03-04</a></li></ul>`,32)]))}const k=a(i,[["render",l]]);export{u as __pageData,k as default};
