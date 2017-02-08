
const express = require('express')
const controller = require('./article.controller')

const router = express.Router()

//后台管理
router.post('/article',controller.addArticle)
router.get('/articleList',controller.getArticleList)
router.get('/article/:id',controller.getArticle)
