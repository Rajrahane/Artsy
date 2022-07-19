const axios = require('axios')
const express = require('express')
const Authentication = require('./auth/Authentication.js');
const Search = require('./search/Search')

const app = express()
const port = process.env.port || 8090

app.get('/token',async (req,res) => {
    var token = await Authentication.getToken()
    res.send(token)
})
app.listen(port, () => {
    console.log(`Artsy app server listening on port ${port}`)
})

app.get('/search', async (req,res) => {
    var response= await Search.search(req.query.q,req.query.size || 10)
    .then(function(response){
        res.send(response.data)
    })
    .catch(function(error){
        res.status(500).end()
    });
})

app.get('/artists/:id',async (req,res) => {
    var response = await Search.artists(req.params.id)
    res.send(response.data)
})

app.get("/",(req,res) => {
    res.send('Hello World!')
})