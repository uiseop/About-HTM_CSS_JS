const express = require('express')
const app = express()
const port = 3000

const goodsRouter = require('./routes/goods.js')
const userRouter = require('./routes/user.js')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
// 데이터 가공을 위해 미리 미들웨어를 선언
// 추후 있을 post의 값들(body) 처리하기 위해 선언한데
app.use(express.static('public'));
// static 파일을 제공하는 모듈웨어래 // 브라우저에서 public/images/image.png (x) images/image.png로 바로 불러올 수 있음

app.use('/goods',goodsRouter)
app.use('/user',userRouter)

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
  let name = req.query.name;
  res.render('test', {name}); //test.js파일명으로 {name}을 보내줌
})

app.get('/home', (req,res)=>{
    res.render('index')
})

app.get('/detail',(req,res)=>{
    res.render('detail')
})

app.listen(port,()=>{
    console.log(`listening port is ${port}`);
})