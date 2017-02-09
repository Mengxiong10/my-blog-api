
const express = require('express')
const controller = require('./article.controller')

const router = express.Router()

//后台管理
router.post('/',controller.addArticle)

router.delete('/',controller.delArticle)

router.get('/list',controller.getArticleList)
// router.get('/article/:id',controller.getArticle)


module.exports = router