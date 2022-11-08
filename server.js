const express = require('express')
const app = express()
const PORT = 5000
const teams = require('./data/mlb-teams')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
  const teamName = req.params.name.toLowerCase()
  if (teams[teamName]) {
    res.json(teams[teamName])
  } else {
    res.json(teams['unknown'])
  }
})

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}! Let's Gooo...`)
})
