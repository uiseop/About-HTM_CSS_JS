const mongoose = require("mongoose");

const connect = () => {
// 몽고DB와의 연결을 코드로 구현
  mongoose
    .connect("mongodb://localhost:27017/voyage", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      ignoreUndefined: true
    })
    .catch(err => console.log(err));
};

// 연결이 되지 않으면 에러처리로 알려줌
mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});
// connect라는 컴포넌트를 생성해서 넘겨준거라고 보자
module.exports = connect;

