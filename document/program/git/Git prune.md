# `git purne`

有时候，在本地（Local）跟远端（Remote）已经把不要的分支刪除，但 git branch -a 指令还是会有已经删除的分支。

`git remote prune origin — dry-run`

> 确认清理不干净或刪不掉的分支是不是在列表里面

prune 是修剪、修整的意思 ，`--dry-run`会列出可以修整的分支列表。
执行这个指令并不会真的刪除，只是告诉你有哪些分支。

**git remote prune origin**

执行 `git remote prune origin` 来同步remote分支，进而清除当前本地中 purne 过的分支。
