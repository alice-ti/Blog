# 访问dist包

## 使用serve

```bash
npx serve -s dist -p 7333
```

### **Serve 配置**

创建一个 `.servedrc` 或 `.servrc.json` 文件，指定配置参数。

使用 `"rewrites"` 属性将 `/xxx/` 下的请求映射到根目录

```json
{
  "public": "dist",
  "rewrites": [
    {
      "source": "/xxx/:splat*",
      "destination": "/:splat*"
    }
  ]
}
```

### **启动 Serve：**

使用以下命令启动 `Serve`，并指定配置文件：

```bash
npx serve --config dist/.servedrc -p 5666
```

### 访问

启动成功后通过 ``<http://localhost:5666/xxx/`> 访问项目

````bash
- Local:    http://localhost:5666
````

## 使用 http-serve
