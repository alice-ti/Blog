# 使用 alternatives 管理 Python 版本

```bash
# 1. 安装 alternatives 工具（如果需要）
sudo yum install chkconfig -y

# 2. 配置 python3 的 alternatives
sudo alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 1
sudo alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 2

# 3. 配置 python 命令的 alternatives
sudo alternatives --install /usr/bin/python python /usr/bin/python3.6 1
sudo alternatives --install /usr/bin/python python /usr/bin/python3.11 2

```

```bash
# 4. 选择默认的 python 版本
sudo alternatives --config python

# 5. 选择默认的 python3 版本
sudo alternatives --config python3
```
