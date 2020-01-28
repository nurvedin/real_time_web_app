'use strict'

const express = require('express')
const hbs = require('express-hbs')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const socket = require('socket.io')

// Setup view engine.
app.engine('hbs', hbs.express4({
  defaultLayout: path.join(__dirname, 'views', 'layouts', 'default'),
  partialsDir: path.join(__dirname, 'views', 'partials')
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// Serve static files.
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

// Parse application/x-www-form-urlencoded.
app.use(express.urlencoded({ extended: false }))

app.use('/', require('./routes/homeRouter'))

const server = app.listen(3000, () => {
  console.log('Server started on http://localhost:3000')
  console.log('Press Ctrl-C to terminate...')
})

const io = socket(server)

io.on('connection', function(socket) {
  console.log('Made socket connection')
  io.emit('test', 'Message')
  // socket.on('issues', function(data) {
  //   io.sockets.emit('issues', data)
  // })
})

app.post('/', async (req, res) => {
  console.log(req.body.action)
  console.log(req.body.issue.title)
  console.log(req.body.issue.user.login)
  console.log(req.body.comment.body)
  const notification = {
    action: req.body.action,
    title: req.body.issue.title,
    user: req.body.issue.user.login,
    text: req.body.comment.body
  }

  io.emit('issues', notification)
})