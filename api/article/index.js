
const express = require('express')
const controller = require('./article.controller')

const router = express.Router()

//后台管理
router.post('/',controller.addArticle)
router.get('/:id',controller.getArticle)
router.put('/:id',controller.updateArticle)
router.put('/:id/updateStatus',controller.updateArticleStatus)
router.delete('/:id',controller.delArticle)

router.get('/list',controller.getArticleList)
// router.get('/article/:id',controller.getArticle)

module.exports = router