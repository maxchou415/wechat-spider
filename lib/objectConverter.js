const request = require('request-promise-native')

module.exports = async (wechatCallbackObject, wechatPublicAcoountId) => {
  let callbackObj = wechatCallbackObject
  let wechatId = wechatPublicAcoountId
  let obj = callbackObj.map((i) => {
    // prefix
    data = i.app_msg_ext_info

    return {
      wechatId,
      title: data.title,
      digest: data.digest,
      author: data.author
    }
  })

  return obj
}
