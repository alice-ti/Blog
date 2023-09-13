import{_ as s,o as a,c as o,O as n}from"./chunks/framework.999b5480.js";const g=JSON.parse('{"title":"package.json","description":"","frontmatter":{},"headers":[],"relativePath":"files/diary/project/03-package.json.md","filePath":"files/diary/project/03-package.json.md","lastUpdated":1694613449000}'),e={name:"files/diary/project/03-package.json.md"},t=n(`<h1 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h1><h2 id="resolutions" tabindex="-1">resolutions <a class="header-anchor" href="#resolutions" aria-label="Permalink to &quot;resolutions&quot;">​</a></h2><p><code>resolutions</code> 字段可以在 <strong>package.json</strong> 文件中被定义。它是一个特殊的字段，用于提供对其他依赖项的版本限制。</p><p>当依赖项的版本冲突时，使用 <code>resolutions</code> 字段可以告诉 <strong>npm</strong> 哪个版本应该被安装。这通常在你使用 <strong>monorepo</strong> 架构或者多个包之间有紧密关系时很有用。</p><p>&quot;resolutions&quot; 字段的格式是：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">resolutions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">&lt;package-name&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;version-or-range&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,6),l=[t];function p(r,c,i,d,_,u){return a(),o("div",null,l)}const y=s(e,[["render",p]]);export{g as __pageData,y as default};
