---
title Javascript 进阶
---

## ['1', '2', '3'].map(parseInt) what & why ?

先说答案： `[1, NaN, NaN]`

1. 首先， `map()` 的 `callback` 接受三个参数，`currentValue` 当前值， `index` 索引， 以及 `array` 数组本身。

2. `parseInt(string, radix)` 接受两个参数，`radix` 表示为解析时的基数。

3. 所以，三次调用分别为：

- parseInt('1', 0) // radix 为 0 时，且 string 参数不以“0x”和“0”开头时，按照 10 为基数处理。这个时候返回 1
- parseInt('2', 1) // 基数为 1（1 进制）表示的数中，最大值小于 2，所以无法解析，返回 NaN
- parseInt('3', 2) //基数为 2（2 进制）表示的数中，最大值小于 3，所以无法解析，返回 NaN

4. 所以，最终返回 `[1, NaN, NaN]`

##
