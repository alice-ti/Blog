# service-worker

## [workbox](https://developer.chrome.com/docs/workbox?hl=zh-cn)

谷歌开源库`workbox`，**workbox** 内部帮你对缓存做了大量的逻辑代码处理，并且也支持非常多种不同的缓存策略，并且也封装好了 **sw.js** 文件的更新策略，另外它的配置也非常简单。有时候站在巨人的肩膀上是更好的一种选择。

**workbox** 目前封装好的4种缓存策略

- Stale-While-Revalidate
- Cache First
- Network First
- Network Only
- Cache Only

### Stale-While-Revalidate

这一缓存策略和先有的`http`的同名策略几乎相同，优先选择本地缓存，随后请求并更新缓存，换而言之，要到下一次请求才会正确更新。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f94aad0d9958445eb15b3ccc15ed6f02~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

这个缓存策略是首先通过service worker匹配缓存，并且每次仍然还是会fetch一次接口，并将请求的结果更新缓存。如果匹配不到缓存的情况下会直接返回fecth到的数据。

### CACHE FIRST

缓存优先，顾名思义，优先访问缓存，如果在缓存不可用的情况下在使用网络进行请求

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/26bc3f9657f049ebb5d9fe7966c6d814~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

可以从代码发现每次都会先匹配缓存，缓存匹配不到才会重新fetch并缓存，所以这种方式对于数据更新频繁的情况并不适用。他比较适用于一些静态资源的缓存。

### NETWORK FIRST

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a635b5ccf4642eaab5d51bf518fa66e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

network-first 是一个比较复杂的策略，它接受`networkTimeoutSeconds`参数，如果没有传这个参数，请求将会发出，成功的话就返回结果添加到缓存中，如果失败则返回立即缓存。

这种网络回退到缓存的方式虽然利于那些频繁更新的资源，但是在网络情况比较差的情况（无网会直接返回缓存）下，等待会比较久，这时`networkTimeoutSeconds`就提供了作用。如果设置了，会生成一个setTimeout后被resolve的缓存调用，再把它和请求放倒一个Promise.race中，那么请求超时后就会返回缓存。

### NETWORK Only

![NETWORK FIRST.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/539e5818bcae4d65a874d4c52785599a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

### Cache Only

![Cache FIRST.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa6862b59d8b42018360805cde52b0f8~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

> **NETWORK Only** 是只用fetch接口数据，**Cache Only** 是只用缓存，两种一般都不适用。

---

[vite pwa项目使用](https://juejin.cn/post/7039258299086143524)
