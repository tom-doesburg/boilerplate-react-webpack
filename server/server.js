const path = require('path')
const express = require('express')

const request = require('superagent')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/xkcd/:id', (req, res) => {
    request.get('http://xkcd.com/' + req.params.id + '/info.0.json')
        .then((response) => res.json(response.body))
})

module.exports = server
