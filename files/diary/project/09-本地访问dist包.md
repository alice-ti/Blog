# 访问dist包

## 本地启动服务

### 使用serve

```bash
npx serve -s dist -p 5666
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

### 使用 http-serve

## 通过测试/正式域名访问

通过配置 **HOST** 和 **nginx** 之后，将测试/正式环境下的请求转发到 `1` 启动的本地服务上。

示例如下：

```host
172.17.7.147   ceshi.com
```

```conf
server {
    listen      80;
    server_name ceshi.com;

    location /ceshi/ {
     proxy_pass http://172.17.7.147:5666/;
    }
}
```

之后就可以通过 `http://localhost:5666/ceshi/#route` 访问到本地 dist 包所对应项目
