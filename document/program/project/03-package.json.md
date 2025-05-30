# package.json

## description

包的描述，是一个字符串，可以帮助别人发现你的包，可以显示在 `npm search` 列表中。

## keywords

与包有关的关键字，是一个字符串数组，可以帮助别人发现你的包，可以显示在 `npm search` 列表中。

## bin

很多包拥有一个或者多个可执行文件，并且希望安装在 PATH 中。npm 可以很简单的实现这个（实际上，就是使用这个特性安装的 npm 可执行文件）。

为了使用这个特性，需要在 package.json 文件中指定 `bin` 字段，它表示命令与本地文件名称的映射关系。当进行全局安装时，npm 将这个文件与 `prefix/bin` 进行符号连接（symlink），进行本地安装时，会将这个文件与 `node_modules/.bin/` 进行符号连接。

例如，`myapp` 的 `package.json` 包含以下内容：

```json
{ "bin" : { "myapp" : "./cli.js" } }
```

当你全局安装 `myapp` 时， npm 会从 `cli.js` 脚本创建一个符号连接至 `usr/local/bin/myapp` 目录。

如果你只有一个可执行文件，那么你可以提供一个字符串，像这样：

```json
{
    "name": "my-program",
    "version": "1.2.5",
    "bin": "./path/to/program"
}
```

上面的写法，等价于：

```json
{
    "name": "my-program",
    "version": "1.2.5",
    "bin" : { "my-program" : "./path/to/program" }
}
```

最后，请确保 `bin` 字段引用的文件内容以 `#!/usr/bin/env node` 开头，用于指示该脚本的执行需要 node。

## repository

说明包的代码仓库在哪里。如果 git 仓库在 Github 上，使用 `npm docs` 命令，会跳转到仓库页面。

```json
"repository": {
    "type" : "git",
    "url" : "https://github.com/npm/cli.git"
}

"repository": {
    "type" : "svn",
    "url" : "https://v8.googlecode.com/svn/trunk/"
}
```

如果是 Github，Github gist Bitbucker 或者 GitLab 仓库，你可以使用简写的方式：

```json
"repository": "npm/npm"

"repository": "github:user/repo"

"repository": "gist:11081aaa281"

"repository": "bitbucket:user/repo"

"repository": "gitlab:user/repo"
```

如果 `package.json` 文件不在项目的根目录下，你可以指定包所在的目录：

```json
"repository": {
    "type" : "git",
    "url" : "https://github.com/facebook/react.git",
    "directory": "packages/react-dom"
}
```

## [scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts)

`scripts` 属性是一个包含脚本命令的字典，这些命令在包的生命周期的不同时间运行。

## config

`config` 对象可以被用来配置 scripts 的参数，例如：

```json
{ 
    "name" : "foo",
    "config" : { "port" : "8080" }
}
```

有一个 start 命令，并且可以通过 `npm_package_config_port` 变量引用设置的 port。用户也可以通过 `npm config set foo:port 8001` 覆盖配置。

可以在 [config](https://docs.npmjs.com/cli/v6/using-npm/config) 和 [scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) 获取更多信息。

## dependencies

指定项目依赖，值为包名加上版本号。

版本号可以指定一个范围，有以下语法。

- `version`：精确的版本，例如 `1.0.0`
- `>version`：大于 `version`
- `>=version`：大于等于
- `<version`: 小于
- `<=version`: 小于等于
- `~version`: 允许补丁级别的变化，例如 `~1.2.3` 表示 `>=1.2.3 <1.3.0`
- `^version`：允许不更改最左侧非0版本号数字的变化，例如 `^1.2.3` 表示 `>=1.2.3 <2.0.0`
- `1.2.x`
- `http://...`
- `*`
- `version1 - version2` 等同于 `>=version1 && <=version2`

可以在 [semver](https://docs.npmjs.com/cli/v6/using-npm/semver) 获取更多关于 version 的信息。

```json
{ 
    "dependencies" :
    { 
        "foo" : "1.0.0 - 2.9999.9999",
        "bar" : ">=1.0.2 <2.1.2",
        "baz" : ">1.0.2 <=2.3.4",
        "boo" : "2.0.1",
        "qux" : "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
        "asd" : "http://asdf.com/asdf.tar.gz", 
        "til" : "~1.2",
        "elf" : "~1.2.3",
        "two" : "2.x",
        "thr" : "3.3.x",
        "lat" : "latest",
        "dyl" : "file:../dyl"
    }
}
```

可以使用 **URL** 代替版本号。

也可以使用本地路径。

```json
{
    "name": "baz",
    "dependencies": {
        "bar": "file:../foo/bar"
    }
}
```

## devDependencies

适用于开发环境的依赖包。

## peerDependencies

防止包重复安装的字段。

举个例子，假设你的程序依赖了 A、B 和 C 三个包，同时 B 和 C 又依赖了 A，那么当你安装 A、B、C 时，B 和 C 又会重复安装 A，所以可以将 A 添加到 C 的 `peerDependencies` 字段下，这样当你的程序安装依赖时，A 只会被安装一次，B 和 C 不会重复安装 A。

一般用于指定当前包兼容的宿主版本，例如我们要编写一个 webpack 插件，当前插件兼容的 webpack 为 `3.x`, 此时我们可以这样指定：

```json
{
    "peerDependencies": {
        "webpack": "3.x"
    }
}
```

## engines

可以指定一些运行环境，例如 node 和 npm：

```json
{ 
    "engines" : {
        "node" : ">=0.10.3 <0.12",
        "npm" : "~1.0.20"
    }
}
```

## resolutions

`resolutions` 字段可以在 **package.json** 文件中被定义。它是一个特殊的字段，用于提供对其他依赖项的版本限制。

当依赖项的版本冲突时，使用 `resolutions` 字段可以告诉 **npm** 哪个版本应该被安装。这通常在你使用 **monorepo** 架构或者多个包之间有紧密关系时很有用。

"resolutions" 字段的格式是：

```json
"resolutions": {
  "<package-name>": "<version-or-range>",
  ...
}
```

---

- 附录1 - [pnpm 对应node版本支持如下](https://pnpm.io/installation#compatibility)
    | Node.js    | pnpm 7 | pnpm 8 | pnpm 9 |
    | ---------- | ------ | ------ | ------ |
    | Node.js 12 | ❌      | ❌      | ❌      |
    | Node.js 14 | ✔️      | ❌      | ❌      |
    | Node.js 16 | ✔️      | ✔️      | ❌      |
    | Node.js 18 | ✔️      | ✔️      | ✔️      |
    | Node.js 20 | ✔️      | ✔️      | ✔️      |

- [package.json 指南](https://pengfeixc.com/blogs/javascript/package-json)

- [package.json docs](https://docs.npmjs.com/cli/v6/configuring-npm/package-json)
