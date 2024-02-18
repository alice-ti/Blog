import{_ as s,o as a,c as o,O as e}from"./chunks/framework.999b5480.js";const u=JSON.parse('{"title":"月刊少女-2024限定版","description":"","frontmatter":{},"headers":[],"relativePath":"files/news/2024月刊少女.md","filePath":"files/news/2024月刊少女.md","lastUpdated":1708226832000}'),t={name:"files/news/2024月刊少女.md"},l=e(`<h1 id="月刊少女-2024限定版" tabindex="-1">月刊少女-2024限定版 <a class="header-anchor" href="#月刊少女-2024限定版" aria-label="Permalink to &quot;月刊少女-2024限定版&quot;">​</a></h1><h2 id="january" tabindex="-1">January <a class="header-anchor" href="#january" aria-label="Permalink to &quot;January&quot;">​</a></h2><h3 id="react-19-即将推出的-4-个全新-hooks" tabindex="-1"><a href="https://mp.weixin.qq.com/s/KFUikcgNvNw15wqM2wPHJw" target="_blank" rel="noreferrer">React 19 即将推出的 4 个全新 Hooks</a> <a class="header-anchor" href="#react-19-即将推出的-4-个全新-hooks" aria-label="Permalink to &quot;[React 19 即将推出的 4 个全新 Hooks](https://mp.weixin.qq.com/s/KFUikcgNvNw15wqM2wPHJw)&quot;">​</a></h3><ul><li><code>use</code></li><li><code>useOptimistic</code></li><li><code>useFormState</code></li><li><code>useFormStatus</code></li></ul><h4 id="useoptimistic" tabindex="-1">useOptimistic <a class="header-anchor" href="#useoptimistic" aria-label="Permalink to &quot;useOptimistic&quot;">​</a></h4><p><code>useOptimistic</code> Hook 允许在进行提交动作的同时，能够乐观地更新用户界面，提升用户体验。</p><p>其语法如下：</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useOptimistic</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AppContainer</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">optimisticState</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">addOptimistic</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useOptimistic</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 更新函数</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">currentState</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">optimisticValue</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 合并并返回带有乐观值的新状态  </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><blockquote><p><strong>乐观更新</strong>：一种更新应用程序中数据的策略。这种策略通常会先更改前端页面，然后向服务器发送请求，如果请求成功，则结束操作；如果请求失败，则页面回滚到先前状态。这种做法可以防止新旧数据之间的跳转或闪烁，提供更快的用户体验。</p></blockquote><h4 id="useformstate" tabindex="-1">useFormState <a class="header-anchor" href="#useformstate" aria-label="Permalink to &quot;useFormState&quot;">​</a></h4><p><code>useFormState</code> 是一个可以根据某个表单动作的结果更新 <code>state</code> 的 Hook。</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> formAction</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFormState</span><span style="color:#A6ACCD;">(fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> initialState)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><blockquote><p><strong>注意</strong>：<code>useFormState</code> 需要从 <code>react-dom</code> 中导入，而不是从 <code>react</code> 中导入。</p></blockquote><h4 id="useformstatus" tabindex="-1">useFormStatus <a class="header-anchor" href="#useformstatus" aria-label="Permalink to &quot;useFormStatus&quot;">​</a></h4><p><code>useFormStatus</code> 用于获取上次表单提交的状态信息。</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> pending</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> method</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> action </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFormStatus</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>它不接收任何参数，会返回一个包含以下属性的 <code>status</code> 对象：</p><ul><li><code>pending</code>：布尔值。如果为 <code>true</code>，则表示父级 <code>&lt;form&gt;</code> 正在等待提交；否则为 false。</li><li><code>data</code>：包含父级 <code>&lt;form&gt;</code> 正在提交的数据；如果没有进行提交或没有父级 <code>&lt;form&gt;</code>，它将为 <code>null</code>。</li><li><code>method</code>：字符串，可以是 &#39;get&#39; 或 &#39;post&#39;。表示父级 <code>&lt;form&gt;</code> 使用 GET 或 POST HTTP 方法 进行提交。默认情况下，<code>&lt;form&gt;</code> 将使用 GET 方法，并可以通过 method 属性指定。</li><li><code>action</code>：一个传递给父级 <code>&lt;form&gt;</code> 的 <code>action</code> 属性的函数引用。如果没有父级 <code>&lt;form&gt;</code>，则该属性为 <code>null</code>。如果在 <code>action</code> 属性上提供了 URI 值，或者未指定 <code>action</code> 属性，<code>status.action</code> 将为 <code>null</code>。</li></ul><blockquote><p>它仅在父级表单使用 <code>action</code> 属性时才有效。</p></blockquote><h3 id="opera-公布非-webkit-内核的ios-浏览器" tabindex="-1"><code>Opera</code> 公布非 <code>WebKit</code> 内核的ios 浏览器 <a class="header-anchor" href="#opera-公布非-webkit-内核的ios-浏览器" aria-label="Permalink to &quot;\`Opera\` 公布非 \`WebKit\` 内核的ios 浏览器&quot;">​</a></h3><p>在苹果确认将遵从 DMA 法案要求，允许开发者在欧洲地区的 App Store 提交不基于WebKit 内核的浏览器后，Opera 宣布将为欧洲的 iPhone 与 iPad 用户带来一款基于自研引警的全新 AI浏览器: 【Opera One】。</p><h3 id="文章" tabindex="-1">文章 <a class="header-anchor" href="#文章" aria-label="Permalink to &quot;文章&quot;">​</a></h3><ul><li><a href="https://juejin.cn/post/7272632260179542050" target="_blank" rel="noreferrer">Performance面板分析性能瓶颈全流程</a></li><li><a href="https://sorrycc.com/react-tips/" target="_blank" rel="noreferrer">react tips</a></li><li>[<a href="https://sorrycc.com/promise-with-resolvers/" target="_blank" rel="noreferrer">https://sorrycc.com/promise-with-resolvers/</a>](使用 Promise.withResolvers 延迟 Promise)</li><li><a href="https://bjornlu.com/blog/hot-module-replacement-is-easy" target="_blank" rel="noreferrer">Hot Module Replacement is Easy</a><blockquote><p>云谦译：<a href="https://sorrycc.com/hot-module-replacement-is-easy/" target="_blank" rel="noreferrer">Hot Module Replacement 原理</a></p></blockquote></li></ul>`,23),n=[l];function p(c,r,i,d,y,F){return a(),o("div",null,n)}const m=s(t,[["render",p]]);export{u as __pageData,m as default};
