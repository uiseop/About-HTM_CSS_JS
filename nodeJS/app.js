var express = require('express')
var app = express()

app.listen(3000,function(){
    console.log('server is going on 3000 port!!')
});

app.use(express.static('public'))

app.get('/', function(req,res){
    res.sendFile(__dirname + "/public/main.html")
})

app.get('/main', function(req,res){
    res.sendFile(__dirname + '/public/main.html')
})