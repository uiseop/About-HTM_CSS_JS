const express = require("express");
const Goods = require("../schemas/Goods");
const Cart = require("../schemas/cart");

const router = express.Router();


router.get("/goods", async (req, res, next) => {
  try {
    // url 뒤에 ?의 값이 query여 => 이 값을 가져옴
    const { category } = req.query;
    // 오름차순으로 가져온다
    const goods = await Goods.find({ category }).sort("-goodsId");
    console.log(goods , typeof(goods))
    // 상품들은 지금 array형식이라 json형식으로 만들어 보내줌
    res.json({ goods: goods });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// router의 GET
router.get("/goods/:goodsId", async (req, res) => {
  const { goodsId } = req.params;
  goods = await Goods.findOne({ goodsId: goodsId });
  res.json({ detail: goods });
});
// router의 POST
router.post('/goods', async (req, res) => {
  const { goodsId, name, thumbnailUrl, category, price } = req.body;

  isExist = await Goods.find({ goodsId });
  // 같은게 없을경우 return으로 0이 나옴
  if (isExist.length == 0) {
    await Goods.create({ goodsId, name, thumbnailUrl, category, price });
  }
  res.send({ result: "success" });
});

// const Cart = require("../schemas/cart"); 위로 올려보내서 뭐를 import 하는지 한눈에 보자


router.post("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;
  isCart = await Cart.find({ goodsId });
  if (isCart.length) {
    // 해당 상품인 애 하나한테 적용
    console.log(isCart,quantity);
    await Cart.updateOne({ goodsId }, { $set: { quantity } });
  } else {
    await Cart.create({ goodsId: goodsId, quantity: quantity });
  }
  res.send({ result: "success" });
});

module.exports = router;