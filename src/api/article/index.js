
const express = require('express')
const controller = require('./article.controller')
const auth = require('../../auth')

const router = express.Router()

// 后台管理
router.get('/list', auth.admin, controller.getArticleList)
router.post('/', controller.addArticle)
router.get('/:id', controller.getArticle)
router.put('/:id', controller.updateArticle)
router.put('/:id/status/:status', controller.updateArticleStatus)
router.delete('/:id', controller.delArticle)

module.exports = router
