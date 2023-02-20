# 使用patch-package更改包内容

当项目中使用到的 **package** 不符合预期/存在 **bug** 时，我们通常有几种方案：

- **clone** 项目，换个名字，发到 **npm/tnpm/cnpm** 上去
- **copy** 到项目中，**魔改**
- 使用 **patch-package** 对使用到的 **package** 进行 diff 调整。
