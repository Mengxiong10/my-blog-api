const mongoose = require('mongoose')

const Tag = mongoose.model('Tag')

/**
 * 添加标签
 * Post /tag
 * {name:'tag'}
 */

exports.addTag = function (req,res,next) {
  let error_msg
  let tagName = req.body.name
  if (!tagName) {
    error_msg = '标签不能为空'
    return res.status(400).send({error_msg})
  }
  Tag.findOne({name:tagName}).then(function (tag) {
    if (tag) {
      return res.status(403).send({error_msg:'标签名已存在'})
    }else{
      return Tag.create(req.body).then(data => res.status(200).json({data}))
    }
  }).catch(next)
}
/**
 * 获取标签列表
 * GET /tag/list
 */
exports.getTagList = function (req,res,next) {
  return Tag.find().sort('name').then((data) => res.status(200).json({data}))
}