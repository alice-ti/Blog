import{_ as s,o as n,c as a,O as l}from"./chunks/framework.999b5480.js";const F=JSON.parse('{"title":"🍳 项目规范配置","description":"","frontmatter":{},"headers":[],"relativePath":"files/diary/standard/01-baseConfig.md","filePath":"files/diary/standard/01-baseConfig.md","lastUpdated":1720437757000}'),o={name:"files/diary/standard/01-baseConfig.md"},p=l(`<h1 id="🍳-项目规范配置" tabindex="-1">🍳 项目规范配置 <a class="header-anchor" href="#🍳-项目规范配置" aria-label="Permalink to &quot;🍳 项目规范配置&quot;">​</a></h1><p>这对团队来说特别有帮助。这会避免你和你团队成员产生额外的心智负担，一旦你接受了如何写你的代码以及如何格式化的某些约定，</p><h2 id="🧊-代码规范" tabindex="-1">🧊 代码规范 <a class="header-anchor" href="#🧊-代码规范" aria-label="Permalink to &quot;🧊 代码规范&quot;">​</a></h2><blockquote><p><strong>eslint</strong> + <strong>prettier</strong> + <strong>husky</strong> + <strong>lint-staged</strong> + <strong>commitlint</strong></p></blockquote><h2 id="🦑-eslint" tabindex="-1">🦑 eslint <a class="header-anchor" href="#🦑-eslint" aria-label="Permalink to &quot;🦑 eslint&quot;">​</a></h2><p>安装 <strong>eslint</strong> 依赖</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eslint</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--save-dev</span></span></code></pre></div><h3 id="初始化配置文件" tabindex="-1">初始化配置文件 <a class="header-anchor" href="#初始化配置文件" aria-label="Permalink to &quot;初始化配置文件&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eslint</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">How</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">would</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">you</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">like</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ESLint?</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">What</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">modules</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">does</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">project</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use?</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Which</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">framework</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">does</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">project</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use?</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Does</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">project</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TypeScript?</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Where</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">does</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">code</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run?</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">How</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">would</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">you</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">like</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">define</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">project?</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Which</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">guide</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">do</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">you</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">want</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">follow?</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">What</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">format</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">do</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">you</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">want</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">be</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in?</span></span></code></pre></div><h2 id="🦐-pritter" tabindex="-1">🦐 Pritter <a class="header-anchor" href="#🦐-pritter" aria-label="Permalink to &quot;🦐 Pritter&quot;">​</a></h2><p>安装 <strong>prettier</strong> 依赖</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prettier</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eslint-config-prettier</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eslint-plugin-prettier</span></span></code></pre></div><ul><li>eslint-config-prettier: 关闭所有不必要或可能跟 <strong>prettier</strong> 产生冲突的规则</li><li>eslint-plugin-prettier: 可以让 <strong>eslint</strong> 使用 <strong>prettier</strong> 规则进行检查</li></ul><p><strong>.eslintrc.cjs</strong> 文件中添加 <strong>extends</strong> 设置</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;extends&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">&quot;plugin:prettier/recommended&quot;</span><span style="color:#FFCB6B;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>根目录下创建 <strong>.prettierrc.cjs</strong> 文件</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;trailingComma&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">es5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;tabWidth&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;semi&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;singleQuote&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="🦞-配置-commitlint" tabindex="-1">🦞 配置 commitlint <a class="header-anchor" href="#🦞-配置-commitlint" aria-label="Permalink to &quot;🦞 配置 commitlint&quot;">​</a></h2><p>安装相关依赖</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@commitlint/cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@commitlint/config-conventional</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span></code></pre></div><h3 id="根目录创建-commitlint-config-js" tabindex="-1">根目录创建 commitlint.config.js <a class="header-anchor" href="#根目录创建-commitlint-config-js" aria-label="Permalink to &quot;根目录创建 commitlint.config.js&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">extends:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@commitlint/config-conventional</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><table><thead><tr><th style="text-align:center;">platform</th><th style="text-align:center;">value</th></tr></thead><tbody><tr><td style="text-align:center;">build</td><td style="text-align:center;">编译相关的修改，例如发布版本、对项目构建或者依赖的改动</td></tr><tr><td style="text-align:center;">ci</td><td style="text-align:center;">持续集成修改</td></tr><tr><td style="text-align:center;">docs</td><td style="text-align:center;">文档修改</td></tr><tr><td style="text-align:center;">feat</td><td style="text-align:center;">新特性、新功能</td></tr><tr><td style="text-align:center;">fix</td><td style="text-align:center;">修改</td></tr><tr><td style="text-align:center;">bugperf</td><td style="text-align:center;">优化相关，比如提升性能、体验</td></tr><tr><td style="text-align:center;">refactor</td><td style="text-align:center;">代码重构</td></tr><tr><td style="text-align:center;">revert</td><td style="text-align:center;">回滚到上一个版本</td></tr><tr><td style="text-align:center;">style</td><td style="text-align:center;">代码格式修改, 注意不是 css 修改</td></tr><tr><td style="text-align:center;">test</td><td style="text-align:center;">测试用例修改</td></tr><tr><td style="text-align:center;">chore</td><td style="text-align:center;">其他修改，比如改变构建流程、或者增加依赖库、工具等</td></tr></tbody></table><h2 id="🦀-集成-husky-与-lint-staged" tabindex="-1">🦀 集成 husky 与 lint-staged <a class="header-anchor" href="#🦀-集成-husky-与-lint-staged" aria-label="Permalink to &quot;🦀 集成 husky 与 lint-staged&quot;">​</a></h2><p>使用 <strong>mrm</strong> 集成 husky 与 lint-staged</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mrm@2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lint-staged</span></span></code></pre></div><p>执行命令之后，你就会看到你的 <strong>package.json</strong> 里多了一个 <strong>lint-staged</strong> 配置项，且根目录下多了一个 <strong>.husky</strong> 目录，里面就包含了 <strong>pre-commit</strong> 文件，文件里包含了一个最基础的命令：<strong>npx lint-staged</strong></p><hr><h2 id="npx-查找规则" tabindex="-1">npx 查找规则 <a class="header-anchor" href="#npx-查找规则" aria-label="Permalink to &quot;npx 查找规则&quot;">​</a></h2><ol><li>去 <strong>/node_modules/.bin</strong> 目录下查找是否存在对应的命令，如果没有找到则执行第 2 步；</li><li>去 <strong>$PATH</strong> 里查找是否有对应的命令，通常在这里查找的是你全局安装的命令，如果没有找到则执行第 3 步；</li><li>创建一个临时目录，下载命令对应的依赖，然后执行这个命令，完成之后就删除这个临时目录。</li></ol><p>如果期望项目里的命令在每一个 <strong>developer</strong> 那里都能有相同的表现，建议在项目内统一安装对应的 <strong>dependency</strong>。</p><hr><h2 id="附" tabindex="-1">附 <a class="header-anchor" href="#附" aria-label="Permalink to &quot;附&quot;">​</a></h2><blockquote><p>以下是个人 <strong>prettier</strong> 配置文件</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 一行最多 100 字符</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">printWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 不使用缩进符，而使用空格</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">useTabs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 使用 2 个空格缩进</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tabWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 行尾需要有分号</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">semi</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 使用单引号</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">singleQuote</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 对象的 key 仅在必要时用引号</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">quoteProps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">as-needed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// jsx 不使用单引号，而使用双引号</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">jsxSingleQuote</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 末尾不需要逗号 &#39;es5&#39;  none</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">trailingComma</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">es5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 大括号内的首尾需要空格</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">bracketSpacing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// jsx 标签的反尖括号需要换行</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">jsxBracketSameLine</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 箭头函数，只有一个参数的时候，也需要括号</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">arrowParens</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">always</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 每个文件格式化的范围是文件的全部内容</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rangeStart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rangeEnd</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">Infinity,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 不需要写文件开头的 @prettier</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">requirePragma</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 不需要自动在文件开头插入 @prettier</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">insertPragma</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 使用默认的折行标准</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">proseWrap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">preserve</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 根据显示样式决定 html 要不要折行</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">htmlWhitespaceSensitivity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 换行符使用 lf 结尾是 \\n \\r \\n\\r auto</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">endOfLine</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">auto</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,35),t=[p];function e(r,c,y,C,D,i){return n(),a("div",null,t)}const d=s(o,[["render",e]]);export{F as __pageData,d as default};