import{_ as s,c as i,o as e,af as p}from"./chunks/framework.Cj92BNWl.js";const c=JSON.parse('{"title":"支付宝常见问题汇总","description":"","frontmatter":{},"headers":[],"relativePath":"files/docs/Miniapp/01-支付宝开发常见问题汇总.md","filePath":"files/docs/Miniapp/01-支付宝开发常见问题汇总.md","lastUpdated":1738744669000}'),t={name:"files/docs/Miniapp/01-支付宝开发常见问题汇总.md"};function n(l,a,h,o,r,d){return e(),i("div",null,a[0]||(a[0]=[p(`<h1 id="支付宝常见问题汇总" tabindex="-1">支付宝常见问题汇总 <a class="header-anchor" href="#支付宝常见问题汇总" aria-label="Permalink to &quot;支付宝常见问题汇总&quot;">​</a></h1><ul><li>修改导航栏颜色</li><li>支付宝小程序 Scheme 链接</li><li>支付宝小程序跳转三方 H5</li></ul><h2 id="修改导航栏颜色" tabindex="-1">修改导航栏颜色 <a class="header-anchor" href="#修改导航栏颜色" aria-label="Permalink to &quot;修改导航栏颜色&quot;">​</a></h2><p>两种方式修改：</p><ol><li><p>修改导航栏背景颜色，文字颜色是自适应的。比如黑色背景，显示的就是白色文字和返回箭头</p></li><li><p>使用 <strong>api</strong> 修改文字颜色：<code>my.setNavigationBar({ frontColor: &#39;#FFFFFF&#39;, backgroundColor: &#39;#000000&#39; })</code></p><blockquote><p><strong>backgroundColor</strong> 必填，否则无效</p></blockquote></li></ol><h2 id="支付宝小程序-scheme-链接" tabindex="-1"><a href="https://opendocs.alipay.com/support/01rb18" target="_blank" rel="noreferrer">支付宝小程序 Scheme 链接</a> <a class="header-anchor" href="#支付宝小程序-scheme-链接" aria-label="Permalink to &quot;[支付宝小程序 Scheme 链接](https://opendocs.alipay.com/support/01rb18)&quot;">​</a></h2><blockquote><p><a href="https://linksprod.alipay.com/tourist/room/5fec1e8f69565405716ba28a/popular-tools/link-generator/alipay-applet/" target="_blank" rel="noreferrer">生成 <strong>Scheme</strong> 链接工具</a></p></blockquote><p>支付宝小程序不限制来自 H5 页面或者其它 App 的跳转，只要 H5 页面或者其它 App 支持外跳小程序即可跳转，本文介绍通过 scheme 链接方式实现跳转。 如需跳转到未上线/体验版小程序，可查看 <a href="https://opendocs.alipay.com/mini/ide/integration-testing" target="_blank" rel="noreferrer">联调设置</a>。</p><h3 id="url-格式" tabindex="-1">URL 格式 <a class="header-anchor" href="#url-格式" aria-label="Permalink to &quot;URL 格式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>alipays://platformapi/startapp?appId=[appId]&amp;page=[page]&amp;query=[query]</span></span></code></pre></div><table tabindex="0"><thead><tr><th><strong>参数</strong></th><th><strong>描述</strong></th><th><strong>示例</strong></th></tr></thead><tbody><tr><td>appId</td><td>要跳转的目标小程序 APPID。</td><td>20170713077xxxxx</td></tr><tr><td>page</td><td>要跳转到目标小程序的具体 page 页面，该值等于 app.json 里面的配置值；如果不带 page 字段，默认跳转到小程序首页。 路径中可以在 ？后面附加跳转后的页面参数。页面参数必须进行 UrlEncode 编码，否则只能获取到第一个页面参数。</td><td>UrlEncode 编码前：pages/index/index?key1=1&amp;key2=2 UrlEncode 编码后：pages/index/index?key1%3D1%26key2%3D2</td></tr><tr><td>query</td><td>表示从外部 App 携带的参数透传到目标小程序，如果不需要携带参数给小程序，可以不带该参数。 query：启动参数，内容按照格式为参数名=参数值&amp;参数名=参数值 <strong>注意：</strong> query 携带的启动参数必须进行 UrlEncode 编码否则只能获取到第一个参数。</td><td>UrlEncode 编码前：key1=value1&amp;key2=value2 UrlEncode 编码后：key1%3Dvalue1%26key2%3Dvalue2</td></tr></tbody></table><h3 id="scheme转换成https链接唤起小程序" tabindex="-1">scheme转换成https链接唤起小程序 <a class="header-anchor" href="#scheme转换成https链接唤起小程序" aria-label="Permalink to &quot;scheme转换成https链接唤起小程序&quot;">​</a></h3><p>需要把 scheme 当作参数进行 <strong>UrlEncode</strong> 编码后，拼接在 <code>https://ds.alipay.com/?scheme=</code> 后。</p><p><strong>UrlEncode</strong> 编码前：</p><p><code>alipays://platformapi/startapp?appId=202100216xxxxxxx&amp;page=pages/index/index&amp;query=</code><strong><code>key1=value1&amp;key2=value2</code></strong></p><p><strong>UrlEncode</strong> 编码后：</p><p><code>alipays://platformapi/startapp?appId=202100216xxxxxxx&amp;page=pages/index/index&amp;query=</code><strong><code>key1%3Dvalue1%26key2%3Dvalue2</code></strong></p><p><strong>以下是 JS 方式进行拼接示例：</strong></p><p>使用 encodeURIComponent 函数先对query携带的启动参数进行 <strong>UrlEncode</strong> 编码，再使用 encodeURIComponent 对整体 scheme 链接进行 <strong>UrlEncode</strong> 编码。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.location.href=\`https://ds.alipay.com/?scheme=\` </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    + encodeURIComponent(\`alipays://platformapi/startapp?appId=202100216xxxxxxx&amp;page=pages/index/index&amp;query=\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encodeURIComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key1=value1&amp;key2=value2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)}\`) </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><blockquote><p>商家可以通过 H5/Android/iOS 应用使用 <code>scheme</code> 链接来跳转到支付宝小程序。</p></blockquote><h3 id="h5-跳转小程序" tabindex="-1">H5 跳转小程序 <a class="header-anchor" href="#h5-跳转小程序" aria-label="Permalink to &quot;H5 跳转小程序&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.location.href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alipays://platformapi/startapp?appId=20170713077xxxxx&amp;page=x/yz&amp;query=xx%3dxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="前台-后台运行" tabindex="-1">前台/后台运行 <a class="header-anchor" href="#前台-后台运行" aria-label="Permalink to &quot;前台/后台运行&quot;">​</a></h3><ul><li><p><strong>前台运行：</strong> 当用户首次打开小程序时候，小程序会处于前台运行状态。</p></li><li><p><strong>后台运行：</strong> 用户点击右上角关闭按钮关闭小程序，或者按下设备 Home 键离开支付宝客户端时，小程序并不会直接销毁，而是进入后台运行状态。只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁。</p></li><li><p><strong>从后台运行切换为前台运行</strong>： 当未被系统销毁的小程序再度被打开或者激活时，会从后台运行切换为前台运行。</p></li></ul><h3 id="应用逻辑" tabindex="-1">应用逻辑 <a class="header-anchor" href="#应用逻辑" aria-label="Permalink to &quot;应用逻辑&quot;">​</a></h3><p>每次通过 scheme 调用，前端表现是重新触发 onLaunch 和 onShow，都会传参给 app.js 的 onLaunch 和 onShow，基础页面会重新触发 onLoad 和 onShow 方法。 在<strong>保活期间（5分钟）</strong>，例如锁屏之后，会重新触发 onShow 方法，但是却无法获取参数，即传参 scheme 只会在调用的时候触发一次，再次启动只是触发 onShow 不会传参。只能前端在 onShow 里做相应的业务逻辑。</p><h3 id="页面的逻辑" tabindex="-1">页面的逻辑 <a class="header-anchor" href="#页面的逻辑" aria-label="Permalink to &quot;页面的逻辑&quot;">​</a></h3><p>当小程序用 scheme 从后台唤起的时候，其实相当于重新被打开了onLoad，还有 onShow 都会被触发。 在保活期间（5分钟）被重新唤起的时候，就只会触发 onShow 。</p><h2 id="支付宝小程序跳转三方h5" tabindex="-1">支付宝小程序跳转三方h5 <a class="header-anchor" href="#支付宝小程序跳转三方h5" aria-label="Permalink to &quot;支付宝小程序跳转三方h5&quot;">​</a></h2><p>基础API跳转</p><h4 id="web-view" tabindex="-1">web-view <a class="header-anchor" href="#web-view" aria-label="Permalink to &quot;web-view&quot;">​</a></h4><p>支付宝小程序想要跳转H5页面，之前只用过 web-view，内嵌H5，这种方式需要配置域名白名单，并且在外链域名的根目录放置校验文件，H5不是自有页面的话，就不能这样去实现。</p><div class="language-wiki vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">wiki</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">web-view</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://render.alipay.com/p/s/web-view/index&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onmessage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">web-view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="my-ap-openurl" tabindex="-1">my.ap.openURL <a class="header-anchor" href="#my-ap-openurl" aria-label="Permalink to &quot;my.ap.openURL&quot;">​</a></h4><p>相对于 <code>web-view</code>，还有一种跳转H5的方式， <code>my.ap.openURL</code>，不需要配置域名，但是非支付宝官网页面只有部分符合开放类目的小程序可以使用，且需要到开放平台配置 <code>openURL</code> 白名单。已知目标页面的 <code>URL</code> 或 <code>scheme</code>，可以使用 <code>my.ap.openURL</code>。 跳转到支付宝官方 H5 页面是不需要配置白名单的。</p><blockquote><ul><li><a href="https://render.alipay.com/p/" target="_blank" rel="noreferrer">https://render.alipay.com/p/</a> 开头的 URL。</li><li><a href="https://ds.alipay.com/?scheme=" target="_blank" rel="noreferrer">https://ds.alipay.com/?scheme=</a> 开头的 URL。</li></ul></blockquote><div class="language-wiki vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">wiki</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">my.ap.openURL({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 请将 url 替换为后台加白过的跳转地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  url: &#39;https://please.replace.me/page&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  success: (res) =&gt; console.log(&#39;openURL success&#39;),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fail: (err) =&gt; my.alert({ title: &#39;openURL fail: &#39; + JSON.stringify(err) })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h4 id="my-ap-navigatetoalipaypage-已不在维护" tabindex="-1"><a href="https://opendocs.alipay.com/mini/api/navigatetoalipaypage" target="_blank" rel="noreferrer">my.ap.navigateToAlipayPage</a>（已不在维护） <a class="header-anchor" href="#my-ap-navigatetoalipaypage-已不在维护" aria-label="Permalink to &quot;[my.ap.navigateToAlipayPage](https://opendocs.alipay.com/mini/api/navigatetoalipaypage)（已不在维护）&quot;">​</a></h4><p><code>my.ap.navigateToAlipayPage</code> 是用于跳转到支付宝官方业务或运营活动页面的 API。利用不需要配置白名单的域名和scheme语法可以实现跳转。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 支付宝客户端的标准scheme为：alipays://platformapi/startapp?appId=H5App自身的appId</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 但如果是某些运营页之类的单独页面，没有自己的appId，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可以使用Nebula容器的通用浏览器模式appId=20000067 来启动，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 同时将需要打开的H5页面url经过encode编码后设置到url参数内</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://www.baidu.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// https://render.alipay.com/p/ 不需要配置白名单</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 开了个后门，在不需要配置白名单的链接后面拼上自己的链接</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> link</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://render.alipay.com/p/s/i/?scheme=&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encodeURIComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;alipays://platformapi/startapp?appId=20000067&amp;url=&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encodeURIComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">my.ap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">navigateToAlipayPage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  path: link</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><a href="https://open.alipay.com/portal/forum/post/108601011" target="_blank" rel="noreferrer">修改导航栏文字颜色</a></p><p><a href="https://blog.csdn.net/stupid_muscleman/article/details/128640722" target="_blank" rel="noreferrer">支付宝小程序跳转第三方H5页面</a></p>`,43)]))}const g=s(t,[["render",n]]);export{c as __pageData,g as default};
