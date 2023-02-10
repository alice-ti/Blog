import{_ as s,c as a,o as e,e as n}from"./app.1ab11667.js";const g=JSON.parse('{"title":"React 读书笔记","description":"","frontmatter":{},"headers":[{"level":2,"title":"JSX","slug":"jsx","link":"#jsx","children":[]},{"level":2,"title":"render & commit","slug":"render-commit","link":"#render-commit","children":[]},{"level":2,"title":"state","slug":"state","link":"#state","children":[]},{"level":2,"title":"component","slug":"component","link":"#component","children":[{"level":3,"title":"受控组件与非受控组件","slug":"受控组件与非受控组件","link":"#受控组件与非受控组件","children":[]}]},{"level":2,"title":"Build","slug":"build","link":"#build","children":[{"level":3,"title":"🍓 Cra","slug":"🍓-cra","link":"#🍓-cra","children":[]},{"level":3,"title":"🍇 Umi","slug":"🍇-umi","link":"#🍇-umi","children":[]},{"level":3,"title":"🍒 Vite","slug":"🍒-vite","link":"#🍒-vite","children":[]},{"level":3,"title":"🍊 Next","slug":"🍊-next","link":"#🍊-next","children":[]}]}],"relativePath":"files/docs/React/01-创建react.md","lastUpdated":1676026478000}'),t={name:"files/docs/React/01-创建react.md"},l=n(`<h1 id="react-读书笔记" tabindex="-1">React 读书笔记 <a class="header-anchor" href="#react-读书笔记" aria-hidden="true">#</a></h1><blockquote><p><a href="https://beta.reactjs.org/learn/sharing-state-between-components" target="_blank" rel="noreferrer">React Docs</a></p></blockquote><h2 id="jsx" tabindex="-1"><a href="/Blog/files/docs/React/02-jsx使用与理解.html">JSX</a> <a class="header-anchor" href="#jsx" aria-hidden="true">#</a></h2><h2 id="render-commit" tabindex="-1">render &amp; commit <a class="header-anchor" href="#render-commit" aria-hidden="true">#</a></h2><ol><li>Triggering a render</li><li>Rendering the component</li><li>Committing to the DOM</li></ol><p>render 始终是一个 <strong>pure-function</strong></p><h2 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-hidden="true">#</a></h2><blockquote><p>React waits until all code in the event handlers has run before processing your state updates. (React 会等到事件处理程序中的所有代码都运行后、才会处理状态更新)</p></blockquote><blockquote><p>After the event handler completes, React will trigger a re-render. During the re-render, React will process the queue.</p></blockquote><p><strong>setState</strong> 更新函数命名规范</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">setEnabled</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">e)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setLastName</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">ln</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> ln</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setFriendCount</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">fc</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> fc </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="component" tabindex="-1">component <a class="header-anchor" href="#component" aria-hidden="true">#</a></h2><h3 id="受控组件与非受控组件" tabindex="-1">受控组件与非受控组件 <a class="header-anchor" href="#受控组件与非受控组件" aria-hidden="true">#</a></h3><h2 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-hidden="true">#</a></h2><p>常见创建react项目方式</p><h3 id="🍓-cra" tabindex="-1">🍓 Cra <a class="header-anchor" href="#🍓-cra" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create-react-app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">react-app</span></span>
<span class="line"></span></code></pre></div><p>你也可以使用TS</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create-react-app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">react-ts-app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--template</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">typescript</span></span>
<span class="line"></span></code></pre></div><h3 id="🍇-umi" tabindex="-1">🍇 Umi <a class="header-anchor" href="#🍇-umi" aria-hidden="true">#</a></h3><blockquote><p>你可以通过 <strong>yarn create umi</strong> 或 <strong>npm create umi</strong> 使用 <strong>create-umi</strong>。推荐使用 <strong>yarn create</strong> 命令、能确保每次使用最新的脚手架。<a href="https://v2.umijs.org/zh/guide/create-umi-app.html#%E4%BB%8B%E7%BB%8D-create-umi" target="_blank" rel="noreferrer">Umi传送门</a></p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myapp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myapp</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">umi</span></span>
<span class="line"></span></code></pre></div><h3 id="🍒-vite" tabindex="-1">🍒 Vite <a class="header-anchor" href="#🍒-vite" aria-hidden="true">#</a></h3><p>创建vite项目</p><p>使用npm</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite@latest</span></span>
<span class="line"></span></code></pre></div><p>使用yarn</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite</span></span>
<span class="line"></span></code></pre></div><p>使用pnpm</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite</span></span>
<span class="line"></span></code></pre></div><p>然后按照提示操作即可！</p><p>你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。</p><p>查看 <a href="https://github.com/vitejs/vite/tree/main/packages/create-vite" target="_blank" rel="noreferrer">create-vite</a> 以获取每个模板的更多细节：<strong>vanilla</strong>、<strong>vanilla-ts</strong>、<strong>vue</strong>、<strong>vue-ts</strong>、<strong>react</strong>、<strong>react-ts</strong>、<strong>preact</strong>、<strong>preact-ts</strong>、<strong>lit</strong>、<strong>lit-ts</strong>、<strong>svelte</strong>、<strong>svelte-ts</strong>。</p><h3 id="🍊-next" tabindex="-1">🍊 Next <a class="header-anchor" href="#🍊-next" aria-hidden="true">#</a></h3><p>创建Next项目</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create-next-app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nextjs-app</span></span>
<span class="line"></span></code></pre></div>`,36),p=[l];function o(r,c,i,d,h,C){return e(),a("div",null,p)}const u=s(t,[["render",o]]);export{g as __pageData,u as default};
