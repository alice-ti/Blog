import{_ as a,c as i,o as t,af as n}from"./chunks/framework.Cj92BNWl.js";const c=JSON.parse('{"title":"npm 切换源","description":"","frontmatter":{},"headers":[],"relativePath":"files/diary/npm/03-npm源.md","filePath":"files/diary/npm/03-npm源.md","lastUpdated":1738744669000}'),e={name:"files/diary/npm/03-npm源.md"};function p(l,s,h,r,d,o){return t(),i("div",null,s[0]||(s[0]=[n(`<h1 id="npm-切换源" tabindex="-1">npm 切换源 <a class="header-anchor" href="#npm-切换源" aria-label="Permalink to &quot;npm 切换源&quot;">​</a></h1><p>查看当前npm使用的源：<code>npm config get registry</code></p><h2 id="临时使用" tabindex="-1">临时使用 <a class="header-anchor" href="#临时使用" aria-label="Permalink to &quot;临时使用&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npm.taobao.org</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> express</span></span></code></pre></div><h2 id="切换源" tabindex="-1">切换源 <a class="header-anchor" href="#切换源" aria-label="Permalink to &quot;切换源&quot;">​</a></h2><div class="language-ba vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ba</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm config set registry https://registry.npm.taobao.org</span></span></code></pre></div><blockquote><ul><li><p>配置后可通过下面方式来验证是否成功</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span></span></code></pre></div></li></ul></blockquote><h2 id="重置源" tabindex="-1">重置源 <a class="header-anchor" href="#重置源" aria-label="Permalink to &quot;重置源&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npmjs.org</span></span></code></pre></div><h2 id="使用nrm切换" tabindex="-1">使用nrm切换 <a class="header-anchor" href="#使用nrm切换" aria-label="Permalink to &quot;使用nrm切换&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nrm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nrm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nrm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> taobao</span></span></code></pre></div><hr><p><strong>2024</strong> 淘宝镜像源更新后新地址</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># old</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://registry.npm.taobao.org</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># new</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://registry.npmmirror.com</span></span></code></pre></div>`,14)]))}const g=a(e,[["render",p]]);export{c as __pageData,g as default};
