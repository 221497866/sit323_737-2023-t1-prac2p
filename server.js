var express = require('express')
var app = express()
var msg = "Hello there! This is a simple web page. Here's a short riddle (: Which cheese is made backwards?"

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send(msg)
})

app.listen(3000)

