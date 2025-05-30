# 项目基础样式less封装

```less
/**
* flex布局封装
*/

.flex-align-items-mixins(@flexDirection, @justifyContent) {
  &-start {
    display: flex;
    flex-direction: @flexDirection;
    justify-content: @justifyContent;
    align-items: flex-start;
  }

  &-center {
    display: flex;
    flex-direction: @flexDirection;
    justify-content: @justifyContent;
    align-items: center;
  }

  &-end {
    display: flex;
    flex-direction: @flexDirection;
    justify-content: @justifyContent;
    align-items: flex-end;
  }
}

.flex-mixins(@flexDirection) {
  display: flex;
  flex-direction: @flexDirection;

  &-start {
    display: flex;
    flex-direction: @flexDirection;
    justify-content: flex-start;
    .flex-align-items-mixins(@flexDirection, flex-start);
  }

  &-center {
    display: flex;
    flex-direction: @flexDirection;
    justify-content: center;
    .flex-align-items-mixins(@flexDirection, center);
  }

  &-end {
    display: flex;
    flex-direction: @flexDirection;
    justify-content: flex-end;
    .flex-align-items-mixins(@flexDirection, flex-end);
  }

  &-between {
    display: flex;
    flex-direction: @flexDirection;
    justify-content: space-between;
    .flex-align-items-mixins(@flexDirection, space-between);
  }

  &-around {
    display: flex;
    flex-direction: @flexDirection;
    justify-content: space-around;
    .flex-align-items-mixins(@flexDirection, space-around);
  }

  &-evenly {
    display: flex;
    flex-direction: @flexDirection;
    justify-content: space-evenly;
    .flex-align-items-mixins(@flexDirection, space-evenly);
  }
}

.flex {
  display: flex;

  &-1 {
    flex: 1;
  }

  &-wrap {
    display: flex;
    // 允许换行
    flex-wrap: wrap;
  }

  &-row {
    display: flex;
    // 横向主轴
    .flex-mixins(row);
  }

  &-col {
    display: flex;
    // 纵向主轴
    .flex-mixins(column);
  }

  &-row-reverse {
    display: flex;
    // 横向反转主轴
    .flex-mixins(row-reverse);
  }

  &-col-reverse {
    display: flex;
    // 纵向反转主轴
    .flex-mixins(column-reverse);
  }
}

.wh() {
  h: height;
  w: width;
}

each(.wh(), .(@v1, @k1) {
    .@{k1}-full {
        @{v1}: 100%;
    }
});

/**
* padding margin 间距封装
*/

@values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65,
  70, 80, 100;

// class的key和对应的属性
.enums() {
  p: padding;
  m: margin;
  pt: padding-top;
  pr: padding-right;
  pb: padding-bottom;
  pl: padding-left;
  mt: margin-top;
  mr: margin-right;
  mb: margin-bottom;
  ml: margin-left;
}

// 遍历生成，比如.pl-10{padding-left: 10rpx;}
each(.enums(), .(@v1, @k1) {
    each(@values, {
      .@{k1}-@{value} {
        @{v1}: (@value * 2rpx);
      }
    })
});

.line-clamp(@n: 3) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: @n;
  word-break: break-all;
  -o-text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}

@clamp: 2, 3, 4;

each(@clamp, {
  .line-clamp-@{value} {
    .line-clamp(@value);
  }
});

```
