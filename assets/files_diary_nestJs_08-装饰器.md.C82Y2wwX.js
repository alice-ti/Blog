import{_ as t,c as i,o as l,af as a}from"./chunks/framework.Cj92BNWl.js";const u=JSON.parse('{"title":"decorator（装饰器）","description":"","frontmatter":{},"headers":[],"relativePath":"files/diary/nestJs/08-装饰器.md","filePath":"files/diary/nestJs/08-装饰器.md","lastUpdated":1738744669000}'),r={name:"files/diary/nestJs/08-装饰器.md"};function s(o,e,n,d,c,p){return l(),i("div",null,e[0]||(e[0]=[a('<h1 id="decorator-装饰器" tabindex="-1">decorator（装饰器） <a class="header-anchor" href="#decorator-装饰器" aria-label="Permalink to &quot;decorator（装饰器）&quot;">​</a></h1><h2 id="nest-中常用装饰器" tabindex="-1">Nest 中常用装饰器 <a class="header-anchor" href="#nest-中常用装饰器" aria-label="Permalink to &quot;Nest 中常用装饰器&quot;">​</a></h2><ul><li>@Module： 声明 Nest 模块</li><li>@Controller：声明模块里的 controller</li><li>@Injectable：声明模块里可以注入的 provider</li><li>@Inject：通过 token 手动指定注入的 provider，tonken 可以是 class 或者 string</li><li>@Optional：声明注入的 provider 是可选的，可以为空</li><li>@Catch：声明 exception filter 处理的 exception 类型</li><li>@UseFilters：路由级别使用 exception filter</li><li>@UsePipes：路由级别使用 pipe</li><li>@UseInterceptors：路由级别使用 interceptor</li><li>@SetMetadata：在 class 或者 handler 上添加 metadata</li><li>@Get、@Post、@Put、@Delete、@Patch、@Options、@Head：声明 get、post、put、delete、patch、options、head 的请求方式</li><li>@Param：取出 url 中的参数，比如 /aaa/:id 中的 id</li><li>@Query: 取出 query 部分的参数，比如 /aaa?name=xx 中的 name</li><li>@Body：取出请求 body，通过 dto class 来接收</li><li>@Headers：取出某个或全部请求头</li><li>@Session：取出 session 对象，需要启用 express-session 中间件</li><li>@HostParm： 取出 host 里的参数</li><li>@Req、@Request：注入 request 对象</li><li>@Res、@Response：注入 response 对象，一旦注入了这个 Nest 就不会把返回值作为响应了，除非指定 passthrough 为true</li><li>@Next：注入调用下一个 handler 的 next 方法</li><li>@HttpCode： 修改响应的状态码</li><li>@Header：修改响应头</li><li>@Redirect：指定重定向的 url</li><li>@Render：指定渲染用的模版引擎</li></ul>',3)]))}const h=t(r,[["render",s]]);export{u as __pageData,h as default};
