# 切换npm源

## 命令切换

```bash
npm config set registry https://xxx.com
```

查看npm源

```bash
npm config get registry
```

## 使用 `nrm`

```bash
npm install -g nrm
nrm ls
nrm use taobao


```

查看当前npm使用的源：`npm config get registry`
