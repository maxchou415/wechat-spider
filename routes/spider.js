const router = require('koa-router')()
const request = require('request-promise-native')
const api = require('../lib/index')


router.prefix('/spiders')

router.get('/:wechatPublicAcoountId', async (ctx, next) => {
  try {
    let wechatPublicAcoountId = ctx.params.wechatPublicAcoountId
    let getURL = await api.getURL(wechatPublicAcoountId)
    let getContent = await api.getContent(getURL, wechatPublicAcoountId)
    let converter = await api.objectConverter(getContent, wechatPublicAcoountId)
    let saveData = await api.saveData(converter)

    ctx.status = 200
    ctx.body = {
      data : [],
      message : 'Insert Data Successfully'
    }

  } catch (e) {
    ctx.status = 500
    ctx.body = {
      data : e,
      message : 'Insert Data Failed'
    }
  }

})


module.exports = router
