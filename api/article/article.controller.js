
const mongoose = require('mongoose')
const Article = mongoose.model('Article')

//后台管理

/*
  POST /article
  添加博客
*/
exports.addArticle = function (req,res,next) {
  let error_msg
  if (!req.body.title) {
    error_msg = '标题不能为空'
  }else if (!req.body.content) {
    error_msg = '内容不能为空'
  }
  if (error_msg) {
    return res.status(400).send({error_msg})
  }
  req.body.status = 1
  Article.create(req.body).then(() => res.sendStatus(200)).catch(next)

}

exports.updateArticle = function (req,res,next) {

  let id = req.params.id
  let error_msg
  if (req.body._id) {
    delete req.body._id
  }
  if (!req.body.title) {
    error_msg = '标题不能为空'
  }else if (!req.body.content) {
    error_msg = '内容不能为空'
  }
  if (error_msg) {
    return res.status(400).send({error_msg})
  }
  req.body.updated_time = new Date()

}


/*
  DELETE /article
  批量删除博客
*/
exports.delArticle = function (req,res,next) {
  const id = req.body.id
  let error_msg
  if (!id) {
    error_msg = '参数错误'
    return res.status(400).send({error_msg})
  }
  if (!Array.isArray(id)) {
    id = [id]
  }
  Article.where('_id').in(id).remove().then(() => res.sendStatus(204)).catch(next)

}

/*
  GET /article/list
  获取博客列表
*/

exports.getArticleList = function (req,res,next) {

  let q = {
    page: parseInt(req.query.page) || 1,
    perPage: parseInt(req.query.per_page) || 10,
    title: req.query.title || '',
    sort:req.query.sort || 'release_time',
    order:req.query.order === 'asc' ? 'asc' : 'desc',
  }
  let start = (q.page - 1) * q.perPage
  if (q.order === 'desc') {
    q.sort = '-' + q.sort
  }

  Article.where('title',new RegExp(q.title,'i'))
    .sort(q.sort)
    .skip(start)
    .limit(q.perPage)
    .exec()
    .then(data => Article.count().then(total => res.status(200).json({data,total})))
    .catch(next)
}



