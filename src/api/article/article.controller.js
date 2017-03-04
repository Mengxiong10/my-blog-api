
const mongoose = require('mongoose')
const Article = mongoose.model('Article')

//后台管理

/*
  添加博客
  POST /article
  {
    "title":"f",
    "content":"f",
    "tags":[_id]
  }
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
  return Article.create(req.body).then(() => res.sendStatus(200)).catch(next)
}

/*
  更新博客
  PUT /article
  {
    "_id":1,
    "title":"f",
    "content":"f",
    "tags":[_id]
  }

*/
exports.updateArticle = function (req,res,next) {
  const id = req.params.id
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
  req.body.updated_at = new Date()
  return Article.findByIdAndUpdate(id,req.body).then(() => res.sendStatus(200)).catch(next)
}

/*
  PUT /article/:id/updateStatus
  更新博客状态
*/
exports.updateArticleStatus = function (req,res,mext) {
  const id = req.params.id
  let body = {
    release_at: new Date(),
    status: 1
  }
  return Article.findByIdAndUpdate(id,body).then(() => res.sendStatus(200)).catch(next)
}

/*
  DELETE /article/:id
  删除博客
*/
exports.delArticle = function (req,res,next) {
  const id = req.params.id
  return Article.findByIdAndRemove(id).then(() => res.sendStatus(204)).catch(next)
}

/*
  获取单篇博客
  GET /article/:id
*/
exports.getArticle = function (req,res,next) {
  const id = req.params.id
  return Article.findById(id).then(data => res.status(200).json({data})).catch(err => res.sendStatus(500))
}

/*
  GET /article/list
  获取博客列表
*/
exports.getArticleList = function (req,res,next) {
  console.log(req)
  let q = {
    page: parseInt(req.query.page) || 1,
    perPage: parseInt(req.query.per_page) || 10,
    title: req.query.title || '',
    sort:req.query.sort || 'created_at',
    order:req.query.order === 'asc' ? 'asc' : 'desc',
  }
  let start = (q.page - 1) * q.perPage
  if (q.order === 'desc') {
    q.sort = '-' + q.sort
  }
  return Article.find()
    .sort(q.sort)
    .skip(start)
    .limit(q.perPage)
    .then(data => Article.count().then(total => res.status(200).json({data,total})))
    .catch(next)
}



