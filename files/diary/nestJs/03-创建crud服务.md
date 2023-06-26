# 创建 crud 服务

Nest 创建一个 `crud` 服务需要这么几步：

- 安装 `@nestjs/cli`，使用 `nest new xxx` 创建一个 `Nest` 的项目，
- 在根目录执行 `nest g resource user` 快速生成 `user` 模块的 `crud` 代码
- `nest start --watch` 启动 `Nest` 服务

这样一个有`user`的 `crud` 接口的服务就跑起来了。



> TIPS: `controller` 顺序是从上到下依次匹配，一旦匹配到就不会继续往下走。
