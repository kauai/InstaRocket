const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const cors = require('cors')

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb://instarocket:instarocket2012@ds257732.mlab.com:57732/instarocket',{
    useNewUrlParser:true
})

app.use((req,res,next) => {
     req.io = io
     next()
})

app.use(cors())
app.use('/files',express.static(path.resolve(__dirname,'..','uploads','resized')))
app.use(express.json())//com json
// app.use(express.urlencoded({ extended: true })) 
app.use(require('./routes'))

const port = process.env.PORT || 3001

server.listen(port,() => {
    console.log(`servidor rodando na porta ${port}`)
})