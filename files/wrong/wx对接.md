# wx对接

## 微信 H5 登录

> [网站应用微信登录开发指南](https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html)
>
> [公众号-网页授权](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)

1. 第三方发起微信授权登录请求，微信用户允许授权第三方应用后，微信会拉起应用或重定向到第三方网站，并且带上授权临时票据**code**参数；
2. 通过code参数加上**AppID**和**AppSecret**等，通过API换取**access_token**；
3. 通过**access_token**进行接口调用，获取用户基本数据资源或帮助用户实现基本操作。

获取 时序图

![img](https://res.wx.qq.com/op_res/D0wkkHSbtC6VUSHX4WsjP5ssg5mdnEmXO8NGVGF34dxS9N1WCcq6wvquR4K_Hcut)

总结一下，对于前端来说只用进行两步操作

1. 去访问微信提供的一个 **url** 地址

   ```javascript
   https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect
   ```

   > 尤其注意：由于授权操作安全等级较高，所以在发起授权请求时，微信会对授权链接做正则强匹配校验，如果链接的参数**顺序不对**，授权页面将无法正常访问

   - 需要配置的地方有：**appid** (微信公众号id)和 **redirect_uri** (回调地址）

2. 回调地址，安全域名配置

   - **在申请到认证公众号之前，可以先通过[测试号申请系统](https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Requesting_an_API_Test_Account.html)，申请一个接口测试号，通过测试开发**

   - 微信公众号正式号设置，`功能设置-网络授权域名(设置)-添加redirect_uri`

### 示例如下

```vue
<template>
  <div class="login"></div>
</template>
<script>
import { Toast } from 'vant'
import { login } from '@/api/login.js'
import indexConfig from '@/config/index.config'
export default {
  data() {
    return {}
  },
  created() {
    this.isWXBrowser = this.isWXBrowser()
    if (this.isWXBrowser) {
      const code = this.getUrlCode('code')
      if (code) {
        this.wxLogin(code) // 后台登录
      } else {
        this.getWeChatCode() // 微信授权
      }
    }
  },
  methods: {
    // 判断是否是微信内置的浏览器
    isWXBrowser() {
      return String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === 'micromessenger'
    },
    // 截取地址栏code
    getUrlCode(name) {
      const router = useRouter()
      const query = router.currentRoute.value.query || {}
   const { code } = query
      return code
    },
    // 访问微信地址，用来获取code
    getWeChatCode() {
      const local = encodeURIComponent(window.location.href) // 获取当前页面地址作为回调地址
      const appid = indexConfig.weixinAppId
      // 通过微信官方接口获取code之后，会重新刷新设置的回调地址【redirect_uri】
      window.location.href =
        'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
        appid +
        '&redirect_uri=' +
        local +
        '&response_type=code&scope=snsapi_base&state=1#wechat_redirect'
    },
    // 把code传递给后台接口，静默登录
    wxLogin(code) {
      const router = useRouter()
      login(code).then((res) => {
        if (res.success) {
          // TODO token userid 存储
          router.push('/index')
        } else {
          Toast({ message: res.msg })
        }
      })
    },
  },
}
</script>

```

### 清除微信浏览器缓存

- 退出当前微信，然后重新登录
- 进入H5页面，点击右上角的 `...` ，在弹出的选项中点击刷新
- 在微信底部导航栏中选择 `**我**  -> **设置** -> **通用** -> **存储** -> **清理缓存**

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

## 微信h5跳转微信小程序

通过开放标签进行公众号跳转小程序操作

具体实现如下

```javascript
const APP_ID = 'wxef5a7e98a3208bd9' // 公众号 AppID

// 小程序appid
const WEAPP_APPID = 'wx-xxx'

// 获取signature

const IMG_MAP = 'http://img.funshion.com/sdw?oid=449aa7e594009fa58e577cec56800af0&w=0&h=0'

function docReady(fn) {
 if (document.readyState === 'complete' || document.readyState === 'interactive') {
  fn()
 } else {
  document.addEventListener('DOMContentLoaded', fn)
 }
}

docReady(async function () {
 const ua = navigator.userAgent.toLowerCase()
 const isWXWork = ua.match(/wxwork/i) == 'wxwork'
 const isWeixin = !isWXWork && ua.match(/micromessenger/i) == 'micromessenger'
 var isMobile = false
 var isDesktop = false
 if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|IEMobile)/i)) {
  isMobile = true
 } else {
  isDesktop = true
 }

 // const encode_url = new URL(window.location).searchParams.get('key') || ''
 const encode_url = new URL(window.location).search?.split('?key=')[1] || ''
 console.log('origin_url => ', encode_url)
 console.log('encode_url => ', decodeURIComponent(encode_url))

 const decryptedURL = decryptData(encode_url)
 console.log('decryptedURL => ', decryptedURL)

 // 解密后的 URL
 const searchParams = new URLSearchParams(decryptedURL)
 const miniapp_type = searchParams?.get('miniapp')

 const CONFIG = {
  appid: WEAPP_APPID,
        // ...额外config参数
 }

 if (isWeixin) {
  const containerEl = document.getElementById('wechat-web-container')
  containerEl.classList.remove('hidden')
  containerEl.classList.add('full', 'wechat-web-container')

  document.addEventListener('WeixinOpenTagsError', function (e) {
   console.error(e.detail.errMsg) // 无法使用开放标签的错误原因，需回退兼容。仅无法使用开放标签，JS-SDK其他功能不受影响

   alert('无法使用开放标签的错误原因，需回退兼容。仅无法使用开放标签，JS-SDK其他功能不受影响')
  })

  console.log('WeChat Url', window.location.href)
        
  $.ajax({
   url: `https://xxx.com/api/xxx`,
   dataType: 'json',
   success: function (res) {
    console.log('WeChatConfig', res)
    if (Number(res.retcode) === 200) {
     const data = res.data // 根据实际情况返还的数据进行赋值
     const { signature, timestamp, noncestr } = data

     try {
      wx.config({
       // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
       appId: APP_ID, // 必填，公众号的唯一标识
       timestamp: timestamp, // 必填，生成签名的时间戳
       nonceStr: noncestr, // 必填，生成签名的随机串
       signature: signature, // 必填，签名
       jsApiList: ['chooseImage'], // 必填，需要使用的JS接口列表（此处随意一个接口即可）
       openTagList: ['wx-open-launch-weapp'] // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
      })
     } catch (error) {
      alert('wx config error' + JSON.stringify(error))
     }

     /**
      * config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后。
      * config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。
      * 对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中
      * */
     wx.ready(function (res2) {
      console.log('ready', res2)

      const launchBtn = document.getElementById('launch-btn')
      const path = searchParams.get('path')
      const mid = searchParams.get('mid')
      const eid = searchParams.get('eid')
      const entrance = searchParams.get('entrance')

      const baseURL = decodeURIComponent(path)
      const appendURL = baseURL
      console.log('baseURL', baseURL)
      launchBtn.setAttribute('appid', CONFIG.appid)


      launchBtn.addEventListener('ready', function (e) {
       console.log('开放标签 ready', e)
      })
      launchBtn.addEventListener('launch', function (e) {
       console.log('开放标签 success')
      })
      launchBtn.addEventListener('error', function (e) {
       console.log('开放标签 fail', e.detail)
      })
     })

     // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名
     wx.error(function (err) {
      console.log('error', err)
     })
    }
   }
  })
 } else if (isDesktop) {
  // 在 pc 上则给提示引导到手机端打开
  var containerEl = document.getElementById('desktop-web-container')
  containerEl.classList.remove('hidden')
  containerEl.classList.add('full', 'desktop-web-container')
 } else {
  var containerEl = document.getElementById('public-web-container')
  containerEl.classList.remove('hidden')
  containerEl.classList.add('full', 'public-web-container')

  var c = new cloud.Cloud({
   // 必填，表示是未登录模式
   identityless: true,
   // 资源方 AppID
   resourceAppid: 'wx5a3d6bccdb2453a1', // <!-- 小程序 AppID -->
   // 资源方环境 ID
   resourceEnv: '云开发环境 ID' // <!-- 小程序 云开发 -->
  })
  await c.init()
  window.c = c

  var buttonEl = document.getElementById('public-web-jump-button')
  var buttonLoadingEl = document.getElementById('public-web-jump-button-loading')
  try {
   await openWeapp(() => {
    buttonEl.classList.remove('weui-btn_loading')
    buttonLoadingEl.classList.add('hidden')
   })
  } catch (e) {
   buttonEl.classList.remove('weui-btn_loading')
   buttonLoadingEl.classList.add('hidden')
   throw e
  }
 }
})

async function openWeapp(onBeforeJump) {
 var c = window.c
 const res = await c.callFunction({
  name: 'public',
  data: {
   action: 'getUrlScheme'
  }
 })
 console.warn(res)
 if (onBeforeJump) {
  onBeforeJump()
 }
 location.href = res.result.openlink
}

```

对应html如下

```html
<html>
 <head>
  <title>DEMO</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1" />
  <script>
   window.onerror = (e) => {
    console.error(e)
    alert('发生错误' + e)
   }
  </script>
  <!-- 调试用的移动端 console -->
  <!-- <script src="http://cdn.jsdelivr.net/npm/eruda"></script>
    <script>eruda.init();</script> -->
  <!-- 公众号 JSSDK -->
  <script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
  <!-- 云开发 Web SDK -->
  <script src="https://res.wx.qq.com/open/js/cloudbase/1.1.0/cloud.js"></script>
  <script src="./js/index.js"></script>
  <link rel="stylesheet" href="./css/index.css" />
 </head>
 <body>
  <div class="page full">
   <div id="public-web-container" class="hidden">
    <p class="">正在打开 “风行视频”...</p>
    <!-- replace -->
    <a id="public-web-jump-button" href="javascript:" class="weui-btn weui-btn_primary weui-btn_loading" onclick="openWeapp()">
     <span id="public-web-jump-button-loading" class="weui-primary-loading weui-primary-loading_transparent">
      <i class="weui-primary-loading__dot"></i>
     </span>
     打开小程序
    </a>
   </div>
   <div id="wechat-web-container" class="hidden">
    <div class="weapp-container">
     <img class="weapp-img" src="http://img.funshion.com/sdw?oid=449aa7e594009fa58e577cec56800af0&w=0&h=0" alt="" />
     <div class="weapp-name">小程序名称</div>
     <div class="weapp-box">
      <div>小程序</div>
     </div>
    </div>
    <!-- replace -->
    <!-- 跳转小程序的开放标签。文档 https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html -->
    <wx-open-launch-weapp id="launch-btn">
     <template>
      <button
       style="
        width: 200px;
        height: 45px;
        text-align: center;
        font-size: 17px;
        display: block;
        margin: 0 auto;
        padding: 8px 24px;
        border: none;
        border-radius: 4px;
        background-color: #07c160;
        color: #fff;
       "
      >
       打开小程序
      </button>
     </template>
    </wx-open-launch-weapp>
   </div>
   <div id="desktop-web-container" class="hidden">
    <p class="">请在手机打开网页链接</p>
   </div>
  </div>
 </body>
</html>

```

参考文档

- [微信 静态网站 H5 跳小程序](https://developers.weixin.qq.com/minigame/dev/wxcloud/guide/staticstorage/jump-miniprogram.html)
- [微信 开放标签说明文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html#%E8%B7%B3%E8%BD%AC%E5%B0%8F%E7%A8%8B%E5%BA%8F%EF%BC%9Awx-open-launch-weapp)
- [微信 JS-SDK说明文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#10)
- [微信 JS 接口签名校验工具](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign)

参考文章

- [公众号JSSDK + 开放标签调试](https://juejin.cn/post/7021830127042428964#heading-4)
- [h5跳转小程序](https://blog.51cto.com/u_16099335/9298174)

---
[微信-网页开发-授权](https://juejin.cn/post/7150570928622010405)

[微信-对接支付](https://juejin.cn/post/7098525649744166942#heading-6)
