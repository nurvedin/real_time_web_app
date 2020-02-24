'use strict'

// <h5>Title: {{this.title}}</h5>
// <h5>{{this.user.login}}</h5>
// <h5>Number of comments: {{this.comments}}</h5>
// <h5>Created: {{this.created_at}}</h5>
// <h5>Updated: {{this.updated_at}}</h5>

// <h5>Action: {{this.action}}</h5>
// <h5>Title: {{this.title}}</h5>
// <h5>User: {{this.user}}</h5>
// <h5>Text: {{this.text}}</h5>

// <h5>Title: {{this.title}}</h5>
// <h5>{{this.repository_url}}</h5>
// <h5>Number of comments: {{this.comments}}</h5>
// <h5>Created: {{this.created_at}}</h5>
// <h5>Updated: {{this.updated_at}}</h5>

// const template = document.createElement('template')
// template.innerHTML = `

// <div>
//  <h5>Action: + data.action</h5>
//  <h5>Title: + data.title</h5>
//  <h5>User: + data.user</h5>
//  <h5>Text: + data.text</h5>
// </div>
// `

const socket = window.io()

// const comment = document.querySelector('.comment-container')
// const issue = document.querySelector('.issue-container')
const breakLine = document.createElement('br')
// const div = document.createElement('div')

socket.on('create-comment', function (data) {
  const comment = document.createElement('div')
  comment.setAttribute('class', 'comment-container')
  const para1 = document.createElement('p')
  const para2 = document.createElement('p')
  const para3 = document.createElement('p')
  const para4 = document.createElement('p')
  para1.innerText += 'Action: ' + data.action
  comment.appendChild(para1)
  para2.innerText += 'Title: ' + data.title
  comment.appendChild(para2)
  para3.innerText += 'User: ' + data.user
  comment.appendChild(para3)
  para4.innerText += 'Text: ' + data.text
  comment.appendChild(para4)
  const col = document.querySelector('#notes')
  col.appendChild(comment)
})
/*
socket.on('open-issue', function (data) {
  issue.innerText += 'Title: ' + data.title
  issue.appendChild(breakLine)
  issue.innerText += 'User: ' + data.user
  issue.appendChild(breakLine)
  issue.innerText += 'Number of comments: ' + data.comment
  issue.appendChild(breakLine)
  issue.innerText += 'Created at: ' + data.created
  issue.appendChild(breakLine)
  issue.innerText += 'Updated at: ' + data.updated
})
*/
