import{_ as s,c as a,o as n,N as l}from"./chunks/framework.66067519.js";const i=JSON.parse('{"title":"ES6","description":"","frontmatter":{},"headers":[],"relativePath":"files/docs/JavaScript/02-ES6.md","lastUpdated":1684467208000}'),p={name:"files/docs/JavaScript/02-ES6.md"},o=l(`<h1 id="es6" tabindex="-1">ES6 <a class="header-anchor" href="#es6" aria-label="Permalink to &quot;ES6&quot;">​</a></h1><h2 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;Map&quot;">​</a></h2><h3 id="map-1" tabindex="-1">Map <a class="header-anchor" href="#map-1" aria-label="Permalink to &quot;Map&quot;">​</a></h3><p><a href="https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Map" target="_blank" rel="noreferrer">Map</a> 是一个带键的数据项的集合，就像一个 <code>Object</code> 一样。 但是它们最大的差别是 <code>Map</code> 允许任何类型的键（key）。</p><p><code>Object</code>对象的键名会通过<code>toString</code>方法转化为<strong>字符串类型</strong></p><blockquote><p>在访问对象成员时，键名<strong>有空格</strong>时不能采用点访问，例如<code>data.ab c</code></p><p>需要采用<code>data[&#39;ab c&#39;]</code>的形式来访问</p></blockquote><p><strong>Map</strong>方法和属性如下：</p><ul><li><code>new Map()</code> —— 创建 map。</li><li><code>map.set(key, value)</code> —— 根据键存储值。</li><li><code>map.get(key)</code> —— 根据键来返回值，如果 <code>map</code> 中不存在对应的 <code>key</code>，则返回 <code>undefined</code>。</li><li><code>map.has(key)</code> —— 如果 <code>key</code> 存在则返回 <code>true</code>，否则返回 <code>false</code>。</li><li><code>map.delete(key)</code> —— 删除指定键的值。</li><li><code>map.clear()</code> —— 清空 map。</li><li><code>map.size</code> —— 返回当前元素个数。</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">str1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 字符串键</span></span>
<span class="line"><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">num1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// 数字键</span></span>
<span class="line"><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">boolean1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 布尔值键</span></span>
<span class="line"><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alice</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 还记得普通的 Object 吗? 它会将键转化为字符串</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Map 则会保留键的类型，所以下面这两个结果不同：</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">( map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)   )</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;num1&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">( map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;str1&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">( map</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">size )</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 3</span></span></code></pre></div><p>脚注<a href="./脚注.html">^1</a></p><p><code>Map</code> 使用 <a href="https://tc39.github.io/ecma262/#sec-samevaluezero" target="_blank" rel="noreferrer">SameValueZero</a> 算法来比较键是否相等。它和严格等于 <code>===</code> 差不多，但区别是 <code>NaN</code> 被看成是等于 <code>NaN</code>。所以 <code>NaN</code> 也可以被用作键。</p><p>这个算法不能被改变或者自定义。</p><p><strong>链式调用</strong></p><p>每一次 <code>map.set</code> 调用都会返回 map 本身，所以我们可以进行“链式”调用：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">str1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">num1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">boolean1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="map-迭代" tabindex="-1">Map 迭代 <a class="header-anchor" href="#map-迭代" aria-label="Permalink to &quot;Map 迭代&quot;">​</a></h3><p>如果要在 <code>map</code> 里使用循环，可以使用以下三个方法：</p><ul><li><code>map.keys()</code> —— 遍历并返回一个包含所有键的可迭代对象，</li><li><code>map.values()</code> —— 遍历并返回一个包含所有值的可迭代对象，</li><li><code>map.entries()</code> —— 遍历并返回一个包含所有实体 <code>[key, value]</code> 的可迭代对象，<code>for..of</code> 在默认情况下使用的就是这个。</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> recipeMap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">one</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">two</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">250</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 遍历所有的键</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> vegetable </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> recipeMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#A6ACCD;">()) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vegetable</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// one, two, three</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 遍历所有的值</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> amount </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> recipeMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">values</span><span style="color:#A6ACCD;">()) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">amount</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 100, 250, 300</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 遍历所有的实体 [key, value]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> entry </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> recipeMap) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 与 recipeMap.entries() 相同</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">entry</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 500 (and so on)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><blockquote><p>迭代的顺序与插入值的顺序相同。与普通的 <code>Object</code> 不同，<code>Map</code> 保留了此顺序。</p></blockquote><p><code>Map</code> 有内建的 <code>forEach</code> 方法，与 <code>Array</code> 类似</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 对每个键值对 (key, value) 运行 forEach 函数</span></span>
<span class="line"><span style="color:#A6ACCD;">recipeMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">( </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">map</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// cucumber: 500 etc</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="object-entries-从对象创建-map" tabindex="-1"><a href="https://zh.javascript.info/map-set#objectentries-cong-dui-xiang-chuang-jian-map" target="_blank" rel="noreferrer">Object.entries：从对象创建 Map</a> <a class="header-anchor" href="#object-entries-从对象创建-map" aria-label="Permalink to &quot;[Object.entries：从对象创建 Map](https://zh.javascript.info/map-set#objectentries-cong-dui-xiang-chuang-jian-map)&quot;">​</a></h3><p>当创建一个 <code>Map</code> 后，我们可以传入一个带有键值对的数组（或其它可迭代对象）来进行初始化。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 键值对 [key, value] 数组</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">str1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">num1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">boolean1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">( map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// str1</span></span></code></pre></div><p>如果我们想从一个已有的普通对象（plain object）来创建一个 <code>Map</code>，那么我们可以使用内建方法 <a href="https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/entries" target="_blank" rel="noreferrer">Object.entries(obj)</a>，该方法返回对象的键/值对数组，该数组格式完全按照 <code>Map</code> 所需的格式。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">alice</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">(Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#A6ACCD;">(obj))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">( map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// alice</span></span></code></pre></div><p>这里，<code>Object.entries</code> 返回键/值对数组：<code>[ [&quot;name&quot;,&quot;John&quot;], [&quot;age&quot;, 30] ]</code>。即为 <code>Map</code> 所需要的格式。</p><h3 id="object-fromentries-从-map-创建对象" tabindex="-1"><a href="https://zh.javascript.info/map-set#objectfromentries-cong-map-chuang-jian-dui-xiang" target="_blank" rel="noreferrer">Object.fromEntries：从 Map 创建对象</a> <a class="header-anchor" href="#object-fromentries-从-map-创建对象" aria-label="Permalink to &quot;[Object.fromEntries：从 Map 创建对象](https://zh.javascript.info/map-set#objectfromentries-cong-map-chuang-jian-dui-xiang)&quot;">​</a></h3><p><code>Object.fromEntries</code> 方法的作用是相反的：给定一个具有 <code>[key, value]</code> 键值对的数组，它会根据给定数组创建一个对象</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> prices </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromEntries</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cap</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">desk</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">food</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 现在 prices = { cap: 1, desk: 2, food: 4 }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(prices</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cap)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span></code></pre></div><p>可以使用 <code>Object.fromEntries</code> 从 <code>Map</code> 得到一个普通对象（plain object）</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cap</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">desk</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">food</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromEntries</span><span style="color:#A6ACCD;">(map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 创建一个普通对象（plain object）(*)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 完成了！</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// obj = { cap: 1, desk: 2, food: 4 }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cap)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span></code></pre></div><p>同样，也可以省略掉<code>.entires()</code></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromEntries</span><span style="color:#A6ACCD;">(map)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 省掉 .entries()</span></span></code></pre></div><p>因为 <code>Object.fromEntries</code> 期望得到一个可迭代对象作为参数，而不一定是数组。并且 <code>map</code> 的标准迭代会返回跟 <code>map.entries()</code> 一样的键/值对。因此，我们可以获得一个普通对象（plain object），其键/值对与 <code>map</code> 相同。</p><h3 id="weakmap-和-map-区别" tabindex="-1">WeakMap 和 Map 区别 <a class="header-anchor" href="#weakmap-和-map-区别" aria-label="Permalink to &quot;WeakMap 和 Map 区别&quot;">​</a></h3><p><code>WeakMap</code>与<code>Map</code>的区别就在于<strong>Weak</strong>。</p><blockquote><p>JS 中<strong>垃圾回收</strong>程序对待“WeakMap”中键的方式</p></blockquote><ul><li>WeakMap相对于Map是一个不可枚举的对象，必须使用对象作为键值。</li><li>WeakMap 的键名引用的对象是弱引用<a href="./[强引用与弱引用](https://juejin.cn/post/7039678880071827463).html">^r</a></li></ul><hr>`,41),e=[o];function t(c,r,y,D,F,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
