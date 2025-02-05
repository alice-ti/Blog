import{_ as i,c as a,o as t,af as h}from"./chunks/framework.Cj92BNWl.js";const g=JSON.parse('{"title":"GIT 分支","description":"","frontmatter":{},"headers":[],"relativePath":"files/diary/git/Git分支相关操作.md","filePath":"files/diary/git/Git分支相关操作.md","lastUpdated":1738744669000}'),n={name:"files/diary/git/Git分支相关操作.md"};function l(e,s,p,k,d,r){return t(),a("div",null,s[0]||(s[0]=[h(`<h1 id="git-分支" tabindex="-1">GIT 分支 <a class="header-anchor" href="#git-分支" aria-label="Permalink to &quot;GIT 分支&quot;">​</a></h1><h2 id="重命名本地分支" tabindex="-1">重命名本地分支 <a class="header-anchor" href="#重命名本地分支" aria-label="Permalink to &quot;重命名本地分支&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">使用</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">旧分支名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">新分支名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span></code></pre></div><p>这会把旧的本地分支名字修改为新的分支名字</p><h3 id="重命名远程分支" tabindex="-1">重命名远程分支 <a class="header-anchor" href="#重命名远程分支" aria-label="Permalink to &quot;重命名远程分支&quot;">​</a></h3><ul><li><p>使用<code>git push origin :&lt;旧分支名&gt;</code>将旧的远程分支删除。这里的冒号（:）表示删除分支的意思，后面跟着分支名指定要删除的分支。</p></li><li><p>使用<code>git push origin &lt;新分支名&gt;</code>将重命名后的本地分支推送到远程仓库。</p></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重命名本地分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">旧分支</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">新分支</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除远程分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">旧分支</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推送新分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">新分支</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="删除分支" tabindex="-1">删除分支 <a class="header-anchor" href="#删除分支" aria-label="Permalink to &quot;删除分支&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 删除本地分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localBranchName</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 删除远程分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --delete</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remoteBranchName</span></span></code></pre></div><h2 id="重命名本地文件件提交远程" tabindex="-1">重命名本地文件件提交远程 <a class="header-anchor" href="#重命名本地文件件提交远程" aria-label="Permalink to &quot;重命名本地文件件提交远程&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oldFolder</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TempFolder</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TempFolder</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NewFolder</span></span></code></pre></div><p>使用 <code>git mv</code> 命令重命名文件夹，使其名称临时变为完全不同的名称。然后，再将其改回到你期望的大小写格式。这样做可以让 Git 识别到这个改动。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core.ignorecase</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span></code></pre></div><p>这条命令仅对当前仓库有效。如果你想全局更改此配置，可以添加<code>--global</code>标志。</p>`,14)]))}const o=i(n,[["render",l]]);export{g as __pageData,o as default};
