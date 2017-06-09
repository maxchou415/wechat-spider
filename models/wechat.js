const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost/wechat`)

const Schema = mongoose.Schema

const wechatSchema = new Schema({
    wechatId: { type: String },

    data: [{
      title: { type: String },
      digest: { type: String },
      author: { type: String }
    }],

    created_at: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('wechat', wechatSchema)
