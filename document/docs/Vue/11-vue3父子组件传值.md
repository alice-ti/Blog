# Vue3 父子组件传值

## 通过 **props** **emits** 传值

Parent.vue

```vue
<template>
  <div>
    <!-- 通过子组件自定义属性传递值、方法 -->
    <Child :value="doc" @func="sayHello" />
    <button @click="sayHello(doc)">父组件按钮</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Subassembly from './Subassembly.vue'


// 待传递的值
const doc = ref('hello');

// 待传递的方法
const sayHello = function (data) {
  alert(data);
}
</script>
```

Child.vue

```vue
<template>
  <div>
    <!-- 使用父组件传递过来的值 -->
    <h1>{{ props.value }}</h1>
    <button @click="handelClick">子组件按钮</button>
  </div>
</template>
<script setup>
// 从 vue 中引入defineProps, defineEmits
import { defineProps, defineEmits } from 'vue'

// 接收父组件传递过来的值
const props = defineProps(['value'])
// 接收父组件传递过来的方法
const emit = defineEmits(['func'])

const handelClick = function  () {
    //调用父组件传递过来的方法，传入参数修改父组件的值 
    emit('func', 'hello world')
}
</script> 
```

## 通过 **v-model** 子组件改变父组件值

```vue
<template>
 
  <!-- 按钮 -->
  <button @click="addMenu('new')">打开弹框</button>
  
  <!-- 自定义组件,下面这两种写法都可以👇 -->
  <MediaDialog :name="name" v-model:visible="dialogMediaVisible" />
 
</template>
 
<script setup>
import { ref } from 'vue'
 
const dialogMediaVisible = ref(false)
const name = '🚌🚌🚌🚌🚌🚌🚌🚌🚌父组件传递的name🚌🚌🚌🚌🚌🚌🚌🚌🚌'

const addMenu = function(status) {
  dialogMediaVisible.value = true
}
 
</script>
```

MediaDialog.vue

```vue
<template>
  <div>
    <!--⚠️注意-->
    <Dialog
      class="mediaDialog"
      title="我是一个弹框"
      :model-value="visible"
      :before-close="handleClose"
    >
      <span>{{ name }}</span>
      <template #footer>
        <span class="dialog-footer">
          <button @click="handleClose">取 消</button>
          <button type="primary" @click="handleClose">确 定</button>
        </span>
      </template>
    </Dialog>
  </div>
</template>
 
<script setup>
import { ref, provide } from 'vue'
    
const emit =  defineProps(['update:visible'])
const props =  defineProps(['name','visible'])

  // 使用 emit 改变父组件visible的值
const handleClose = function() {
    emit('update:visible', false)
}
</script>
 
 
```
