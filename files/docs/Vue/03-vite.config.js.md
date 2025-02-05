# Vite.config.js

## 常用配置如下

```javascript
// vite.config.js
import { defineConfig } from 'vite' // 使用 defineConfig 工具函数获取类型提示：
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  base: '/foo/', // 开发或生产环境服务的公共基础路径
  optimizeDeps: {
    force: true // 强制进行依赖预构建
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '/src/assets/styles/variables.scss';` // 引入全局变量文件
      }
    },
    postcss: {
      plugins: [
        // viewport 布局适配
        postcssPxToViewport({
          viewportWidth: 375
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 路径别名
    },
    extensions: ['.js', '.ts', '.json'] // 导入时想要省略的扩展名列表
  },
  server: {
    host: true, // 监听所有地址
    proxy: {
      // 字符串简写写法
      '/foo': 'http://localhost:4567',
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 正则表达式写法
      '^/fallback/.*': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, '')
      },
      // 使用 proxy 实例
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        }
      },
      // Proxying websockets or socket.io
      '/socket.io': {
        target: 'ws://localhost:3000',
        ws: true
      }
    }
  },
  build: {
    outDir: 'build', // 打包文件的输出目录
    assetsDir: 'static', // 静态资源的存放目录
    assetsInlineLimit: 4096 // 图片转 base64 编码的阈值
  },
  plugins: [
    vue(),
    viteMockServe()
  ]
})
```

---

[Vite 配置篇](https://juejin.cn/post/7170843707217412126#heading-7)
