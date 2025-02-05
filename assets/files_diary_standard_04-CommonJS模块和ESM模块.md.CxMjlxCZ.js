import{_ as i,c as a,o as n,af as t}from"./chunks/framework.Cj92BNWl.js";const E=JSON.parse('{"title":"Common JS 和 ES Moudle","description":"","frontmatter":{},"headers":[],"relativePath":"files/diary/standard/04-CommonJS模块和ESM模块.md","filePath":"files/diary/standard/04-CommonJS模块和ESM模块.md","lastUpdated":1738744669000}'),e={name:"files/diary/standard/04-CommonJS模块和ESM模块.md"};function l(p,s,h,k,d,r){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="common-js-和-es-moudle" tabindex="-1">Common JS 和 ES Moudle <a class="header-anchor" href="#common-js-和-es-moudle" aria-label="Permalink to &quot;Common JS 和 ES Moudle&quot;">​</a></h1><p>原生 <strong>js</strong> 引入很容易出现 <strong>全局污染</strong> 和 <strong>依赖混乱</strong> 现象</p><p><strong>全局污染</strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./a.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./b.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>在 <strong>index.js</strong> 中的变量 <code>count</code> 可以在 <strong>a.js</strong> 中使用和修改，进而影响到 <strong>index.js</strong> 中其他使用到<code>count</code>的部分。</p><p><strong>依赖混乱</strong></p><p>正常情况下，执行 js 的先后顺序就是 <strong>script</strong> 标签排列的前后顺序</p><p>假设三个 js 中，都有一个公共方法 <code>fun1</code> ， <code>fun2</code> ， <code>fun3</code>。且互为依赖调用时，下层 js 能调用上层 js 的方法，但是上层 js 无法调用下层 js 的方法。</p><h2 id="common-js" tabindex="-1">Common JS <a class="header-anchor" href="#common-js" aria-label="Permalink to &quot;Common JS&quot;">​</a></h2><ul><li>在 <code>commonjs</code> 中每一个 js 文件都是一个单独的模块，我们可以称之为 <code>module</code>；</li><li>该模块中，包含 <code>CommonJS</code> 规范的核心变量: <code>exports</code>、<code>module.exports</code>、<code>require</code>；</li><li><code>exports</code> 和 <code>module.exports</code> 可以负责对模块中的内容进行导出；</li><li><code>require</code> 函数可以帮助我们导入其他模块（自定义模块、系统模块、第三方库模块）中的内容；</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// name.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Alice-Ti&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// index.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./name.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> say</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        author:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;我不是外星人&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>require</code> 查找文件顺序如下</p><ul><li>在当前目录下的 <code>node_modules</code> 目录查找。</li><li>如果没有，在父级目录的 <code>node_modules</code> 查找，如果没有在父级目录的父级目录的 <code>node_modules</code> 中查找。</li><li>沿着路径向上递归，直到根目录下的 <code>node_modules</code> 目录。</li><li>在查找过程中，会找 <code>package.json</code> 下 main 属性指向的文件，如果没有 <code>package.json</code> ，在 node 环境下会以此查找 <code>index.js</code> ，<code>index.json</code> ，<code>index.node</code></li></ul><h3 id="exports-和-module-exports" tabindex="-1">exports 和 module.exports <a class="header-anchor" href="#exports-和-module-exports" aria-label="Permalink to &quot;exports 和 module.exports&quot;">​</a></h3><h2 id="es-module" tabindex="-1">ES Module <a class="header-anchor" href="#es-module" aria-label="Permalink to &quot;ES Module&quot;">​</a></h2><h3 id="导出-export-和导入-import" tabindex="-1"><strong>导出 export 和导入 import</strong> <a class="header-anchor" href="#导出-export-和导入-import" aria-label="Permalink to &quot;**导出 export 和导入 import**&quot;">​</a></h3><p>所有通过 <strong>export</strong> 导出的属性，在 <strong>import</strong> 中可以通过结构的方式，解构出来。</p><p>导出 a.js</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// a.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Alice-Ti&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Syna</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // xxx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { name }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Syna</span></span></code></pre></div><p>导入</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// b.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Syna, { name } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./a.js&#39;</span></span></code></pre></div><p>通过 export 导出的变量，这种情况下 import { } 内部的变量名称，要与 export { } 完全匹配</p><p>对于引入默认导出的模块，<code>import anyName from &#39;module&#39;</code>， anyName 可以是自定义名称</p><h3 id="重命名导入" tabindex="-1">重命名导入 <a class="header-anchor" href="#重命名导入" aria-label="Permalink to &quot;重命名导入&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Aname } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;module&#39;</span></span></code></pre></div><blockquote><p>从 <strong>module</strong> 模块中引入 <strong>name</strong> ，并重命名为 Aame 。然后在当前模块下，使用被重命名的名字。</p></blockquote><h3 id="重定向导入" tabindex="-1">重定向导入 <a class="header-anchor" href="#重定向导入" aria-label="Permalink to &quot;重定向导入&quot;">​</a></h3><p>可以把当前模块作为一个中转站，一方面引入 <strong>module</strong> 内的属性，然后把属性再给导出去</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;module&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 第一种方式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { name, ..., } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;module&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 第二种方式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Aname, ... } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;module&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //第三种方式</span></span></code></pre></div><ul><li>第一种方式：重定向导出 module 中的所有导出属性， 但是不包括 <code>module</code> 内的 <code>default</code> 属性。</li><li>第二种方式：从 <strong>module</strong> 中导入 name 再以相同的属性名，导出。</li><li>第三种方式：从 <strong>module</strong> 中导入 name ，重属名为 Aname 导出。</li></ul><h3 id="动态导入" tabindex="-1">动态导入 <a class="header-anchor" href="#动态导入" aria-label="Permalink to &quot;动态导入&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;module&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><code>import(&#39;module&#39;)</code>，动态导入返回一个 <code>Promise</code>。为了支持这种方式，需要在 <code>webpack</code> 或 <code>vite</code>中做相应的配置处理</p><h3 id="es-moudle-特性" tabindex="-1">ES Moudle 特性 <a class="header-anchor" href="#es-moudle-特性" aria-label="Permalink to &quot;ES Moudle 特性&quot;">​</a></h3><ul><li><p><strong>静态语法</strong></p><p>ES6 module 的引入和导出是静态的，<code>import</code> 会自动提升到代码的顶层 。</p><blockquote><p><code>import</code> , <code>export</code> 不能放在块级作用域或条件语句中。</p><p>import\` 的导入名不能为字符串或在判断语句。</p></blockquote></li><li><p><strong>导出绑定</strong></p><p><strong>不能修改import导入的属性</strong></p><ul><li>使用 import 被导入的模块运行在严格模式下。</li><li>使用 import 被导入的变量是只读的，可以理解默认为 const 装饰，无法被赋值</li><li>使用 import 被导入的变量是与原变量绑定/引用的，可以理解为 import 导入的变量无论是否为基本类型都是引用传递。</li></ul></li></ul><h3 id="import-动态引入" tabindex="-1"><strong>import() 动态引入</strong> <a class="header-anchor" href="#import-动态引入" aria-label="Permalink to &quot;**import() 动态引入**&quot;">​</a></h3><p><code>import()</code> 返回一个 <code>Promise</code> 对象， 返回的 <code>Promise</code> 的 then 成功回调中，可以获取模块的加载成功信息</p><h4 id="动态加载" tabindex="-1"><strong>动态加载</strong> <a class="header-anchor" href="#动态加载" aria-label="Permalink to &quot;**动态加载**&quot;">​</a></h4><p><code>import()</code> 动态加载一些内容，可以放在条件语句或者函数执行上下文中</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(isRequire){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> IMG</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./img.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="懒加载" tabindex="-1"><strong>懒加载</strong> <a class="header-anchor" href="#懒加载" aria-label="Permalink to &quot;**懒加载**&quot;">​</a></h4><p><code>import()</code> 可以实现懒加载</p><p>例如vue 中的路由懒加载</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;home&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;首页&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./home&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) ,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p><strong>React中动态加载</strong></p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> LazyComponent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  React.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lazy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Home</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Suspense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            maxDuration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            fallback</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;抱歉，请耐心等待 Loading...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OtherComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OtherComponentTwo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Suspense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="tree-shaking-和-code-splitting" tabindex="-1">Tree Shaking 和 Code Splitting <a class="header-anchor" href="#tree-shaking-和-code-splitting" aria-label="Permalink to &quot;Tree Shaking 和 Code Splitting&quot;">​</a></h3><p>// TOBE Continue</p><hr><p><a href="https://mp.weixin.qq.com/s/dq-RHXhn9ZjlLqdV9mabpQ" target="_blank" rel="noreferrer">CommonJS模块和ESM模块</a></p><p><a href="https://cloud.tencent.com/developer/article/1884093" target="_blank" rel="noreferrer">「万字进阶」深入浅出 Commonjs 和 Es Module</a></p>`,52)]))}const g=i(e,[["render",l]]);export{E as __pageData,g as default};
