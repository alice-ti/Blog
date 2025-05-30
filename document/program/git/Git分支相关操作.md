# GIT 分支

## 重命名本地分支

```bash
使用`git branch -m <旧分支名> <新分支名>`
```

这会把旧的本地分支名字修改为新的分支名字

### 重命名远程分支

- 使用`git push origin :<旧分支名>`将旧的远程分支删除。这里的冒号（:）表示删除分支的意思，后面跟着分支名指定要删除的分支。

- 使用`git push origin <新分支名>`将重命名后的本地分支推送到远程仓库。

```bash
# 重命名本地分支
git branch -m <旧分支名> <新分支名>
# 删除远程分支
git push origin :<旧分支名>
# 推送新分支
git push origin <新分支名>
```

## 删除分支

```bash
// 删除本地分支
git branch -d localBranchName

// 删除远程分支
git push origin --delete remoteBranchName
```

## 重命名本地文件件提交远程

```bash
git mv oldFolder TempFolder
git mv TempFolder NewFolder
```

使用 `git mv` 命令重命名文件夹，使其名称临时变为完全不同的名称。然后，再将其改回到你期望的大小写格式。这样做可以让 Git 识别到这个改动。

```bash
git config core.ignorecase false
```

这条命令仅对当前仓库有效。如果你想全局更改此配置，可以添加`--global`标志。
