import{_ as e,o,c as t,O as l}from"./chunks/framework.999b5480.js";const g=JSON.parse('{"title":"DOM","description":"","frontmatter":{},"headers":[],"relativePath":"files/docs/JavaScript/11-DOM.md","filePath":"files/docs/JavaScript/11-DOM.md","lastUpdated":1720437757000}'),c={name:"files/docs/JavaScript/11-DOM.md"},i=l(`<h1 id="dom" tabindex="-1">DOM <a class="header-anchor" href="#dom" aria-label="Permalink to &quot;DOM&quot;">​</a></h1><h2 id="document" tabindex="-1">document <a class="header-anchor" href="#document" aria-label="Permalink to &quot;document&quot;">​</a></h2><h3 id="document-activeelement" tabindex="-1">document.activeElement <a class="header-anchor" href="#document-activeelement" aria-label="Permalink to &quot;document.activeElement&quot;">​</a></h3><blockquote><p>返回当前在 <strong>DOM</strong> 或者 <strong>shadow DOM</strong> 树中处于聚焦状态的 <strong>Element</strong></p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 判断输入框是否聚焦</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">activeElement</span></span></code></pre></div><h2 id="scrollwidth、clientwidth、offsetwidth的区别" tabindex="-1">scrollWidth、clientWidth、offsetWidth的区别 <a class="header-anchor" href="#scrollwidth、clientwidth、offsetwidth的区别" aria-label="Permalink to &quot;scrollWidth、clientWidth、offsetWidth的区别&quot;">​</a></h2><ul><li>网页可见区域宽：document.body.clientWidth;</li><li>网页可见区域高：document.body.clientHeight;</li><li>网页可见区域高：document.body.offsetWeight:</li><li>网页可见区域高：document.body.offsetHeight;</li><li>网页正文全文宽：document.body.scrollWidth;</li><li>网页正文全文高：document.body.scrollHeight;</li><li>网页被卷去的高：document.body.scrollTop;</li><li>网页被卷去的左：document.body.scrollLeft;</li><li>网页正文部分上：window.screenTop;</li><li>网页正文部分左：window.screenLeft;</li><li>屏幕分辨率的高：window.screen.height;</li><li>屏幕分辨率的宽：window.screen.width;</li><li>屏幕可用工作区高度：window.screen.availHeight;</li><li>屏幕可用工作区宽度：window.screen.availWidth;</li></ul><blockquote><p><strong>scrollWidth</strong> 是对象的实际内容的宽，不包边线宽度，会随对象中内容的多少改变（内容多了可能会改变对象的实际宽度）<br><strong>clientWidth</strong> 是对象可见的宽度，不包滚动条等边线，会随窗口的显示大小改变。<br><strong>offsetWidth</strong> 是对象的可见宽度，包滚动条等边线，会随窗口的显示大小改变。</p></blockquote><h2 id="htmlcollection-和-nodelist" tabindex="-1">HTMLCollection 和 NodeList <a class="header-anchor" href="#htmlcollection-和-nodelist" aria-label="Permalink to &quot;HTMLCollection 和 NodeList&quot;">​</a></h2><h3 id="nodelist-类型" tabindex="-1">NodeList 类型 <a class="header-anchor" href="#nodelist-类型" aria-label="Permalink to &quot;NodeList 类型&quot;">​</a></h3><p>NodeList 类型是一组节点的集合，通常由查询 DOM 树返回。它是一个类数组对象，它的每个元素都是一个 <code>Node</code> 类型的节点。<code>NodeList</code> 类型是<strong>只读</strong>的，<strong>不能</strong>直接修改其中的元素。</p><h3 id="htmlcollection-类型" tabindex="-1">HTMLCollection 类型 <a class="header-anchor" href="#htmlcollection-类型" aria-label="Permalink to &quot;HTMLCollection 类型&quot;">​</a></h3><p>HTMLCollection 类型是一组元素节点的集合，通常由查询 DOM 树返回。它是一个类数组对象，它的每个元素都是一个 Element 类型的元素节点。HTMLCollection 类型也是只读的，不能直接修改其中的元素。</p><h3 id="如何获取" tabindex="-1">如何获取 <a class="header-anchor" href="#如何获取" aria-label="Permalink to &quot;如何获取&quot;">​</a></h3><h4 id="htmlcollection" tabindex="-1"><em><strong>HTMLCollection</strong></em> <a class="header-anchor" href="#htmlcollection" aria-label="Permalink to &quot;***HTMLCollection***&quot;">​</a></h4><ul><li><code>document.getElementsByTagName</code></li><li><code>document.getElementsByClassName</code></li><li><code>HTMLElement.children</code></li><li><code>document.forms</code></li><li><code>document.images</code></li></ul><h4 id="nodelist" tabindex="-1"><em><strong>NodeList</strong></em>: <a class="header-anchor" href="#nodelist" aria-label="Permalink to &quot;***NodeList***:&quot;">​</a></h4><ul><li><code>document.getElementsByName</code></li><li><code>document.querySelectorAll</code></li><li><code>HTMLElement.childNodes</code></li></ul><blockquote><p>最重要的区别是，<strong>HTMLCollection</strong> 仅包含 tags(以及id/name分别标记的) 元素， 而 <strong>NodeList</strong> 包含所有的节点。</p></blockquote><p>差异：</p><ul><li><p><code>NodeList</code> 类型和 <code>HTMLCollection</code> 类型都是只读的，不能直接修改其中的元素。但 <code>NodeList</code> 类型通常是动态的，即当 <strong>DOM 树</strong>发生变化时，<code>NodeList</code> 对象会自动更新。而 <code>HTMLCollection</code> 类型通常是静态的，即它们只包含文档加载时存在的元素节点，不会自动更新。</p></li><li><p><code>HTMLCollection</code> 元素可以通过 <code>name</code>，<code>id</code> 或 <code>index</code> 索引来获取。<code>NodeList</code> 只能通过 <code>index</code> 索引来获取。</p></li><li><p><code>NodeList</code> 类型和 <code>HTMLCollection</code> 类型都具有一些相似的属性和方法，例如 <code>length</code>、<code>item()</code> 和 <code>[index]</code>。但 <code>HTMLCollection</code> 类型还具有一个特有的方法 <code>namedItem()</code>，它可以根据元素的名称或 ID 返回元素节点。</p></li><li><p><code>HTMLCollection</code> 和 <code>NodeList</code> 本身无法使用数组的方法，都是类数组，<code>NodeList</code> 可以直接使用 <code>forEach()</code>方法</p></li></ul><hr><p>参考blog</p><ul><li><a href="https://www.cnblogs.com/jaycethanks/p/17125951.html" target="_blank" rel="noreferrer">HTMLCollection 和 Nodelist 的异同</a></li></ul>`,24),n=[i];function d(a,s,r,h,m,p){return o(),t("div",null,n)}const f=e(c,[["render",d]]);export{g as __pageData,f as default};
