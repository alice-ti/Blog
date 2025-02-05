import{_ as i,c as a,o as n,af as e}from"./chunks/framework.Cj92BNWl.js";const E=JSON.parse('{"title":"node中引入json文件","description":"","frontmatter":{},"headers":[],"relativePath":"files/docs/Node/02-node中引入json.md","filePath":"files/docs/Node/02-node中引入json.md","lastUpdated":1738744669000}'),t={name:"files/docs/Node/02-node中引入json.md"};function h(p,s,l,k,r,o){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="node中引入json文件" tabindex="-1">node中引入json文件 <a class="header-anchor" href="#node中引入json文件" aria-label="Permalink to &quot;node中引入json文件&quot;">​</a></h1><h2 id="使用-fs-模块读取和解析-json-文件" tabindex="-1">使用 fs 模块读取和解析 JSON 文件 <a class="header-anchor" href="#使用-fs-模块读取和解析-json-文件" aria-label="Permalink to &quot;使用 fs 模块读取和解析 JSON 文件&quot;">​</a></h2><p>Node.js 文档建议使用 <code>fs</code> 模块并自己完成读取文件和解析的工作。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { readFile } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;fs/promises&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./some-file.json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.url)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="利用-commonjs-require-方法加载-json-文件" tabindex="-1">利用 CommonJS <code>require</code> 方法加载 JSON 文件 <a class="header-anchor" href="#利用-commonjs-require-方法加载-json-文件" aria-label="Permalink to &quot;利用 CommonJS \`require\` 方法加载 JSON 文件&quot;">​</a></h2><p><code>createRequire</code> 允许您构造 CommonJS <code>require</code> 方法，以便可以使用典型的 CommonJS 功能，例如在 Node.js 中读取 JSON ES 模块。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createRequire } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;module&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> require</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createRequire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.url)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./data.json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><blockquote><p><code>require</code> 机制情况下，如果多个模块都加载了同一个 JSON 文件，那么其中一个改变了 JS 对象，其它跟着改变，这是由 Node 模块的缓存机制造成的，只有一个 JS 模块对象。</p><p>使用 <code>fs</code> 模块可以随意改变加载后的 JS 变量，而且各模块互不影响，因为他们都是独立的，是多个 JS 对象。</p></blockquote><h2 id="import-assertions" tabindex="-1">import Assertions <a class="header-anchor" href="#import-assertions" aria-label="Permalink to &quot;import Assertions&quot;">​</a></h2><p>使用<strong>assert</strong>声明类型</p><blockquote><p>低版本 <strong>node</strong> 不支持这种方式使用</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./package.json&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data)</span></span></code></pre></div>`,12)]))}const c=i(t,[["render",h]]);export{E as __pageData,c as default};
