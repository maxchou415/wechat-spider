const request = require('request-promise-native')

module.exports = async (wechatPublicAcoountId) => {
  try {

    let urlConfig = {
      url: `http://weixin.sogou.com/weixin?type=1&s_from=input&query=${wechatPublicAcoountId}`
    }

    let getURL = await request(urlConfig)
    let parser = getURL.split(`account_name_0" href="`)
    let secParser = parser[1].split(`">`)
    let URLdecoder = secParser[0].split('&amp;').join('&')
    let url = URLdecoder
    return url
  } catch (e) {
    console.log('Error', e)
  }
}
