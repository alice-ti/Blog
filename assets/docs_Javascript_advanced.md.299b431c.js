import{_ as a,c as e,o as t,d}from"./app.a9493200.js";const N=JSON.parse(`{"title":"","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":" ","6":"J","7":"a","8":"v","9":"a","10":"s","11":"c","12":"r","13":"i","14":"p","15":"t","16":" ","17":"\u8FDB","18":"\u9636"},"headers":[{"level":2,"title":"['1', '2', '3'].map(parseInt) what & why ?","slug":"_1-2-3-map-parseint-what-why","link":"#_1-2-3-map-parseint-what-why","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"relativePath":"docs/Javascript/advanced.md"}`),c={name:"docs/Javascript/advanced.md"},i=d('<h2 id="_1-2-3-map-parseint-what-why" tabindex="-1">[&#39;1&#39;, &#39;2&#39;, &#39;3&#39;].map(parseInt) what &amp; why ? <a class="header-anchor" href="#_1-2-3-map-parseint-what-why" aria-hidden="true">#</a></h2><p>\u5148\u8BF4\u7B54\u6848\uFF1A <code>[1, NaN, NaN]</code></p><ol><li><p>\u9996\u5148\uFF0C <code>map()</code> \u7684 <code>callback</code> \u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF0C<code>currentValue</code> \u5F53\u524D\u503C\uFF0C <code>index</code> \u7D22\u5F15\uFF0C \u4EE5\u53CA <code>array</code> \u6570\u7EC4\u672C\u8EAB\u3002</p></li><li><p><code>parseInt(string, radix)</code> \u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C<code>radix</code> \u8868\u793A\u4E3A\u89E3\u6790\u65F6\u7684\u57FA\u6570\u3002</p></li><li><p>\u6240\u4EE5\uFF0C\u4E09\u6B21\u8C03\u7528\u5206\u522B\u4E3A\uFF1A</p></li></ol><ul><li>parseInt(&#39;1&#39;, 0) // radix \u4E3A 0 \u65F6\uFF0C\u4E14 string \u53C2\u6570\u4E0D\u4EE5\u201C0x\u201D\u548C\u201C0\u201D\u5F00\u5934\u65F6\uFF0C\u6309\u7167 10 \u4E3A\u57FA\u6570\u5904\u7406\u3002\u8FD9\u4E2A\u65F6\u5019\u8FD4\u56DE 1</li><li>parseInt(&#39;2&#39;, 1) // \u57FA\u6570\u4E3A 1\uFF081 \u8FDB\u5236\uFF09\u8868\u793A\u7684\u6570\u4E2D\uFF0C\u6700\u5927\u503C\u5C0F\u4E8E 2\uFF0C\u6240\u4EE5\u65E0\u6CD5\u89E3\u6790\uFF0C\u8FD4\u56DE NaN</li><li>parseInt(&#39;3&#39;, 2) //\u57FA\u6570\u4E3A 2\uFF082 \u8FDB\u5236\uFF09\u8868\u793A\u7684\u6570\u4E2D\uFF0C\u6700\u5927\u503C\u5C0F\u4E8E 3\uFF0C\u6240\u4EE5\u65E0\u6CD5\u89E3\u6790\uFF0C\u8FD4\u56DE NaN</li></ul><ol start="4"><li>\u6240\u4EE5\uFF0C\u6700\u7EC8\u8FD4\u56DE <code>[1, NaN, NaN]</code></li></ol><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>',6),r=[i];function o(l,n,s,p,h,_){return t(),e("div",null,r)}const u=a(c,[["render",o]]);export{N as __pageData,u as default};
