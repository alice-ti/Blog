# vue2 注册全局组件

```vue
// message.vue
<template>
  <div class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ['message'],
}
</script>

<style scoped>
.message {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
}
</style>

```

在`main.js`中引入，注册为全局组件。

```javascript
// 引入
import 组件名 from '@/components/xxx'
// 注册为全局组件
Vue.component('组件名',组件名)
```

## 自定义插件

`Vue` 官方提供的插件有 Vue Router、Vuex和Vue 服务端渲染三个 `Vue.use`可以接受一个对象，`Vue.use(obj)` 对象 **obj** 中需要一个 **install** 函数 在  `Vue.use(obj)` 时，会自动调用该 **install** 函数，并传入到 Vue 构造器中。

```javascript
import Message from './Message.vue';

const MessagePlugin = {
  install(Vue) {
    Vue.prototype.$message = function(message) {
      const MessageComponent = Vue.extend(Message);
      const instance = new MessageComponent({
        propsData: {
          message: message
        }
      });

      instance.$mount();
      document.body.appendChild(instance.$el);
    };
  }
};

export default MessagePlugin;

```

在你的项目中注册该插件。可以在你的入口文件（通常是 `main.js`）中进行注册。

```javascript
import Vue from 'vue';
import MessagePlugin from './MessagePlugin.js';

Vue.use(MessagePlugin);

// 现在，你可以在任何 Vue 组件中使用 this.$message() 方法来显示消息了
```

```javascript
// 在某个 Vue 组件的方法中调用消息组件
methods: {
  showMessage() {
    this.$message('这是一条消息');
  }
}
```

当你调用 `this.$message()` 方法时，会创建一个消息组件的实例，并将其动态地插入到页面的适当位置。
