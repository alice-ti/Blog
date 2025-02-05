import{_ as i,c as a,o as n,af as e}from"./chunks/framework.Cj92BNWl.js";const E=JSON.parse('{"title":"CommonJs 和 ES Module","description":"","frontmatter":{},"headers":[],"relativePath":"files/docs/Node/01-CommonJs 和 ESM.md","filePath":"files/docs/Node/01-CommonJs 和 ESM.md","lastUpdated":1738744669000}'),t={name:"files/docs/Node/01-CommonJs 和 ESM.md"};function l(h,s,o,p,k,d){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="commonjs-和-es-module" tabindex="-1">CommonJs 和 ES Module <a class="header-anchor" href="#commonjs-和-es-module" aria-label="Permalink to &quot;CommonJs 和 ES Module&quot;">​</a></h1><p><strong>Js</strong> 社区存在多种模块化规范，目前流行的js模块化规范有CommonJS、AMD、CMD、UMD以及ES6。其中最常使用到的是 <strong>node</strong> 本身实现的 <code>commonjs</code> 和 es6 标准的 <code>es module</code>。</p><h2 id="commonjs" tabindex="-1"><strong>CommonJS</strong> <a class="header-anchor" href="#commonjs" aria-label="Permalink to &quot;**CommonJS**&quot;">​</a></h2><p>NodeJS是CommonJS规范的主要实践者，它有四个重要的环境变量为模块化的实现提供支持：<code>module</code>、<code>exports</code>、<code>require</code>、<code>global</code>。实际使用时，用<code>module.exports</code>定义当前模块对外输出的接口（不推荐直接用<code>exports</code>），用<code>require</code>加载模块</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 定义模块math.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> total </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 需要向外暴露的函数、变量</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  add: add,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  total: total</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 必须加./路径，不加的话只会去node_modules文件找 **/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 引用自定义的模块时，参数包含路径，可省略.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> math </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./math&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 引用核心模块时，不需要带路径</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p><code>CommonJS</code> 用<strong>同步</strong>的方式加载模块。<strong>在服务端，模块文件都存放在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。</strong></p><h3 id="exports和module-export区别" tabindex="-1"><code>exports</code>和<code>module.export</code>区别 <a class="header-anchor" href="#exports和module-export区别" aria-label="Permalink to &quot;\`exports\`和\`module.export\`区别&quot;">​</a></h3><ul><li><code>exports</code>：对于本身来讲是一个变量（对象），它不是module的引用，它是<code>{}</code>的引用，它指向<code>module.exports</code>的{}模块。只能使用<code>.</code>语法 向外暴露变量。</li><li><code>module.exports</code>：<code>module</code>是一个变量，指向一块内存，<code>exports</code>是<code>module</code>中的一个属性，存储在内存中，然后<code>exports</code>属性指向<code>{}</code>模块。既可以使用<code>.</code>语法，也可以使用<code>=</code>直接赋值。</li></ul><h2 id="amd" tabindex="-1"><strong>AMD</strong> <a class="header-anchor" href="#amd" aria-label="Permalink to &quot;**AMD**&quot;">​</a></h2><p>AMD规范采用<strong>异步方式加载模块</strong>，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。</p><h2 id="cmd" tabindex="-1">CMD <a class="header-anchor" href="#cmd" aria-label="Permalink to &quot;CMD&quot;">​</a></h2><p>CMD 是另一种js模块化方案，它与AMD很类似，不同点在于：<strong>AMD推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行</strong></p><h2 id="umd-universal-module-definition-通用模块定义" tabindex="-1"><strong>UMD（Universal Module Definition - 通用模块定义）</strong> <a class="header-anchor" href="#umd-universal-module-definition-通用模块定义" aria-label="Permalink to &quot;**UMD（Universal Module Definition - 通用模块定义）**&quot;">​</a></h2><p>UMD是AMD和CommonJS的一个糅合。AMD是浏览器优先，异步加载；CommonJS是服务器优先，同步加载。</p><p>先判断是否支持node.js的模块，存在就使用node.js；再判断是否支持AMD（define是否存在），存在则使用AMD的方式加载。这就是所谓的UMD。</p><h2 id="es6-module" tabindex="-1"><strong>ES6 Module</strong> <a class="header-anchor" href="#es6-module" aria-label="Permalink to &quot;**ES6 Module**&quot;">​</a></h2><p>ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为浏览器和服务器通用的模块解决方案。其模块功能主要由两个命令构成：<code>export</code>和<code>import</code>。<code>export</code>命令用于规定模块的对外接口，<code>import</code>命令用于输入其他模块提供的功能。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** export default **/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//定义输出</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { basicNum, add };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//引入</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> math </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./math&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ele</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ele.textContent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">99</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> math.basicNum);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="esm-模块与-commonjs-模块" tabindex="-1"><strong>ESM 模块与 CommonJS 模块</strong> <a class="header-anchor" href="#esm-模块与-commonjs-模块" aria-label="Permalink to &quot;**ESM 模块与 CommonJS 模块**&quot;">​</a></h2><ol><li><p><strong>CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用</strong></p><blockquote><p>CommonJS 模块输出的是<strong>值的拷贝</strong>，也就是说，一旦输出一个值，<strong>模块内部的变化就影响不到这个值</strong>。</p></blockquote></li><li><p><strong>CommonJS 模块是运行时加载，ES6 模块是编译时输出接口</strong></p><blockquote><ul><li>运行时加载: <code>CommonJS</code> 模块就是对象。即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。</li><li>编译时加载: <code>ES6</code> 模块不是对象，而是通过 <code>export</code> 命令显式指定输出的代码，<code>import</code>时采用静态命令的形式。即在<code>import</code>时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。模块内部引用的变化，会反应在外部。</li></ul></blockquote></li></ol><h2 id="summary" tabindex="-1">SUMMARY <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;SUMMARY&quot;">​</a></h2><ol><li><p>CommonJs 主要针对服务端，AMD/CMD/ES Module主要针对浏览器端</p></li><li><p>AMD/CMD区别</p><blockquote><p>都是并行加载js文件，但还是有所区别，</p></blockquote><ol><li>AMD是预加载，在并行加载js文件同时，还会解析执行该模块（因为还需要执行，所以在加载某个模块前，这个模块的依赖模块需要先加载完成）</li><li>CMD是懒加载，虽然会一开始就并行加载js文件，但是不会执行，而是在需要的时候才执行。</li></ol></li></ol><hr><p><a href="https://segmentfault.com/a/1190000041396029" target="_blank" rel="noreferrer">深入浅出 ESM 模块 和 CommonJS 模块</a></p><p><a href="https://zhuanlan.zhihu.com/p/467991875" target="_blank" rel="noreferrer">彻底搞懂AMD、CMD、UMD、ESM和CommonJS</a></p>`,25)]))}const c=i(t,[["render",l]]);export{E as __pageData,c as default};
