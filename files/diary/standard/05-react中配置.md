# 配置

## [配置 linter 以保持正确的导入结构](https://dev.to/otamnitram/sorting-your-imports-correctly-in-react-213m)

> 使用 [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) 来规定导入的顺序。

```json
"import/order": [
  "error",
    {
      "groups": ["builtin", "external", "internal"],
      "pathGroups": [
        {
          "pattern": "react",
          "group": "external",
          "position": "before"
        }
      ],
      "pathGroupsExcludedImportTypes": ["react"],
      "newlines-between": "always",
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      }
  }
],
```

- 设置 `groups` 每个组的顺序。
- `pathGroups` 可以按模式设置的路径进行分组。在这种情况下，在任何其他导入之前查找反应导入。
- `pathGroupsExcludedImportTypes` 定义导入类型。**React** 将作为其他类型处理，因此可以将其与其他外部包分开。
- `newlines-between` 用中间的新行分隔每个组。
- `alphabetize` 对组的排序顺序进行排序。以升序方式选择并区分大小写。

---

[React 最佳实践--如何写出更好的 React 代码（2022 年版）](https://www.freecodecamp.org/chinese/news/best-practices-for-react/)
