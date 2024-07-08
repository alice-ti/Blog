import{_ as s,o as a,c as n,O as l}from"./chunks/framework.999b5480.js";const C=JSON.parse('{"title":"Hooks & API","description":"","frontmatter":{},"headers":[],"relativePath":"files/docs/React/14-hooks.md","filePath":"files/docs/React/14-hooks.md","lastUpdated":1720437757000}'),o={name:"files/docs/React/14-hooks.md"},e=l(`<h1 id="hooks-api" tabindex="-1">Hooks &amp; API <a class="header-anchor" href="#hooks-api" aria-label="Permalink to &quot;Hooks &amp; API&quot;">​</a></h1><h2 id="usestate-usereducer" tabindex="-1">useState &amp; useReducer <a class="header-anchor" href="#usestate-usereducer" aria-label="Permalink to &quot;useState &amp; useReducer&quot;">​</a></h2><h2 id="useeffect-uselayouteffect" tabindex="-1">useEffect &amp; useLayoutEffect <a class="header-anchor" href="#useeffect-uselayouteffect" aria-label="Permalink to &quot;useEffect &amp; useLayoutEffect&quot;">​</a></h2><blockquote><p><a href="https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/" target="_blank" rel="noreferrer">useEffect 完整指南</a></p></blockquote><h2 id="usememo-usecallback" tabindex="-1">useMemo &amp; useCallback <a class="header-anchor" href="#usememo-usecallback" aria-label="Permalink to &quot;useMemo &amp; useCallback&quot;">​</a></h2><h2 id="usecontent" tabindex="-1">useContent <a class="header-anchor" href="#usecontent" aria-label="Permalink to &quot;useContent&quot;">​</a></h2><h2 id="useimmer" tabindex="-1">useImmer <a class="header-anchor" href="#useimmer" aria-label="Permalink to &quot;useImmer&quot;">​</a></h2><blockquote><p><a href="https://zh-hans.react.dev/learn/updating-objects-in-state#write-concise-update-logic-with-immer" target="_blank" rel="noreferrer">使用 Immer 编写简洁的更新逻辑</a></p></blockquote><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useImmer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">use-immer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> setPerson</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useImmer</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Niki de Saint Phalle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">artwork</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Blue Nana</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">city</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hamburg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://i.imgur.com/Sd1AgUOm.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 这样更新并不会覆盖之前的 state！</span></span>
<span class="line"><span style="color:#82AAFF;">updatePerson</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">draft</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">draft</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="useref" tabindex="-1">useRef <a class="header-anchor" href="#useref" aria-label="Permalink to &quot;useRef&quot;">​</a></h2><h2 id="forwardref" tabindex="-1">forwardRef <a class="header-anchor" href="#forwardref" aria-label="Permalink to &quot;forwardRef&quot;">​</a></h2><p>访问其他组件的DOM节点</p><ol><li><code>&lt;MyInput ref={inputRef} /&gt;</code> 告诉React将相应的DOM节点放入 <strong>inputRef.current</strong> 。这通常取决于 <strong>MyInput</strong> 组件，默认情况下，它不会.</li><li><code>MyInput</code> 组件使用 <strong>forwardRef</strong> 声明。它接收来自 <strong>prop</strong> 的 <strong>inputRef</strong> 作为第二个 <strong>ref</strong> 参数.</li><li><code>MyInput</code> 将它直接接收到的 <strong>ref</strong> 传递给内部的 <code>&lt;input&gt;</code></li></ol><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">forwardRef</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useRef</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> MyInput </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">forwardRef</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">props</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ref</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> {...</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Form</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inputRef</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useRef</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">handleClick</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">inputRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">focus</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MyInput</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">inputRef</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Focus the input</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="使用-useimperativehandle-限制公开的能力" tabindex="-1">使用 <strong>useImperativeHandle</strong> 限制公开的能力 <a class="header-anchor" href="#使用-useimperativehandle-限制公开的能力" aria-label="Permalink to &quot;使用 **useImperativeHandle** 限制公开的能力&quot;">​</a></h2><h2 id="flushsync" tabindex="-1">flushSync <a class="header-anchor" href="#flushsync" aria-label="Permalink to &quot;flushSync&quot;">​</a></h2>`,16),p=[e];function t(r,c,D,y,F,i){return a(),n("div",null,p)}const u=s(o,[["render",t]]);export{C as __pageData,u as default};