# 返回上一页面如果没有上一页面返回首页

```javascript
// 有上一页则返回
if (window.history.state.back) {
  router.go(-1)
} else {
// 没有上一页则返回到首页
  router.replace({ path: '/home' })
}
```
