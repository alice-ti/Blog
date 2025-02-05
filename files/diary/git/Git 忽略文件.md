## git针对指定分支忽略文件

```bash
# 在 master 分支上
git update-index --skip-worktree .gitignore
```

这样设置后：

- master 分支：dist 目录不会被忽略
- 其他分支：dist 目录会被忽略

注意事项：

1. 如果需要修改 master 分支上的 .gitignore，需要先运行：

```bash
git update-index --no-skip-worktree .gitignore
```

1. 切换到其他分支时，可能需要手动删除 dist 目录，因为它可能已经被 git 追踪。
2. 如果从其他分支合并到 master 时，需要注意解决 .gitignore 的冲突。
3. 建议在团队中说明这种特殊的 git 配置，以避免混淆。

## Git 提交 **.gitignore** 中的文件

```bash
git add -f dist
```
