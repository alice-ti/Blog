import{_ as s,o as a,c as l,O as n}from"./chunks/framework.999b5480.js";const m=JSON.parse('{"title":"npm 配置","description":"","frontmatter":{},"headers":[],"relativePath":"files/diary/npm/11-npm配置.md","filePath":"files/diary/npm/11-npm配置.md","lastUpdated":1684752912000}'),e={name:"files/diary/npm/11-npm配置.md"},p=n('<h1 id="npm-配置" tabindex="-1">npm 配置 <a class="header-anchor" href="#npm-配置" aria-label="Permalink to &quot;npm 配置&quot;">​</a></h1><h2 id="npm-查看全局路径" tabindex="-1">npm 查看全局路径 <a class="header-anchor" href="#npm-查看全局路径" aria-label="Permalink to &quot;npm 查看全局路径&quot;">​</a></h2><ul><li><p>查看当前npm包的全局安装路径</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prefix</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span></code></pre></div></li><li><p>查看当前npm包的全局cache路径</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cache</span></span></code></pre></div></li><li><p>查看配置列表</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span></span></code></pre></div></li><li><p>查看配置列表的全部信息</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span></span></code></pre></div></li></ul><h2 id="npm修改全局路径命令" tabindex="-1">npm修改全局路径命令 <a class="header-anchor" href="#npm修改全局路径命令" aria-label="Permalink to &quot;npm修改全局路径命令&quot;">​</a></h2><ul><li><p>修改npm的包的全局安装路径</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prefix</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">D:\\Program Files\\DevTools\\node.js\\node_global</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div></li><li><p>修改npm的包的全局cache位置</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cache</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">D:\\Program Files\\DevTools\\node.js\\node_cache</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div></li></ul><hr><p><a href="https://www.jianshu.com/p/f5a7cedba59b" target="_blank" rel="noreferrer">Node.js与统一的全局模块安装路径的配置</a></p>',7),o=[p];function t(c,r,i,C,d,y){return a(),l("div",null,o)}const D=s(e,[["render",t]]);export{m as __pageData,D as default};
