# 更改Css变量

在vue中可以通过绑定一个数据属性到元素的 **style** 中，来动态修改 **CSS** 变量

```vue
<template>
  <div id="app" :style="{'--theme-color': themeColor}">
    <button @click="changeColor">Change Color</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themeColor: 'blue'
    }
  },
  methods: {
    changeColor() {
      this.themeColor = 'red';
    }
  }
};
</script>

<style>
#app {
  --theme-color: blue;
  background-color: var(--theme-color);
}
</style>

```
