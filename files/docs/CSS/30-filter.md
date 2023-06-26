# filter

## filter: drop-shadow

常用的设置阴影方案 `box-shadow` 不适用在伪元素和半透明的装饰上。 

对于不规则阴影，推荐使用的是``filter: drop-shadow`

```html
<div>Tank</div>
```

```css
div {
    text-align: center;
    line-height: 200px;
    font-size: 40px;
    color: #cffef8;
    width: 200px;
    height: 200px;
    background: #216583;
    border-radius: 20px;
    position: relative;
    filter: drop-shadow(2px 2px 10px rgba(0,0,0,.6));
}
div:after {
    content: '';
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    background: #216583;
    z-index: -999;
    right: -15px;
    top: 20%;
    transform:rotate(45deg);
}
```

