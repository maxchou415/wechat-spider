const request = require('request-promise-native')

module.exports = async (url, wechatPublicAcoountId) => {
  try {
    console.log(url)
    let urlConfig = {
      url: url,
      headers: {
        referer: `http://weixin.sogou.com/weixin?type=1&s_from=input&query=${wechatPublicAcoountId}`
      }
    }

    let getBodyContent = await request(urlConfig)

    // String parser
    let bodyContentParser = getBodyContent.split('var msgList = ')
    let objectParser = bodyContentParser[1].split('seajs.use("sougou/profile.js");')

    // remove string after string of callback
    let listStr = objectParser[0].slice(0, -11)

    // coverate string to object
    let listObj = JSON.parse(listStr)

    return listObj.list

  } catch (e) {
    console.log('Error 2', e)
  }
}
