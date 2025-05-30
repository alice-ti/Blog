# npm 切换源

查看当前npm使用的源：`npm config get registry`

## 临时使用

```bash
npm --registry https://registry.npm.taobao.org install express
```

## 切换源

```bash
npm config set registry https://registry.npm.taobao.org
```

> - 配置后可通过下面方式来验证是否成功
>
>   ```bash
>   npm config get registry
>   ```

## 重置源

```bash
npm config set registry https://registry.npmjs.org
```

## 使用nrm切换

```bash
npm install -g nrm
nrm ls
nrm use taobao
```

---

**2024** 淘宝镜像源更新后新地址

```bash
# old
https://registry.npm.taobao.org
# new
https://registry.npmmirror.com
```
