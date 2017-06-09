const mongoose = require('mongoose')

// database
const Wechat = require('../models/wechat')

module.exports = async (data, next) => {

  let createData = data.map((i) => {
    return {
      wechatId: i.wechatId,
      data: [{
        title: i.title,
        author: i.anthor,
        digest: i.digest
      }]
    }
  })

  let dataInsert = await Wechat.create(createData)
  console.log('done')
}
