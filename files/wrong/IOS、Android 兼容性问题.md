# IOS 兼容

## Date 格式问题

## IOS 机型点击输入框不能聚焦的问题

解决因使用 `fastclick` 导致的 iOS 机型点击输入框不能聚焦，或者点击多次才能聚焦的问题。
引入 `fastclick` 并重写其 `focus` 方法

```javascript
import FastClick from 'fastclick'
// 修复点击300ms延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  }, false)
}
FastClick.prototype.focus = function(targetElement) {
  targetElement.focus();
};
```

[解决iOS机型点击输入框不能聚焦的问题](https://www.javazxz.com/thread-4591-1-1.html)
