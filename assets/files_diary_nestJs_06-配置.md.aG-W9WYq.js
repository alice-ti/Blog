import{_ as i,c as a,o as e,af as t}from"./chunks/framework.Cj92BNWl.js";const c=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[],"relativePath":"files/diary/nestJs/06-配置.md","filePath":"files/diary/nestJs/06-配置.md","lastUpdated":1738744669000}'),n={name:"files/diary/nestJs/06-配置.md"};function l(p,s,h,o,d,r){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><h2 id="存储配置变量" tabindex="-1"><a href="https://12factor.net/config" target="_blank" rel="noreferrer">存储配置变量</a> <a class="header-anchor" href="#存储配置变量" aria-label="Permalink to &quot;[存储配置变量](https://12factor.net/config)&quot;">​</a></h2><p>由于配置变量的变化，最佳实践是在环境中<a href="https://12factor.net/config" target="_blank" rel="noreferrer">存储配置变量</a>。</p><p>外部定义的环境变量可以通过<code>process.env</code>全局变量在 Node.js 中可见。 我们可以通过在每个环境中分别设置环境变量来尝试解决多个环境的问题。 这很快就会变得笨拙不堪，特别是在开发和测试环境中，这些值需要很容易地被模仿和/或更改。 在 Node.js 应用程序中，通常使用<code>.env</code>文件，保存键-值对，其中每个键代表一个特定的值，以表示每个环境。</p><p>在不同的环境中运行应用程序只是交换正确的<code>.env</code>文件的问题。</p><p>在 Nest 中使用这种技术的一个好方法是创建一个<code>ConfigModule</code>来公开一个<code>ConfigService</code>来加载适当的<code>env</code>文件。 虽然你可以选择自己编写这样一个模块，但为了方便起见，Nest 提供了现成的<code>@nestjs/config</code>包。</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @nestjs/config</span></span></code></pre></div><h3 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h3><p>一旦安装过程完成，我们可以导入<code>ConfigModule</code>。 通常，我们会把它导入根模块 <code>AppModule</code>，并使用静态方法<code>forRoot()</code>来控制它的行为。 在此步骤中，将解析和解决环境变量键/值对。 稍后，我们将在其他特性模块中看到访问<code>ConfigModule</code>类的<code>ConfigService</code>类的几个选项。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Module } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@nestjs/common&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ConfigModule } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@nestjs/config&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  imports: [ConfigModule.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AppModule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><h3 id="自定义环境文件路径¶" tabindex="-1">自定义环境文件路径<a href="https://wdk-docs.github.io/nest-docs/techniques/configuration/#_4" target="_blank" rel="noreferrer">¶</a> <a class="header-anchor" href="#自定义环境文件路径¶" aria-label="Permalink to &quot;自定义环境文件路径[¶](https://wdk-docs.github.io/nest-docs/techniques/configuration/#_4)&quot;">​</a></h3><p>默认情况下，包会在应用程序的根目录中查找<code>.env</code>文件。 要为<code>.env</code>文件指定另一个路径，请设置传递给<code>forRoot()</code>的(可选)选项对象的<code>envFilePath</code>属性，如下所示:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ConfigModule.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  envFilePath: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.development.env&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>你也可以像这样为<code>.env</code>文件指定多个路径:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ConfigModule.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  envFilePath: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.env.development.local&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.env.development&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>如果在多个文件中找到一个变量，则第一个变量优先。</p><h3 id="在全局范围内使用模块" tabindex="-1">在全局范围内使用模块 <a class="header-anchor" href="#在全局范围内使用模块" aria-label="Permalink to &quot;在全局范围内使用模块&quot;">​</a></h3><p>当你想在其他模块中使用<code>ConfigModule</code>时，你需要导入它(这是任何 Nest 模块的标准配置)。 或者，通过设置 options 对象的<code>isGlobal</code>属性为<code>true</code>，将其声明为<a href="https://docs.nestjs.com/modules#global-modules" target="_blank" rel="noreferrer">global 模块</a>，如下所示。 在这种情况下，一旦 <code>ConfigModule</code> 被加载到根模块中(例如，<code>AppModule</code>)，你就不需要在其他模块中导入它了。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ConfigModule.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  isGlobal: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><hr><p><a href="https://wdk-docs.github.io/nest-docs/techniques/configuration/" target="_blank" rel="noreferrer">NestJs 配置</a></p>`,22)]))}const E=i(n,[["render",l]]);export{c as __pageData,E as default};
