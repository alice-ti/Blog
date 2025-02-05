# [vite-plugin-svg-icons](https://www.npmjs.com/package/vite-plugin-svg-icons)

## 通过 **vite-plugin-svg-icons** 插件封装 **SvgIcon** 组件

使用 `vite-plugin-svg-icons` 封装 `svg`

```bash
pnpm install vite-plugin-svg-icons -D
```

#### 配置 `vite.config.ts`

```javascript
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"

export default defineConfig(({ mode }) => {
  return {
    plugins: [
   // ... 你的其他配置
        
      // svg icon
      createSvgIconsPlugin({
        // 指定图标文件夹-需要缓存的图标文件夹
        iconDirs: [path.resolve(root, "src/icons/svg")],
        // 指定 symbolId 格式
        symbolId: "icon-[dir]-[name]",
        /** 
         * 自定义插入位置
         * @default: body-last
         */
        // inject?: 'body-last' | 'body-first'

        /**
         * custom dom id
         * @default: __svg__icons__dom__
        */
        // customDomId: '__svg__icons__dom__',
      }),
    ],
})
```

#### 在 `main.js/ts` 中添加

```typescript
import "virtual:svg-icons-register"
```

#### 封装SvgIcon组件 `src/components/SvgIcon`

```vue

<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  },
})
</script>
```

#### ``main.js/ts` 中注册全局组件（避免在每个vue页面中都需要引入svgIcon组件）

```typescript
import SvgIcon from "@components/SvgIcon.vue"
import "virtual:svg-icons-register"

createApp(App).component("svg-icon", SvgIcon)  
```

#### 使用示例

```vue
<SvgIcon name="icon-success" />
```

---

## 备注

 **SvgIcon** 参考

```vue
<script setup>
import { computed } from "vue"

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
    
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: ""
  },
  className: {
    type: String,
    default: ""
  }
})

const isExternalIcon = computed(() => isExternal(props.name))
const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  if (props.className) {
    return "svg-icon " + props.className
  } else {
    return "svg-icon"
  }
})

// 外链 icon
const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.name}) no-repeat 50% 50%`,
    "-webkit-mask": `url(${props.name}) no-repeat 50% 50%`
  }
})
</script>

<template>
  <div
    v-if="isExternalIcon"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-bind="$attrs"
  />
  <svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped>
.svg-icon {
  width: 3em;
  height: 3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>

```
