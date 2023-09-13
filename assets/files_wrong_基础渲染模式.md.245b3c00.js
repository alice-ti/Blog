import{_ as e,o as t,c as a,O as r}from"./chunks/framework.999b5480.js";const u=JSON.parse('{"title":"前端基础渲染模式","description":"","frontmatter":{},"headers":[],"relativePath":"files/wrong/基础渲染模式.md","filePath":"files/wrong/基础渲染模式.md","lastUpdated":1694613449000}'),s={name:"files/wrong/基础渲染模式.md"},o=r('<h1 id="前端基础渲染模式" tabindex="-1">前端基础渲染模式 <a class="header-anchor" href="#前端基础渲染模式" aria-label="Permalink to &quot;前端基础渲染模式&quot;">​</a></h1><ul><li>Client-Side Rendering 客户端呈现</li><li>Server-Side Rendering 服务器端呈现</li><li>Static-Site Generation 静态站点生成</li><li>Incremental Static Regeneration 增量静态再生</li></ul><h2 id="客户端渲染-csr-client-side-rendering" tabindex="-1">客户端渲染 CSR(Client-Side Rendering) <a class="header-anchor" href="#客户端渲染-csr-client-side-rendering" aria-label="Permalink to &quot;客户端渲染 CSR(Client-Side Rendering)&quot;">​</a></h2><p>客户端渲染就是渲染过程在客户端进行，服务器直接转发静态 <strong>html</strong> 资源。</p><p><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0z8cpipm5vsjlj11s6rz.png" alt="CSR"></p><p>常见的形式就是：</p><p>Web浏览器最初将加载一个空的HTML文件。之后加载的 <strong>Javascript</strong> 和样式负责在Web浏览器中呈现完整的用户友好页面。</p><blockquote><p>打包的时候生成只有 <strong>Css</strong>、<strong>Javascript</strong> 等外链标签的空白页面。客户端在请求时，服务端不做任何处理，直接以原文件的形式返回给客户端客户端，客户端获取到页面后，在加载完 <strong>Javascript</strong> 后才通过 <strong>Javascript</strong> 来渲染页面内容。</p></blockquote><h3 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h3><p><code>Pros</code></p><ul><li>服务器压力小，只用进行转发较小的静态页面</li><li>性能优越！与需要刷新或重新呈现整个页面的传统 HTML 页面不同，客户端呈现模拟不同的页面，但将它们加载到单个页面上。这减轻了内存和处理能力的压力，从而比服务器端渲染更快地获得结果。</li><li>非常适合单页应用程序。没有其他模型支持 SPA，这允许我们在应用程序中重用 UI 组件，而无需从服务器再次请求它们。这与 CSR 的快速性和高性能性有关。</li></ul><p><code>Cons</code></p><ul><li><p>不利于 <strong>SEO</strong>：网络爬虫可能看不到完整的程序源码，获取不到页面关键信息。不过现在有的搜索引擎也可以了。</p></li><li><p>首屏渲染慢：渲染前需要下载一堆 <strong>Javascript</strong> 和 <strong>Css</strong> 等，而且很多并不是首页需要的 <strong>Javascript</strong> 和 <strong>Css</strong>，不过按需加载也可以加快首屏加载，下载 <strong>Javascript</strong> 和解析 <strong>Javascript</strong> 的时间成本都不太低。</p></li><li><p><strong>JavaScript</strong> 捆绑包可能非常大，因此特别是在连接速度较慢的情况下，将所有这些代码下载到客户端可能需要一些时间，这再次使页面的初始加载速度低于理想速度</p></li></ul><h2 id="服务端渲染-ssr-server-side-rendering" tabindex="-1">服务端渲染 SSR(Server-Side Rendering) <a class="header-anchor" href="#服务端渲染-ssr-server-side-rendering" aria-label="Permalink to &quot;服务端渲染 SSR(Server-Side Rendering)&quot;">​</a></h2><p><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/677s8w25jofc5g4xbuck.png" alt="SSR"></p><ul><li><p>: ） 客户端通过 <strong>URL</strong> 请求页面。</p></li><li><p>: ） 服务器接收请求并运行附加的 <strong>Javascript</strong>，构建自己的 <strong>DOM</strong> 元素。</p></li><li><p>: ） 服务器从 <strong>API</strong> 请求所需的数据，并将该数据作为 props 提供给 React 组件。</p></li><li><p>: ） 服务器构建 <strong>HTML</strong> 并将完成的页面作为响应发送给客户端。</p></li></ul><p>与 CSR 不同，每个页面都会向App Server发起请求，在该请求中，它会动态呈现并为该页面提供完整的HTML。由于每次用户请求时它都会请求并呈现页面，因此页面服务时间不仅仅是 CSR 应用程序。</p><h3 id="summary-1" tabindex="-1">Summary <a class="header-anchor" href="#summary-1" aria-label="Permalink to &quot;Summary&quot;">​</a></h3><p><code>Pros</code></p><ol><li>这是即时的！当客户端收到其第一页时，数据已经可用。这是<strong>较慢连接</strong>的理想选择。</li><li>没有客户端获取！数据已经由服务器检索和实现，因此客户端不需要自己发出任何HTTP请求。</li><li>非常适合搜索引擎优化！由于在请求页面时，所有元数据都已呈现为HTML，因此网络爬虫将看到来自应用程序的所有数据，这对于SEO可见性来说是理想的。</li></ol><p><code>Cons</code></p><ol><li>页面过渡缓慢。基本上会呈现两次应用程序，一次在服务器上，一次在客户端上，因此，特别是如果你的应用程序非常大，这可能会影响页面之间的加载时间。</li><li>延迟。由于服务器正在执行渲染工作，如果有许多用户同时访问应用程序，则他们可能会在加载应用程序时遇到延迟。</li><li>用户界面兼容性。某些 UI 组件可能严重依赖于窗口对象，当服务器呈现页面时，窗口对象基本上不存在。这可能会导致某些库出现一些兼容性问题。</li></ol><h3 id="同构" tabindex="-1">同构 <a class="header-anchor" href="#同构" aria-label="Permalink to &quot;同构&quot;">​</a></h3><h4 id="什么是同构" tabindex="-1">什么是同构 ? <a class="header-anchor" href="#什么是同构" aria-label="Permalink to &quot;什么是同构 ?&quot;">​</a></h4><p>同构是指写一份代码但可同时在浏览器和服务器中运行的应用。为了同时拥有 <strong>SSR</strong> 和 <strong>CSR</strong> 的特点，当前流行的方案就是 <strong>SSR + CSR</strong> 同构，比如现在比较流行的的 <strong>Next.js</strong>。</p><p>而同构渲染也就是指：在服务端先进行渲染一次（SSR，组装页面 html 内容），客户端拿到代码后，再进行渲染一次（CSH（client-side hydration），也就是 <code>hydrate</code>，主要对 html 进行<strong>事件绑定</strong>和内容校验，如果 <code>hydrate</code> 发现内容不一致的话，会在开发环境提示警告），后续页面的所有操作和渲染行为都和 <strong>CSR</strong> 一致（didMount 后的更新页面内容都属于正常的 <strong>CSR</strong> 了）。</p><h4 id="同构理解" tabindex="-1">同构理解 <a class="header-anchor" href="#同构理解" aria-label="Permalink to &quot;同构理解&quot;">​</a></h4><p>同构应用运行原理的核心在于虚拟 DOM，虚拟 DOM 的优点在于：</p><ol><li>因为操作 DOM 树是高耗时的操作，尽量减少 DOM 树操作能优化网页性能。而 DOM Diff 算法能找出 2 个不同 Object 的最小差异，得出最小 DOM 操作;</li><li>虚拟 DOM 的在渲染的时候不仅仅可以通过操作 DOM 树来表示结果，也能有其他的表示方法。例如虚拟 DOM 渲染成字符串（服务器渲染）等。</li></ol><p>构建同构应用的最终目的是从一份项目源码中构建出 2 份 JavaScript 代码。一份用于在 node 环境中运行渲染出 HTML。其中用于在 node 环境中运行的 JavaScript 代码需要注意：</p><ol><li>不能包含浏览器环境提供的 API；</li><li>不建议包含 <strong>CSS</strong> 代码，因为服务端渲染的目的是渲染 html 内容， 渲染出 <strong>CSS</strong> 代码会增加额外的计算量，影响服务端渲染，因此建议 <strong>CSS</strong> 需要用外联方式；</li><li>不能像用于浏览器环境的输出代码那样把 <strong>node_modules</strong> 里的第三方模块和 <strong>nodejs</strong> 原生模块打包进去，而是需要分开进行打包，客户端打包一份和服务端打包一份，或者打包的时候区分各自运行的文件。</li></ol><h2 id="静态站点生成-ssg-static-site-generation" tabindex="-1">静态站点生成 SSG(Static-Site Generation) <a class="header-anchor" href="#静态站点生成-ssg-static-site-generation" aria-label="Permalink to &quot;静态站点生成 SSG(Static-Site Generation)&quot;">​</a></h2><p><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qrb8xfv81llmpghlpma9.png" alt="SSG"></p><p>如果您想构建一个包含大量静态内容的 Web 应用程序（如博客），则此技术将派上用场。</p><p>一个缺点是内容可能已过时，每次更改内容时都需要生成和部署应用程序。</p><ul><li><p>客户端向服务器发出请求。</p></li><li><p>服务器收到请求，并且已经为静态数据构建了所需的 HTML 页面。</p></li><li><p>服务器根据请求的 URL 以已完成的预构建页面进行响应。</p></li></ul><h3 id="summary-2" tabindex="-1">Summary <a class="header-anchor" href="#summary-2" aria-label="Permalink to &quot;Summary&quot;">​</a></h3><p><code>Pros</code></p><ul><li>就像服务器端渲染一样，静态站点生成是立即可用的，不需要从 API 获取额外的数据。</li><li>非常适合搜索引擎优化！由于 HTML 是在发送给客户端之前构建的，因此 SEO 可见性非常适合 SSG。</li><li>速度非常快！静态页面的服务时间非常快，可与我们在客户端呈现中发送的空白页面的自动售货时间相媲美。</li><li>无服务器！提供静态页面不需要服务器来监视，因此您可以充分利用旨在提供静态页面的服务。</li></ul><p><code>Cons</code></p><ul><li>如果您的网站很大且复杂，则构建时间可能会很长。</li><li>数据仅在构建时提取一次，因此无法动态重新提取和刷新数据。</li><li>可能会遇到在服务器端生成中遇到的相同 UI 兼容性问题，因为窗口对象在构建时不可用。</li></ul><h2 id="增量静态再生-isr-incremental-static-regeneration" tabindex="-1">增量静态再生 ISR(Incremental Static Regeneration) <a class="header-anchor" href="#增量静态再生-isr-incremental-static-regeneration" aria-label="Permalink to &quot;增量静态再生 ISR(Incremental Static Regeneration)&quot;">​</a></h2><p>ISR 是 SSG 的下一个改进，它定期构建和重新验证新页面，以便内容永远不会过时。</p><p><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2e7vk7cafaacak5glzf7.png" alt="ISR"></p><h2 id="summary-3" tabindex="-1">SUMMARY <a class="header-anchor" href="#summary-3" aria-label="Permalink to &quot;SUMMARY&quot;">​</a></h2><p><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8onh7r5sxmss9f87k726.png" alt="SUMMARY"></p><ul><li><strong>Build time</strong> - Less value the better. 构建时间 - 价值越低越好。</li><li><strong>Suitable for Dynamic Content</strong> - If this value is high, that technique is more suitable for applications with lot of dynamic content. 适用于动态内容 - 如果此值较高，则该技术更适合具有大量动态内容的应用程序。</li><li><strong>Search Engine Optimization</strong> - Most cases, it is best to have a good value for SEO. 搜索引擎优化 - 在大多数情况下，最好对SEO有一个很好的价值。</li><li><strong>Page Serve/Render Time</strong> - How long it takes to render the full page in the web browser. Less value the better. 页面服务/呈现时间 - 在 Web 浏览器中呈现整个页面所需的时间。价值越低越好。</li><li><strong>Most Recent Content</strong> - Indication that it always delivers the latest content. More value the better. 最新内容 - 指示它始终提供最新内容。价值越高越好。</li><li><strong>Static Server / App Server</strong> - Does this technique need to have a static server or an app server. Normally static servers consume lot less resources than the app servers. 静态服务器/应用服务器 - 此技术是否需要具有静态服务器或应用服务器。通常，静态服务器消耗的资源比应用服务器少得多。</li></ul><hr><p><a href="https://dev.to/pahanperera/visual-explanation-and-comparison-of-csr-ssr-ssg-and-isr-34ea" target="_blank" rel="noreferrer">Visual Explanation and Comparison of CSR, SSR, SSG and ISR</a></p>',49),i=[o];function n(l,p,c,d,g,h){return t(),a("div",null,i)}const m=e(s,[["render",n]]);export{u as __pageData,m as default};
