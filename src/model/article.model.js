// 文章表

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  content: String,
  // 0:草稿 1:已发布
  status: {
    type: Number,
    enum: [0, 1],
    default: 0
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  visit_count: {			// 访问数
    type: Number,
    default: 1
  },
  created_at: {
    type: Date,
    default: Date.now
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

module.exports = mongoose.model('Article', ArticleSchema)
