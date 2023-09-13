# 配置SSH秘钥

## 设置git的user name和email

初次安装 **​​git​​** 需要配置用户名和邮箱

```bash
git config --global user.name "xxx"
git config --global user.email  "xxx@xx.com"
```

## 检查是否已有SSH秘钥

```bash
ls -al ~/.ssh
```

## 生成秘钥

```bash
ssh-keygen -t rsa -b 4096 -C your@email.com
```

## 复制公钥

**SSH** 默认私钥地址为：`~/.ssh/id_rsa` ，对应的公钥为：`~/.ssh/id_rsa.pub`，使用编辑器或 **cat** 命令输出公钥内容拷贝至剪贴板，然后将公钥粘贴至对应的配置后台。

对于 **Linux** 或 **Mac**，使用以下命令将公用密钥的内容打印到控制台：

```bash
cat ~/.ssh/id_rsa.pub # Linux
```

然后复制输出。

对于 **Windows**，只需要运行：

```bash
clip < ~/.ssh/id_rsa.pub # Windows
```

## 测试SSH是否连接成功

```bash
# 这里以 Github 服务为例
ssh -T git@github.com
```

---

[如何获取和配置 Git 和 GitHub SSH 密钥](https://www.freecodecamp.org/chinese/news/how-to-get-and-configure-git-and-github-ssh-keys/)
