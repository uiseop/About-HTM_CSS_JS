var express = require('express')
var app = express()
// ajax 통신을 위해 설치해야하는 모듈들
var bodyParser = require('body-parser')

app.listen(3000, function(){
    console.log('hi im 3000 port')
})
// public디렉터리에 정적파일을 사용하겠다.
app.use(express.static('public'))
// ajax통신에서 json형식, 그 외의 다른 형식들을 사용하겠다.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req,res){
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/searchResult', function(req,res){
    // console.log('hello')
    var data = req.body.indata
    var response = {
        data : data + '히으잉ㅇ'
    }

    res.json(response)
})