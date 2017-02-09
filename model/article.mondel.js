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
  created_time:{
    type:Date,
    default:Date.now
  },
  release_time: {
		type: Date,
		default: Date.now
	},
  updated_time: {
    type: Date,
    default: Date.now
  }
})

let Article = mongoose.model('Article',ArticleSchema)

// Promise.promisifyAll(Article)
// Promise.promisifyAll(Article.prototype)

module.exports = Article


