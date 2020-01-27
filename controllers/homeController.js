'use strict'

const github = require('octonode')
const fetch = require('node-fetch')

var client = github.client('d65a11ab33e2a2ef0fa68df8aad8002713ea162d')

// personal token d65a11ab33e2a2ef0fa68df8aad8002713ea162d

client.get('/users/nurvedin/repos', {}, function (err, status, body, headers) {
  if (err) {
    console.log(err)
  }
})

const getIssues = async (req, res) => {
  const repos = await fetch('https://api.github.com/repos/1dv523/nd222dp-examination-3/issues?access_token=d65a11ab33e2a2ef0fa68df8aad8002713ea162d')
  const viewData = await repos.json()
  console.log(viewData)
  res.render('home/index')
}

module.exports = { getIssues }
