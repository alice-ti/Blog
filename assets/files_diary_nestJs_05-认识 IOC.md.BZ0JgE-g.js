import{_ as t,c as r,o as n,af as o}from"./chunks/framework.Cj92BNWl.js";const f=JSON.parse('{"title":"IOC (Inverse Of Control)","description":"","frontmatter":{},"headers":[],"relativePath":"files/diary/nestJs/05-认识 IOC.md","filePath":"files/diary/nestJs/05-认识 IOC.md","lastUpdated":1738744669000}'),a={name:"files/diary/nestJs/05-认识 IOC.md"};function i(l,e,p,s,c,d){return n(),r("div",null,e[0]||(e[0]=[o('<h1 id="ioc-inverse-of-control" tabindex="-1">IOC (Inverse Of Control) <a class="header-anchor" href="#ioc-inverse-of-control" aria-label="Permalink to &quot;IOC (Inverse Of Control)&quot;">​</a></h1><p><strong><a href="https://notfalse.net/1/dip" target="_blank" rel="noreferrer">依赖倒转原则 (Dependency Inversion Principle, DIP)</a></strong> ：</p><ol><li>高阶模块不应该依赖于低阶模块，两者都改依赖抽象。</li><li>抽象不应该依赖于具体实现方式。</li><li>具体实现方式则应该依赖抽象。</li></ol><h2 id="什么是-ioc-控制反转" tabindex="-1">什么是 IOC(控制反转) <a class="header-anchor" href="#什么是-ioc-控制反转" aria-label="Permalink to &quot;什么是 IOC(控制反转)&quot;">​</a></h2><p>在采用面向对象方法设计的软件系统中，它的底层实现都是由N个对象组成的，所有的对象通过彼此的合作，最终实现系统的业务逻辑。</p><p>例如：</p><p>A对象內部需要使用B对象 A,B对象中有依赖的成份</p><p>控制反转就是把原本A对B直接控制权移交給由第三方容器</p><p>降低A对B对象的耦合程度，并让双方都依赖抽象。</p><blockquote><p>系统中模块建议依赖抽象，因为各个模块间不需要知道对方太多细节，知道越多耦合越强。</p></blockquote><p>为了解决对象之间的耦合度过高的问题，提出了IOC理论，用来实现对象之间的“解耦”</p><blockquote><p><strong>IOC</strong> 借助于“第三方”(也就是IOC容器)实现具有依赖关系的对象之间的解耦</p></blockquote><h2 id="ioc-与-di-dependency-injection-依赖注入" tabindex="-1">IOC 与 DI Dependency Injection (依赖注入) <a class="header-anchor" href="#ioc-与-di-dependency-injection-依赖注入" aria-label="Permalink to &quot;IOC 与 DI Dependency Injection (依赖注入)&quot;">​</a></h2><p>依赖注入(DI)和控制反转(IOC)是从不同的角度的描述的同一件事情，就是指通过引入IOC容器，利用依赖关系注入的方式，实现对象之间的解耦。</p><hr><p><a href="https://notfalse.net/3/ioc-di" target="_blank" rel="noreferrer">控制反轉 (IoC) 與 依賴注入 (DI)</a></p><p><a href="https://developer.aliyun.com/article/69721" target="_blank" rel="noreferrer">如何理解IOC 依赖注入的思想（目前见过最好的对DI的描述）</a></p><p><a href="https://ithelp.ithome.com.tw/articles/10211075" target="_blank" rel="noreferrer">IOC(控制反轉) ， DI(依賴注入) 深入淺出~</a></p><p><a href="https://martinfowler.com/articles/injection.html" target="_blank" rel="noreferrer">Inversion of Control Containers and the Dependency Injection pattern</a></p>',19)]))}const h=t(a,[["render",i]]);export{f as __pageData,h as default};
