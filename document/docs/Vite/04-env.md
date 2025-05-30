# ENV

## [import.meta.env](https://cn.vitejs.dev/guide/env-and-mode.html)

Vite 在一个特殊的 **`import.meta.env`** 对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量

## `.env`

Vite 使用 [dotenv](https://github.com/motdotla/dotenv) 从你的 [环境目录](https://cn.vite.dev/config/shared-options.html#envdir) 中的下列文件加载额外的环境变量：

```
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
```

### 环境加载优先级

一份用于指定模式的文件（例如 `.env.production`）会比通用文件的优先级更高（例如 `.env`）。

Vite 总是会加载 `.env` 和 `.env.local` 文件，除此之外还会加载模式特定的 `.env.[mode]` 文件。在模式特定文件中声明的变量优先级高于通用文件中的变量，但仅在 `.env` 或 `.env.local` 中定义的变量仍然可以在环境中使用。

另外，Vite 执行时已经存在的环境变量有最高的优先级，不会被 `.env` 类文件覆盖。例如当运行 `VITE_SOME_KEY=123 vite build` 的时候。

`.env` 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。

加载的环境变量也会通过 `import.meta.env` 以字符串形式暴露给客户端源码。

为了防止意外地将一些环境变量泄漏到客户端，只有以 `VITE_` 为前缀的变量才会暴露给经过 vite 处理的代码。例如下面这些环境变量：

```ini
# .env
VITE_SOME_KEY=123
DB_PASSWORD=foobar
```

只有 `VITE_SOME_KEY` 会被暴露为 `import.meta.env.VITE_SOME_KEY` 提供给客户端源码，而 `DB_PASSWORD` 则不会。

```ini
# .env
console.log(import.meta.env.VITE_SOME_KEY) // "123"
console.log(import.meta.env.DB_PASSWORD) // undefined
```

### 环境变量解析

如上所示，`VITE_SOME_KEY` 是一个数字，但在解析时会返回一个字符串。布尔类型的环境变量也会发生同样的情况。在代码中使用时，请确保转换为所需的类型。

> 请注意，如果想要在环境变量中使用 `$` 符号，则必须使用 `\` 对其进行转义。

### 安全注意事项

- `.env.*.local` 文件应是本地的，可以包含敏感变量。你应该将 `*.local` 添加到你的 `.gitignore` 中，以避免它们被 git 检入。
- 由于任何暴露给 Vite 源码的变量最终都将出现在客户端包中，`VITE_*` 变量应该不包含任何敏感信息。

## 模式

默认情况下，开发服务器 (`dev` 命令) 运行在 `development` (开发) 模式，而 `build` 命令则运行在 `production` (生产) 模式。

这意味着当执行 `vite build` 时，它会自动加载 `.env.production` 中可能存在的环境变量：

```ini
# .env.production
VITE_APP_TITLE=My App
```

在你的应用中，你可以使用 `import.meta.env.VITE_APP_TITLE` 渲染标题。

在某些情况下，若想在 `vite build` 时运行不同的模式来渲染不同的标题，你可以通过传递 `--mode` 选项标志来覆盖命令使用的默认模式。例如，如果你想在 staging （预发布）模式下构建应用：

```bash
vite build --mode staging
```

还需要新建一个 `.env.staging` 文件：

```ini
# .env.staging
VITE_APP_TITLE=My App (staging)
```

由于 `vite build` 默认运行生产模式构建，你也可以通过使用不同的模式和对应的 `.env` 文件配置来改变它，用以运行开发模式的构建：

```ini
# .env.testing
NODE_ENV=development
```
