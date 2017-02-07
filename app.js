process.env.NODE_ENV = process.envNODE_ENV || 'development'


let express = require('express')
let mongoose = require('mongoose')
let path = require('path')
let fs = require('fs')
let bodyParser = require('body-parser')
// let config = require('./config/env')

//替换Promise
mongoose.Promise = global.Promise = require('bluebird')

//连接数据库
// mongoose.connect(config.mongo.uri,config.mongo.options)

let app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(4000,function () {
  console.log('listening on 4000')
})
