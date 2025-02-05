import{_ as i,c as a,o as n,af as t}from"./chunks/framework.Cj92BNWl.js";const o=JSON.parse('{"title":"强引用与弱引用","description":"","frontmatter":{},"headers":[],"relativePath":"files/docs/JavaScript/30-强引用与弱引用.md","filePath":"files/docs/JavaScript/30-强引用与弱引用.md","lastUpdated":1738744669000}'),p={name:"files/docs/JavaScript/30-强引用与弱引用.md"};function l(h,s,e,k,r,E){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="强引用与弱引用" tabindex="-1">强引用与弱引用 <a class="header-anchor" href="#强引用与弱引用" aria-label="Permalink to &quot;强引用与弱引用&quot;">​</a></h1><h2 id="强引用" tabindex="-1">强引用 <a class="header-anchor" href="#强引用" aria-label="Permalink to &quot;强引用&quot;">​</a></h2><blockquote><p>强引用是一种防止对象被垃圾回收的引用。它将对象保留在内存中。</p></blockquote><p>在 <strong>JS</strong> 中，<strong>如果我们将一个引用通过变量或常量保存时，那么这个变量或常量就是强引用</strong>。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myMap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> my</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ljc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sex: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;男&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;info&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myMap);</span></span></code></pre></div><p><img src="https://ljcimg.oss-cn-beijing.aliyuncs.com/img/image-20210725161643051.png" alt="image-20210725161643051"></p><h2 id="弱引用" tabindex="-1">弱引用 <a class="header-anchor" href="#弱引用" aria-label="Permalink to &quot;弱引用&quot;">​</a></h2><blockquote><p>与强引用不同，弱引用不会阻止被引用的对象被垃圾回收器回收，即使它是内存中对该对象的唯一引用。</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myMap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WeakMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> my</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ljc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sex: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;男&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;info&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myMap);</span></span></code></pre></div><p><img src="https://ljcimg.oss-cn-beijing.aliyuncs.com/img/image-20210725161619701.png" alt="image-20210725161619701"></p><hr>`,11)]))}const c=i(p,[["render",l]]);export{o as __pageData,c as default};
