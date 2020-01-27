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
})