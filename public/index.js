'use strict'

// <h5>Action: {{this.action}}</h5>
// <h5>Title: {{this.title}}</h5>
// <h5>User: {{this.user}}</h5>
// <h5>Text: {{this.text}}</h5>

const template = document.createElement('template')
template.innerHTML = `

<div class="template">
  <h5>Action:</h5>
  <h5>Title:</h5>
  <h5>User:</h5>
  <h5>Text:</h5>
</div>

`

const socket = window.io()

socket.on('issues', function (data) {
  console.log(data)
  // io.emit('issues', {
  //   data: data.message
  // })
})
