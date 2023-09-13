# NextJs 配置 alias

老规矩，先看[官方文档](https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases)

```json
// tsconfig.json or jsconfig.json
{
  "compilerOptions": {
  "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"]
    }
  }
}

```

只需要配置`ts`的配置文件`tsconfig.json`就可以了
