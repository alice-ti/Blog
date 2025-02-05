import{_ as i,c as n,o as s,af as e}from"./chunks/framework.Cj92BNWl.js";const c=JSON.parse('{"title":"npm 基础知识","description":"","frontmatter":{},"headers":[],"relativePath":"files/diary/npm/53-npm docs.md","filePath":"files/diary/npm/53-npm docs.md","lastUpdated":1738744669000}'),t={name:"files/diary/npm/53-npm docs.md"};function l(p,a,o,d,r,h){return s(),n("div",null,a[0]||(a[0]=[e('<h1 id="npm-基础知识" tabindex="-1">npm 基础知识 <a class="header-anchor" href="#npm-基础知识" aria-label="Permalink to &quot;npm 基础知识&quot;">​</a></h1><p><code>npm link</code>是一种把包链接到包文件夹的方式，即：可以在不发布npm模块的情况下，调试该模块，并且修改模块后会实时生效，不需要通过<code>npm install</code>进行安装</p><h2 id="npm-link" tabindex="-1">npm link <a class="header-anchor" href="#npm-link" aria-label="Permalink to &quot;npm link&quot;">​</a></h2><p><code>npm link</code> 命令可以将一个任意位置的 <strong>npm</strong> 包链接到全局执行环境，从而在任意位置使用命令行都可以直接运行该 <strong>npm</strong> 包。</p><p>这个命令主要做了两件事</p><ul><li>为 npm 包目录创建软链接，将其链到 <code>{prefix}/lib/node_modules/&lt;package&gt;</code>，是一个快捷方式</li><li name="">为可执行文件(bin)创建软链接，将其链到 {prefix}/bin/</li></ul><h3 id="npm-link-使用" tabindex="-1"><strong>npm link</strong> 使用 <a class="header-anchor" href="#npm-link-使用" aria-label="Permalink to &quot;**npm link** 使用&quot;">​</a></h3><ul><li>npm link：将当前的包link到全局</li><li>npm link {pkg}：將当前项目文件夹的 node_modules/{pkg} 链接到本地全局对应的包</li></ul><blockquote><p>这里的 <strong>pkg</strong> 要对应 <strong>npm</strong> 包 <strong>package.json</strong> 里的 <strong>name</strong> 字段值。</p></blockquote><h3 id="去除软链接" tabindex="-1">去除软链接 <a class="header-anchor" href="#去除软链接" aria-label="Permalink to &quot;去除软链接&quot;">​</a></h3><ol><li><p>在使用 npm 包项目的文件目录下解除特定的链接</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unlink</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pkg</span></span></code></pre></div></li><li><p>在 npm 包所在的文件目录下去除全局链接</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unlink</span></span></code></pre></div></li></ol><h4 id="查看所有创建的全局链接名称" tabindex="-1">查看所有创建的全局链接名称 <a class="header-anchor" href="#查看所有创建的全局链接名称" aria-label="Permalink to &quot;查看所有创建的全局链接名称&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span></code></pre></div><hr><p><a href="https://etrexkuo.medium.com/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-npm-link-%E9%80%B2%E8%A1%8C-node-module-%E6%B8%AC%E8%A9%A6-9d3b98db768c" target="_blank" rel="noreferrer">如何使用 npm link 進行 node module 測試</a></p>',15)]))}const m=i(t,[["render",l]]);export{c as __pageData,m as default};
