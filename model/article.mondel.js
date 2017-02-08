// 文章表

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ArticleSchema = new Schema({
  title:{
    type:String,
    unique:true
  },
  content:String,
  //0:草稿 1:已发布
  status:{
    type:Number,
    default:0
  },
  created:{
    type:Date,
    default:Date.now
  },
  publish_time: {
		type: Date,
		default: Date.now
	},
  updated: {
    type: Date,
    default: Date.now
  }
})

let Article = mongoose.model('Article',ArticleSchema)

Promise.promisefyAll(Article)
Promise.promisefyAll(Article.prototype)

module.exports = Article


