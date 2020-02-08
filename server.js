var express = require('express')
var app = express()
app.set('view engine', 'ejs')
var port = process.env.PORT || 8080

app.get('/', function (request, response) {
  response.render('pages/index')
})

app.get('/about', function (request, response) {
  response.end('Ah, where to begin...')
})

app.listen(port)
