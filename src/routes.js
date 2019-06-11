const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const { postController,likeController } = require('./controllers')
const routes = express.Router()
const upload = multer(uploadConfig)

console.log('Like',likeController)


routes.get('/posts',postController.index)
routes.post('/posts',upload.single('image'),postController.store)

routes.post('/posts/:id/like',likeController.store)

module.exports = routes


