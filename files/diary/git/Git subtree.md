# Git subtree

## `git subtree`的使用简介

`git subtree`是一个Git命令，用于在单个Git仓库中管理多个项目。它允许您将一个项目的子目录作为独立的Git仓库处理，同时仍然保持在主仓库中。这使得在不使用子模块的情况下，更容易地将多个项目组合在一个仓库中。

以下是`git subtree`的一些常见用法：

### 添加子树

要将一个远程仓库作为子树添加到当前仓库中，可以使用以下命令：

```
git subtree add --prefix=<subtree-directory> <remote-url> <branch> --squash
```

其中，`<subtree-directory>`是子树在当前仓库中的目录，`<remote-url>`是远程仓库的URL，`<branch>`是要添加的远程分支, `--squash`选项用于将子树的历史压缩成一个提交。

### 拉取子树的更新

要从远程仓库拉取子树的更新，可以使用以下命令：

`git subtree pull --prefix=<subtree-directory> <remote-url> <branch> --squash`这将从远程仓库的指定分支拉取更新，并将它们合并到子树目录中。

### 推送子树的更改

要将子树的更改推送回远程仓库，可以使用以下命令：

`git subtree push --prefix=<subtree-directory> <remote-url> <branch> --squash`这将把子树目录中的更改推送到远程仓库的指定分支。

### 分割子树

如果您想将子树分割为一个独立的仓库，可以使用以下命令：

`git subtree split --prefix=<subtree-directory> --branch=<new-branch>`这将创建一个新的分支，其中只包含子树目录的历史记录。
