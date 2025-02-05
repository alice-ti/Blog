import{_ as i,c as a,o as t,af as l}from"./chunks/framework.Cj92BNWl.js";const c=JSON.parse('{"title":"pxtorem","description":"","frontmatter":{},"headers":[],"relativePath":"files/diary/project/13-pxtorem.md","filePath":"files/diary/project/13-pxtorem.md","lastUpdated":1738744669000}'),n={name:"files/diary/project/13-pxtorem.md"};function e(h,s,p,k,r,o){return t(),a("div",null,s[0]||(s[0]=[l(`<h1 id="pxtorem" tabindex="-1">pxtorem <a class="header-anchor" href="#pxtorem" aria-label="Permalink to &quot;pxtorem&quot;">​</a></h1><h2 id="postcss-pxtorem" tabindex="-1">postcss-pxtorem <a class="header-anchor" href="#postcss-pxtorem" aria-label="Permalink to &quot;postcss-pxtorem&quot;">​</a></h2><p>是一个PostCSS插件，它会将px单位转换成rem单位。首先，你需要在你的项目中安装这个插件以及PostCSS：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postcss</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postcss-pxtorem</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span></code></pre></div><p>然后，你可以在项目的根目录下创建或修改<code>postcss.config.js</code> 配置文件，加入 <code>postcss-pxtorem</code> 的配置：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">module.exports = {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">  plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">    tailwindcss</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果你使用Tailwind CSS，保留这行</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">    autoprefixer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 自动添加浏览器前缀，如果需要的话</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 配置postcss-pxtorem</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">    &#39;postcss-pxtorem&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">      rootValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 根据设计稿来，例如设计稿宽度为750px，则此值可以设置为75</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">      propList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">&#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 需要转换的属性列表，[&#39;*&#39;]表示所有属性</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">      unitPrecision</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 转换后的小数位数</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">      mediaQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 允许在媒体查询中转换px</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">      minPixelValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置要替换的最小像素值</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">      exclude</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">/node_modules/i</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 忽略node_modules目录下的文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="lib-flexible" tabindex="-1">lib-flexible <a class="header-anchor" href="#lib-flexible" aria-label="Permalink to &quot;lib-flexible&quot;">​</a></h2><hr><p><a href="https://juejin.cn/post/6961658865876205576" target="_blank" rel="noreferrer">lib-flexible与viewport--关于移动端适配方案的替换</a></p>`,9)]))}const E=i(n,[["render",e]]);export{c as __pageData,E as default};
