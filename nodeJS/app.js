const express = require('express')
const app = express()
const port = 3000

const goodsRouter = require('./routes/goods.js')
const userRouter = require('./routes/user.js')

app.use('/goods',goodsRouter)
app.use('/user',userRouter)

app.listen(port,()=>{
    console.log(`listening port is ${port}`);
})