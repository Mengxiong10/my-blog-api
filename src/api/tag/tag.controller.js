const mongoose = require('mongoose')

const Tag = mongoose.model('Tag')

/**
 * 添加标签
 * Post /tag
 * {name:'tag'}
 */

exports.addTag = function (req, res, next) {
  let error_msg
  const tagName = req.body.name
  if (!tagName) {
    error_msg = '标签不能为空'
    return res.status(400).send({error_msg})
  }
  Tag.findOne({name: tagName}).then(function (tag) {
    if (tag) {
      return res.status(400).send({error_msg: '标签名已存在'})
    } else {
      return Tag.create(req.body).then(data => res.status(200).json({data}))
    }
  }).catch(next)
}
/**
 * 获取标签列表
 * GET /tag/list
 */
exports.getTagList = function (req, res, next) {
  Tag.find()
     .sort('name')
     .then((data) => res.status(200).json({data}))
}
/**
 * 删除标签
 * DELETE /tag/:id
 */
exports.delTag = function (req, res, next) {
  const id = req.params.id
  return Tag.findByIdAndRemove(id).then(() => res.sendStatus(200)).catch(next)
}

/**
 * 更新标签
 * PUT /tag/:id
 */

exports.updateTag = function (req, res, next) {
  const id = req.params.id
  const tagName = req.body.name
  if (req.body._id) {
    delete req.body._id
  }
  Tag.findOne({name: tagName}).then(function (tag) {
    if (tag) {
      return res.status(400).send({error_msg: '标签名已存在'})
    } else {
      return Tag.findByIdAndUpdate(id, req.body, {new: true})
                      .then((data) => res.status(200).json({data}))
                      .catch(next)
    }
  }).catch(next)
}
