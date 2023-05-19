import{_ as s,c as n,o as a,N as l}from"./chunks/framework.66067519.js";const g=JSON.parse('{"title":"Flex","description":"","frontmatter":{},"headers":[],"relativePath":"files/docs/CSS/04-Flex布局.md","lastUpdated":1684467208000}'),o={name:"files/docs/CSS/04-Flex布局.md"},p=l(`<h1 id="flex" tabindex="-1">Flex <a class="header-anchor" href="#flex" aria-label="Permalink to &quot;Flex&quot;">​</a></h1><h2 id="display-flex-和-display-inline-flex" tabindex="-1"><strong>display: flex</strong> 和 <strong>display: inline-flex</strong> <a class="header-anchor" href="#display-flex-和-display-inline-flex" aria-label="Permalink to &quot;**display: flex** 和 **display: inline-flex**&quot;">​</a></h2><blockquote><p><a href="https://link.zhihu.com/?target=https%3A//www.w3.org/TR/css-display-3/%23values" target="_blank" rel="noreferrer">CSS Display Module Level 3</a> 定义了 <strong>display</strong> 可以接受两个值：</p></blockquote><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">block-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*相当于*/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">inline-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* 相当于 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="flexbox中的换行" tabindex="-1">Flexbox中的换行 <a class="header-anchor" href="#flexbox中的换行" aria-label="Permalink to &quot;Flexbox中的换行&quot;">​</a></h2><p>默认情况之下，位于Flexbox容器的所有子元素都会排在同一行（或同一列），但 <strong>Flexbox</strong> 容器的可用空间是未知的。当Flexbox没有足够多的空间来容纳其所有 <strong>Flex</strong> 项目（其子元素）时，<strong>Flex</strong> 项目会溢出 <strong>Flexbox</strong> 容器，将会打破布局或出现滚动条：</p><p>在Flexbox容器上显式设置 <strong>flex-wrap</strong> 的值为 <strong>wrap</strong>（默认值为 <strong>nowrap</strong> ）</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">flex-box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex-wrap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> wrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><strong>flex-wrap: wrap</strong> 只有在Flex项目不能自动收缩扩展状态下有效.如果在Flex项目中显式设置了 <strong>flex: 1</strong> 时，即使你在<strong>Flexbox</strong>容器上显式设置<strong>flex-wrap</strong>为<strong>wrap</strong>也不能让<strong>Flex</strong>项目换行：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flex-box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flex-item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flex-item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flex-item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">flex-box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex-wrap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> wrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">flex-item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="flex-1" tabindex="-1">flex: 1 <a class="header-anchor" href="#flex-1" aria-label="Permalink to &quot;flex: 1&quot;">​</a></h2><p><strong>flex: 1</strong> 它相当于</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">flex-grow</span><span style="color:#A6ACCD;">: 1;</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-shrink</span><span style="color:#A6ACCD;">: 1;</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-basis</span><span style="color:#A6ACCD;">: 0%;</span></span></code></pre></div><p>如果未显式设置<strong>flex</strong>（它是<strong>flex-grow</strong>、<strong>flex-shrink</strong> 和 <strong>flex-basis</strong>的简写属性）时，其初始值是：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">flex-grow</span><span style="color:#A6ACCD;">: 0;</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-shrink</span><span style="color:#A6ACCD;">: 1;</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-basis</span><span style="color:#A6ACCD;">: auto;</span></span></code></pre></div><blockquote><p>默认情况下，元素不会缩短至小于内容框尺寸，若想改变这一状况，请设置元素的 <strong>min-width</strong> 与 <strong>min-height</strong> 属性。</p></blockquote><p>当 <strong>flex-basis</strong> 为 auto 时，Flex项目的宽度是 <strong>max-content</strong>。</p><p>当设置 <strong>flex:1</strong> 时，<strong>flex-basis</strong>变成了0%，这将覆盖Flex项目的内在尺寸（<strong>max-content</strong>），Flex项目的基本尺寸现在是 <strong>0</strong>，但由于 <strong>flex-grow</strong>的存在，它们都可以增长以填补空的空间（Flexbox的剩余空间）。</p><p>在这种情况下，<strong>flex-shrink</strong>不再做任何事情，因为所有的Flex项目现在的宽度都是0，并且正在增长以填补可用空间。 只不过，Flexbox容器有可有没有剩余空间，甚至是有不足空间。这个时候，flex:1也就不能均分Flexbox容器了。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>主轴上Flex项目的 <strong>overflow</strong> 属性是 <strong>visible</strong> 时，主轴上Flex项目的最小尺寸（<strong>min-size</strong>）将会指定一个自动的（<strong>automatic</strong>）最小尺寸 ”</p><h2 id="flex-上的滚动失效" tabindex="-1">Flex 上的滚动失效 <a class="header-anchor" href="#flex-上的滚动失效" aria-label="Permalink to &quot;Flex 上的滚动失效&quot;">​</a></h2><p><a href="https://link.zhihu.com/?target=https%3A//www.zhangxinxu.com/wordpress/2021/12/flex-end-overflow/" target="_blank" rel="noreferrer">flex-end为什么overflow无法滚动及解决方法</a></p><hr><p><a href="https://www.zhangxinxu.com/wordpress/2019/08/css-flex-last-align/" target="_blank" rel="noreferrer">让CSS flex布局最后一行列表左对齐的N种方法</a><a href="https://www.zhihu.com/question/424471207/answer/2317334806" target="_blank" rel="noreferrer">CSS 防御</a></p>`,26),e=[p];function t(r,c,F,i,D,y){return a(),n("div",null,e)}const x=s(o,[["render",t]]);export{g as __pageData,x as default};
