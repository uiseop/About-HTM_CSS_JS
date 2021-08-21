const mongoose = require("mongoose");

const { Schema } = mongoose;
// DB안에 새로운 테이블과 속성을 만들어줌
// required는 필수요소, unique는 중복을 피하기 위해
// type은 type을 정의 JS로
const goodsSchema = new Schema({
  goodsId: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  thumbnailUrl: {
    type: String
  },
  category: {
    type: String
  },
  price: {
    type: Number
  }
});

module.exports = mongoose.model("Goods", goodsSchema);