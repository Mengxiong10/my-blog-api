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
    enum:[0,1],
    default:0
  },
  created_at:{
    type:Date,
    default:Date.now
  },
  release_at: {
		type: Date,
		default: Date.now
	},
  updated_at: {
    type: Date,
    default: Date.now
  }
})

let Article = mongoose.model('Article',ArticleSchema)

module.exports = Article


