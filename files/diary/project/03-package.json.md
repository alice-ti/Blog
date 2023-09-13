# package.json

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
