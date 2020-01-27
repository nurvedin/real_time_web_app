'use strict'

const fetch = require('node-fetch')
const io = require('socket.io-client')

// personal token d65a11ab33e2a2ef0fa68df8aad8002713ea162d

const getIssues = async (req, res) => {
  const repos = await fetch('https://api.github.com/repos/1dv523/nd222dp-examination-3/issues?access_token=760fab9982c249e11253d603bf3dc6d46eb75a75')
  const viewData = await repos.json()
  res.render('home/index', { viewData: viewData })
}

const webHook = async (req, res) => {
  console.log(req.body)
  const socket = io.connect('http://localhost:3000/')
  console.log(socket)
}

module.exports = { getIssues, webHook }
