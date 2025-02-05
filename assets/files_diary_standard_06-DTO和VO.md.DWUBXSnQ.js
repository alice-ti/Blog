import{_ as a,c as e,o,af as r}from"./chunks/framework.Cj92BNWl.js";const D=JSON.parse('{"title":"VO、DTO、BO、PO、DO区别","description":"","frontmatter":{},"headers":[],"relativePath":"files/diary/standard/06-DTO和VO.md","filePath":"files/diary/standard/06-DTO和VO.md","lastUpdated":1738744669000}'),s={name:"files/diary/standard/06-DTO和VO.md"};function n(O,t,i,l,d,c){return o(),e("div",null,t[0]||(t[0]=[r('<h1 id="vo、dto、bo、po、do区别" tabindex="-1">VO、DTO、BO、PO、DO区别 <a class="header-anchor" href="#vo、dto、bo、po、do区别" aria-label="Permalink to &quot;VO、DTO、BO、PO、DO区别&quot;">​</a></h1><ul><li><strong>VO：</strong>（View Object）视图对象，一般位于Controller层，用于展示视图。</li><li><strong>DTO：</strong>（Data Transfer Object）数据传输对象， 即RPC 接口请求或传输出去的对象，用于展示层与服务层之间的数据传输对象。</li><li><strong>BO：</strong>（Business Object）业务层对象，一般位于Service层，它与 DO 会有一定的属性差别。</li><li><strong>PO：</strong>（Persistent Object）持久化对象，对象属性与<a href="https://cloud.tencent.com/solution/database?from_column=20065&amp;from=20065" target="_blank" rel="noreferrer">数据库</a>字段形成映射关系。</li><li><strong>DO</strong>：（Domain Object）领域对象，就是从现实世界中抽象出来的有形或无形的业务实体，可以当成BO；（Data Object**）**数据层对象，对象属性与数据库字段形成映射关系，可以当成PO</li></ul><p><img src="https://ask.qcloudimg.com/http-save/yehe-1481867/6b7b093d848976ca97ee6b3fdd9196fc.png" alt="图片"></p><h3 id="vo与dto" tabindex="-1">VO与DTO <a class="header-anchor" href="#vo与dto" aria-label="Permalink to &quot;VO与DTO&quot;">​</a></h3><p><strong>VO</strong>：展示层需要展示的数据。 <strong>DTO</strong>：业务逻辑层需要接收的数据和返回的数据。 VO与DTO的属性值基本相同，但是VO是DTO的最终解释，可以对DTO的字段进行适当删减。</p>',5)]))}const p=a(s,[["render",n]]);export{D as __pageData,p as default};
