# Git连接两个远程仓库

```bash
git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=(fetch|push)] <name> <URL>
```

## 添加远程仓库

运行 `git remote add <shortname> <url>` 添加一个新的远程 Git 仓库，同时指定一个方便使用的简写：

1. 如果当前项目是从远程仓库 **clone** 而来的，远程仓库默认为 **origin**。

2. 如果是本地 **git init** 新建的本地仓库

  ```bash
  git remote add github [] xxx(远程仓库地址) -- 连接远程仓库，其中github是自定义的远程仓库的名称
  ```

### 连接两个远程仓库

### 修改远程仓库地址

```bash
git remote set-url origin xxx(远程仓库地址) -- 修改origin连接的远程仓库地址
```

## 查看某个远程仓库

如果想要查看某一个远程仓库的更多信息，可以使用 `git remote show <remote>` 命令。 如果想以一个特定的缩写名运行这个命令，例如 **origin**，会得到像下面类似的信息：

```bash
git remote show origin
```

``` powershell
* remote origin
  Fetch URL: https://github.com/schacon/ticgit
  Push  URL: https://github.com/schacon/ticgit
  HEAD branch: master
  Remote branches:
    master                               tracked
    dev-branch                           tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
```

## 推送到远程仓库

命令 `git push <remote> <branch>`。 当你想要将 **master** 分支推送到 **origin** 服务器时（再次说明，克隆时通常会自动帮你设置好那两个名字）

```bash
git push origin master
```

````bash
git pull origin main --allow-unrelated-histories
````

## 远程仓库的重命名与移除

你可以运行 `git remote rename` 来修改一个远程仓库的简写名。 例如，想要将 **github** 重命名为 **paul**，可以用 `git remote rename` 这样做：

```bash
git remote rename github paul
git remote
```

值得注意的是这同样也会修改你所有远程跟踪的分支名字。 那些过去引用 **github/master** 的现在会引用 **paul/master**。

如果因为一些原因想要移除一个远程仓库——你已经从服务器上搬走了或不再想使用某一个特定的镜像了， 又或者某一个贡献者不再贡献了——可以使用 `git remote remove` 或 `git remote rm` ：

```bash
git remote remove paul
git remote
```

一旦你使用这种方式删除了一个远程仓库，那么所有和这个远程仓库相关的远程跟踪分支以及配置信息也会一起被删除

### 远程仓库路径发生变化

当原生仓库项目目录发生变化时，需要本地更改所关联的 **remote**

```bash
// 原 remote https://xxx/aaa.git
git remote set-url origin https://xxx/bbb.git
```

---

[How to resolve ‘fatal: refusing to merge unrelated histories’](https://komodor.com/learn/how-to-fix-fatal-refusing-to-merge-unrelated-histories-error/)
