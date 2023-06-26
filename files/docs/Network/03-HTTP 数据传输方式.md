# HTTP 数据传输方式

## query

url 中 `?` 后的字符串

## url params

url 中的参数

## json

json 格式的数据。 `content type` 为 `application/json`

## form data

`content type`  为 `multipart/form-data`，且使用 `FormData` 对象来封装传输的内容。

## form urlencoded

类似 query 字符串，只不过是放在 **body** 中。

`axios` 中需要指定 `content type` 为 `application/x-www-form-urlencoded`，并且对数据用 `qs` 或者 `query-string` 库做 `url encode`



## Summary

body 中：

- json

- form data

-  form urlencoded

