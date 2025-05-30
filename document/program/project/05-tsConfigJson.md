# ts.config.json

### compilerOptions

`compilerOptions` 名字源自 `tsconfig.json`，对于 `TypeScript` 来说，该属性用于编译 **TypeScript**。而 **JavaScript** 中则仅用来优化开发体验与 `IntelliSense` 性能。

下面是用于配置 `jsconfig` 所支持的 `compilerOptions`，这里仅列出部分常用属性。可前往 [tsc CLI Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) 查看更多详细属性。

| 属性                         | 描述                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| baseUrl                      | 基本目录，用于解析非相对模块名称                             |
| paths                        | 指定要相对于 baseUrl 选项计算的路径映射，通常用于为 webpack 等路径别名提供支持 |
| target                       | 指定要使用的默认库 lib.d.ts，可选属性： es3 / es5 / es6 / es2015 / es2016 / es2017 / es2018 / es2019 / es2020 / es2021 / es2022 / esnext |
| module                       | 用于生成模块代码时指定模块系统，可选 amd / commonJS / es2015 / es6 / es2020 /es2022 / esnext / none / system / umd |
| checkJs                      | 对 JavaScript 文件启用类型检查                               |
| experimentalDecorators       | 为 ES装饰器 提案提供实验支持                                 |
| allowSyntheticDefaultImports | 允许从模块进行默认导入而没有默认导出。这不影响代码生成，仅影响类型检查 |

**jsconfig.json** 与 **tsconfig.json** 的关系？

1. **jsconfig.json** 是 **tsconfig.json** 的后代，后者是 **TypeScript** 的配置文件。
2. **jsconfig.json** 相当于 **tsconfig.json** 的 `allowJs` 属性设置为 **true**。

---

常用 **config.json** 如下：

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
    }
  },
  "include": ["src"],
  "references": [
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```
