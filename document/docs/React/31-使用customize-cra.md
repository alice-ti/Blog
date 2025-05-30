# customize-cra

**package.json** 配置文件更改

```json
{
    "scripts": {
     "start": "react-app-rewired start",
     "build:def": "react-app-rewired build",
        "build": "react-app-rewired build && node scripts/move-build.js",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject",
        "lint": "eslint --fix src/**/*.{tsx,ts}"
     }
}
```

## config-overrides.js

```ts
const {
  override,
  addPostcssPlugins,
  fixBabelImports,
  overrideDevServer
} = require('customize-cra');
const path = require('path');
const webpack = require('webpack');
const ENV = {
  DEV: 'http://a.dev.example.com/',
  PROD: 'http://a.pro.example.com/'
};
const SECOND_ENV = {
  DEV: 'http://b.dev.example.com/',
  PROD: 'http://b.pro.example.com/'
};
const devServerConfig = () => config => {
  return {
    ...config,
    proxy: {
      '/api': {
        target: ENV.DEV,
        changeOrigin: true,
        secure: false
      },
      '/bpi': {
        target: SECOND_ENV.DEV,
        changeOrigin: true,
        secure: false
      },
      // 匹配capi开头的接口代理到第三个域名，并把capi去掉，
      '/capi':{
        target: 'http://c.dev.example.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
         '^/capi': ''
        }
      },
    }
  };
};

// 关掉 sourceMap
process.env.GENERATE_SOURCEMAP = process.env.NODE_ENV === 'development' ? 'true' : 'false';

module.exports = {
  webpack: override(
    addPostcssPlugins([
      require('postcss-normalize')({
        forceImport: true
      }),
      require('postcss-preset-env')({
        stage: 0
      })
    ]),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    })
  ),
  devServer: overrideDevServer(devServerConfig())
};

```

---

[config-overrides.js配置devServer解决跨域问题](https://blog.csdn.net/lisili1993/article/details/106765975)

[用customize-cra+react-app-rewired配置less+css module的踩坑经历](https://juejin.cn/post/7071926901584953380)
