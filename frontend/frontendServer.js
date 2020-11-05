const { EPERM } = require('constants');
const express = require('express')
const app = express()

const port = 8080;
let path = require('path')

app.use(express.static('JS Files'))
app.use(express.static('css'))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/home.html'))
})

app.get('/resgistered-pets', function(req, res){
    res.sendFile(path.join(__dirname + '/registeredPets.html'))
})

app.listen(port, function(){
    console.log(`app is listening at port ${port}...`)
})