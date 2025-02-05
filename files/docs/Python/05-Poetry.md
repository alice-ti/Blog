# Poetry

[Poetry](https://python-poetry.org/) 是一个 Python 项目的依赖管理工具。它可以通过声明项目所依赖的库，为你管理（安装/更新）它们。Poetry 提供了一个 `poetry.lock` 文件，以确保可重复安装，并可以构建用于分发的项目。

Poetry 会在安装依赖时自动生成 `poetry.lock` 文件，在**项目目录**下执行以下命令：

```bash
# 初始化 poetry 配置
poetry init
# 添加项目依赖，这里以 nonebot2[fastapi] 为例
poetry add nonebot2[fastapi]
```
