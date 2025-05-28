# createObjectURL

通过 `createObjectURL` 方法就能实现在前端下载文件而不需要后台服务支持。

## createObjectURL

`createObjectURL` 是 `URL` 对象的一个方法，用于将二进制数据或 `Blob` 对象转换为可用于页面上的 URL，通常用于预览或下载文件，或者在页面上显示来自相机或麦克风的实时流数据。生成的 `URL` 对象可以直接用于图片、音频、视频等媒体元素的 `src` 属性中，也可以用于下载文件的链接地址。

使用 `createObjectURL` 方法生成的 `URL` 对象是唯一的，只要页面关闭或重新加载，它就会失效。为了避免内存泄漏，建议在使用完毕后调用 `URL.revokeObjectURL` 方法，将其释放。

下载文本内容示例

```jsx
import React, { useState } from 'react';

function DownloadButton() {
  const [content, setContent] = useState('这是一个文本文件中的内容');

  const handleClick = () => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'file.txt';
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleClick}>下载文件</button>
  );
}

export default DownloadButton;
```

> TIPS：`React` 中的事件处理程序会自动绑定 `this`，因此在事件处理程序中无法直接使用 `document` 对象和其他全局变量。
