'use strict'

// <h5>Action: {{this.action}}</h5>
// <h5>Title: {{this.title}}</h5>
// <h5>User: {{this.user}}</h5>
// <h5>Text: {{this.text}}</h5>

const socket = window.io()

const comment = document.querySelector('.comment-container')

socket.on('issues', function (data) {
  comment.innerHTML += '<h5>' + 'Action: ' + data.action + '</h5>'
  comment.innerHTML += '<h5>' + 'Title: ' + data.title + '</h5>'
  comment.innerHTML += '<h5>' + 'User: ' + data.user + '</h5>'
  comment.innerHTML += '<h5>' + 'Text: ' + data.text + '</h5>'
})
