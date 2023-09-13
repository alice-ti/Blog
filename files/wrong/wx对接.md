# wx对接

## 微信 H5 拉取支付

### 流程-1

## 微信 JSAPI 拉取支付

### 流程

请求创建订单接口拿到订单数据(订单id，订单号，支付金额)

通过微信网页授权，携带授权 `code` 重定向到订单支付页，并把订单数据拼接在重定向的地址后面（**因为此步骤只适合history路由模式下，如果你项目是 hash 路由 建议此步骤看这篇[文章](https://link.juejin.cn?target=https%3A%2F%2Fcloud.tencent.com%2Fdeveloper%2Farticle%2F1921120)**）

到支付页后

1. 获取地址栏上的 `code`、订单数据（`orderId`）,
2. 然后请求支付接口获得我们需要的数据（该数据保函了`wx.config`和`wx.chooseWXPay`两个方法需要的传参）
3. 通过  **jssdk** 提供的方法发起支付
   1. 先通过 `js-sdk` 提供的 `wx.config()` 注入权限验证配置
   2. 再通过 `wx.ready()` 接口处理成功验证
   3. 再通过 `wx.checkJsApi()` 判断客户端版本是否支持指定JS接口
   4. 再在 `wx.checkJsApi()` 里成功回调函数中调用 `wx.chooseWXPay()` 发起微信支付请求

通过 `wx.chooseWXPay()`

- 支付成功回调：`cancel: function(res){}`
- 支付失败回调：`fail: function(err){}`
- 取消支付回调 `cancel: function(res){}`

分别处理不同支付结果

### 支付页逻辑

```javascript
/**
 * 
 * @description 微信拉取支付
 */
const wxPayByJsApi = async () => {
  // 获取订单数据和授权code
  const params = {
    orderId,
    code, // 授权微信拿到的code
  }
  // 请求后端接口支付
  const resp = await wxPayCreateOrder(params)
  
  // 调用后台接口
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: wechatAppId, // 必填，公众号的唯一标识
    timestamp: 'xx', // 必填，生成签名的时间戳
    nonceStr: 'xx', // 必填，生成签名的随机串
    signature: 'xx', // 必填，签名
    jsApiList: ['chooseWXPay'], // 必填，需要使用的JS接口列表
  })
  // doc: https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#1
  // 注入权限验证配置
  wx.ready(function () {
    // 判断当前客户端版本是否支持指定JS接口
    wx.checkJsApi({
      jsApiList: ['chooseWXPay'], // 需要检测的JS接口列表
      success: (res) => {
        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{ "checkResult": { "chooseImage": true }, "errMsg": "checkJsApi:ok" }
        // 发起微信支付请求
        wx.chooseWXPay({
          timestamp: 'xx', // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
          nonceStr: 'xx', // 支付签名随机串，不长于 32 位
          package: 'xx', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
          signType: 'xx', // 微信支付V3的传入RSA,微信支付V2的传入格式与V2统一下单的签名格式保持一致
          paySign: 'xx', // 支付签名
          success: (res) => {
            // 支付成功后的回调函数
            console.log('pay succ', res)
          },
          fail: (err) => {
            console.log('pay fail', err)
          },
          // 用户取消支付
          cancel: function (err) {
            console.log('pay cancel', res)
          },
        })
      },
    })
  })
  wx.error((err) => {
    console.log('pay error', err)
  })
}
```

---
[微信-网页开发-授权](https://juejin.cn/post/7150570928622010405)

[微信-对接支付](https://juejin.cn/post/7098525649744166942#heading-6)
