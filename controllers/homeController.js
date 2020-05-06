'use strict'

const fetch = require('node-fetch')

// const EventEmitter = require('events').EventEmitter
// const emitter = new EventEmitter()

// personal token d65a11ab33e2a2ef0fa68df8aad8002713ea162d

const getIssues = async (req, res) => {
  const repos = await fetch('github repo with access token')
  const viewData = await repos.json()
  res.render('home/index', { viewData: viewData })
}

module.exports = { getIssues }
