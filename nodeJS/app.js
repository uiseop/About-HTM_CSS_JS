var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.listen(3000,function(){
    console.log('server is going on 3000 port!!')
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/', function(req,res){
    res.sendFile(__dirname + "/public/main.html")
});

app.get('/main', function(req,res){
    res.sendFile(__dirname + '/public/form.html')
});

app.post('/email_post', function(req,res){
    // get : req.param('email')
    console.log(req.body.email)
    res.send('<h1>Welcome!' + req.body.email + '</h1>') 
})