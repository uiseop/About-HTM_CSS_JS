const mongoose = require("mongoose");

// mongoose안에 있는 Schema를 가져옴
const { Schema } = mongoose;

const cartSchema = new Schema({
    goodsId:{
        type: Number,
        required : true,
        unique : true
    },
    quantity : {
        type: Number,
        required : true,
    }
})

module.exports = mongoose.model("Cart", cartSchema)