import{_ as s,c as a,o as n,e as l}from"./app.5c26ba82.js";const d=JSON.parse('{"title":"Git连接两个远程仓库","description":"","frontmatter":{},"headers":[{"level":2,"title":"添加远程仓库","slug":"添加远程仓库","link":"#添加远程仓库","children":[{"level":3,"title":"连接两个远程仓库","slug":"连接两个远程仓库","link":"#连接两个远程仓库","children":[]},{"level":3,"title":"修改远程仓库地址","slug":"修改远程仓库地址","link":"#修改远程仓库地址","children":[]}]},{"level":2,"title":"查看某个远程仓库","slug":"查看某个远程仓库","link":"#查看某个远程仓库","children":[]},{"level":2,"title":"推送到远程仓库","slug":"推送到远程仓库","link":"#推送到远程仓库","children":[]},{"level":2,"title":"远程仓库的重命名与移除","slug":"远程仓库的重命名与移除","link":"#远程仓库的重命名与移除","children":[]}],"relativePath":"files/diary/git/Git连接远程仓库.md","lastUpdated":1680259866000}'),o={name:"files/diary/git/Git连接远程仓库.md"},e=l(`<h1 id="git连接两个远程仓库" tabindex="-1">Git连接两个远程仓库 <a class="header-anchor" href="#git连接两个远程仓库" aria-hidden="true">#</a></h1><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-t </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">&gt;]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-m </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">master</span><span style="color:#89DDFF;">&gt;]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-f</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">--</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">no-</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">tags</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">--mirror</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">(fetch</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">push)</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">UR</span><span style="color:#A6ACCD;">L</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="添加远程仓库" tabindex="-1">添加远程仓库 <a class="header-anchor" href="#添加远程仓库" aria-hidden="true">#</a></h2><p>运行 <code>git remote add &lt;shortname&gt; &lt;url&gt;</code> 添加一个新的远程 Git 仓库，同时指定一个方便使用的简写：</p><ol><li><p>如果当前项目是从远程仓库 <strong>clone</strong> 而来的，远程仓库默认为 <strong>origin</strong>。</p></li><li><p>如果是本地 <strong>git init</strong> 新建的本地仓库</p></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">远程仓库地址</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">连接远程仓库，其中github是自定义的远程仓库的名称</span></span>
<span class="line"></span></code></pre></div><h3 id="连接两个远程仓库" tabindex="-1">连接两个远程仓库 <a class="header-anchor" href="#连接两个远程仓库" aria-hidden="true">#</a></h3><h3 id="修改远程仓库地址" tabindex="-1">修改远程仓库地址 <a class="header-anchor" href="#修改远程仓库地址" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set-url</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">远程仓库地址</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">修改origin连接的远程仓库地址</span></span>
<span class="line"></span></code></pre></div><h2 id="查看某个远程仓库" tabindex="-1">查看某个远程仓库 <a class="header-anchor" href="#查看某个远程仓库" aria-hidden="true">#</a></h2><p>如果想要查看某一个远程仓库的更多信息，可以使用 <code>git remote show &lt;remote&gt;</code> 命令。 如果想以一个特定的缩写名运行这个命令，例如 <strong>origin</strong>，会得到像下面类似的信息：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span></span>
<span class="line"></span></code></pre></div><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> remote origin</span></span>
<span class="line"><span style="color:#A6ACCD;">  Fetch URL: https:</span><span style="color:#89DDFF;">//</span><span style="color:#82AAFF;">github.com</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">schacon</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">ticgit</span></span>
<span class="line"><span style="color:#A6ACCD;">  Push  URL: https:</span><span style="color:#89DDFF;">//</span><span style="color:#82AAFF;">github.com</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">schacon</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">ticgit</span></span>
<span class="line"><span style="color:#A6ACCD;">  HEAD branch: master</span></span>
<span class="line"><span style="color:#A6ACCD;">  Remote branches:</span></span>
<span class="line"><span style="color:#A6ACCD;">    master                               tracked</span></span>
<span class="line"><span style="color:#A6ACCD;">    dev</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">branch                           tracked</span></span>
<span class="line"><span style="color:#A6ACCD;">  Local branch configured </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git pull</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    master merges with remote master</span></span>
<span class="line"><span style="color:#A6ACCD;">  Local ref configured </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git push</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    master pushes to master </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">up to date</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="推送到远程仓库" tabindex="-1">推送到远程仓库 <a class="header-anchor" href="#推送到远程仓库" aria-hidden="true">#</a></h2><p>命令 <code>git push &lt;remote&gt; &lt;branch&gt;</code>。 当你想要将 <strong>master</strong> 分支推送到 <strong>origin</strong> 服务器时（再次说明，克隆时通常会自动帮你设置好那两个名字）</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span></code></pre></div><h2 id="远程仓库的重命名与移除" tabindex="-1">远程仓库的重命名与移除 <a class="header-anchor" href="#远程仓库的重命名与移除" aria-hidden="true">#</a></h2><p>你可以运行 <code>git remote rename</code> 来修改一个远程仓库的简写名。 例如，想要将 <strong>github</strong> 重命名为 <strong>paul</strong>，可以用 <code>git remote rename</code> 这样做：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rename</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">paul</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span></span>
<span class="line"></span></code></pre></div><p>值得注意的是这同样也会修改你所有远程跟踪的分支名字。 那些过去引用 <strong>github/master</strong> 的现在会引用 <strong>paul/master</strong>。</p><p>如果因为一些原因想要移除一个远程仓库——你已经从服务器上搬走了或不再想使用某一个特定的镜像了， 又或者某一个贡献者不再贡献了——可以使用 <code>git remote remove</code> 或 <code>git remote rm</code> ：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">paul</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span></span>
<span class="line"></span></code></pre></div><p>一旦你使用这种方式删除了一个远程仓库，那么所有和这个远程仓库相关的远程跟踪分支以及配置信息也会一起被删除</p><hr><p><a href="https://komodor.com/learn/how-to-fix-fatal-refusing-to-merge-unrelated-histories-error/" target="_blank" rel="noreferrer">How to resolve ‘fatal: refusing to merge unrelated histories’</a></p>`,25),p=[e];function t(r,c,i,C,D,y){return n(),a("div",null,p)}const h=s(o,[["render",t]]);export{d as __pageData,h as default};
