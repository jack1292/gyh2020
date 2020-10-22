import {get} from '@/api/axios'

var wx = require("weixin-js-sdk");
// type  true : 发起请求 提交用户信息+加分   false: 正常转发不处理
var share = function (title, desc, img, url, type) {
  //微信分享
  var param = {
    h5Url: encodeURIComponent(window.location.href.split("#")[0])
  };
  get("/store/getWxConfig", param)
    .then(res => {
      wx.config({
        debug: false,
        appId: res.appId, // 必填，公众号的唯一标识
        timestamp: res.timestamp + "", // 必填，生成签名的时间戳
        nonceStr: res.nonceStr, // 必填，生成签名的随机串
        signature: res.signature, // 必填，签名
        jsApiList: [
          "onMenuShareAppMessage",
          "onMenuShareTimeline"
        ] // 必填，需要使用的JS接口列表
      });
      wx.ready(function () {
        wx.checkJsApi({
          jsApiList: [
            "onMenuShareAppMessage",
            "onMenuShareTimeline"
          ], // 需要检测的JS接口列表，所有JS接口列表见附录2,
          success: function (res) {
            wx.onMenuShareAppMessage({
              //分享朋友
              title: title, // 分享标题
              desc: desc, // 分享描述
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: img, // 分享图标
              type: "", // 分享类型,music、video或link，不填默认为link
              dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
              success: function () {
                if (type) {
                  //  发起请求 提交用户信息，给当前用户添加积分
                  console.log(123)
                }
              }
            });
            wx.onMenuShareTimeline({
              //分享朋友圈
              title: title, // 分享标题
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: img, // 分享图标
              success: function () {
                if (type) {
                  //  发起请求 提交用户信息，给当前用户添加积分
                  console.log(123)
                }
              }
            });
          }
        });
      });
    })
    .catch(err => {
      console.log(err);
    });
};
export default share;