import{_ as a,c as i,o as e,af as t}from"./chunks/framework.Cj92BNWl.js";const k=JSON.parse('{"title":"访问dist包","description":"","frontmatter":{},"headers":[],"relativePath":"files/diary/project/09-本地访问dist包.md","filePath":"files/diary/project/09-本地访问dist包.md","lastUpdated":1738744669000}'),n={name:"files/diary/project/09-本地访问dist包.md"};function p(l,s,h,r,o,d){return e(),i("div",null,s[0]||(s[0]=[t(`<h1 id="访问dist包" tabindex="-1">访问dist包 <a class="header-anchor" href="#访问dist包" aria-label="Permalink to &quot;访问dist包&quot;">​</a></h1><h2 id="本地启动服务" tabindex="-1">本地启动服务 <a class="header-anchor" href="#本地启动服务" aria-label="Permalink to &quot;本地启动服务&quot;">​</a></h2><h3 id="使用serve" tabindex="-1">使用serve <a class="header-anchor" href="#使用serve" aria-label="Permalink to &quot;使用serve&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> serve</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dist</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5666</span></span></code></pre></div><h3 id="serve-配置" tabindex="-1"><strong>Serve 配置</strong> <a class="header-anchor" href="#serve-配置" aria-label="Permalink to &quot;**Serve 配置**&quot;">​</a></h3><p>创建一个 <code>.servedrc</code> 或 <code>.servrc.json</code> 文件，指定配置参数。</p><p>使用 <code>&quot;rewrites&quot;</code> 属性将 <code>/xxx/</code> 下的请求映射到根目录</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rewrites&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/xxx/:splat*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;destination&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/:splat*&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="启动-serve" tabindex="-1"><strong>启动 Serve：</strong> <a class="header-anchor" href="#启动-serve" aria-label="Permalink to &quot;**启动 Serve：**&quot;">​</a></h3><p>使用以下命令启动 <code>Serve</code>，并指定配置文件：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> serve</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dist/.servedrc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5666</span></span></code></pre></div><h3 id="访问" tabindex="-1">访问 <a class="header-anchor" href="#访问" aria-label="Permalink to &quot;访问&quot;">​</a></h3><p>启动成功后通过 \`\`<a href="http://localhost:5666/xxx/%60" target="_blank" rel="noreferrer">http://localhost:5666/xxx/\`</a> 访问项目</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Local:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    http://localhost:5666</span></span></code></pre></div><h3 id="使用-http-serve" tabindex="-1">使用 http-serve <a class="header-anchor" href="#使用-http-serve" aria-label="Permalink to &quot;使用 http-serve&quot;">​</a></h3><h2 id="通过测试-正式域名访问" tabindex="-1">通过测试/正式域名访问 <a class="header-anchor" href="#通过测试-正式域名访问" aria-label="Permalink to &quot;通过测试/正式域名访问&quot;">​</a></h2><p>通过配置 <strong>HOST</strong> 和 <strong>nginx</strong> 之后，将测试/正式环境下的请求转发到 <code>1</code> 启动的本地服务上。</p><p>示例如下：</p><div class="language-host vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">host</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>172.17.7.147   ceshi.com</span></span></code></pre></div><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen      80;</span></span>
<span class="line"><span>    server_name ceshi.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /ceshi/ {</span></span>
<span class="line"><span>     proxy_pass http://172.17.7.147:5666/;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>之后就可以通过 <code>http://localhost:5666/ceshi/#route</code> 访问到本地 dist 包所对应项目</p>`,21)]))}const g=a(n,[["render",p]]);export{k as __pageData,g as default};
