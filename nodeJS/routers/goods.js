const express = require("express");
const Goods = require("../schemas/Goods");
const Cart = require("../schemas/Cart");

const router = express.Router();


router.get("/goods", async (req, res, next) => {
  try {
    // url 뒤에 ?의 값이 query여 => 이 값을 가져옴
    const { category } = req.query;
    // 오름차순으로 가져온다
    if(category){
      const goods = await Goods.find({ category }).sort("-goodsId");
      console.log(goods , typeof(goods))
      res.json({ goods: goods });
    }
    else{
      const goods = await Goods.find({}).sort("-goodsId");
      res.json({ goods: goods });
    }
    // 상품들은 지금 array형식이라 json형식으로 만들어 보내줌
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

router.delete("/goods/:goodsId/cart", async (req,res) => {
  const { goodsId } = req.params
  const isGoodsInCart = await Cart.find({ goodsId })
  // Delete는 body를 넘겨주지 않음
  if (isGoodsInCart.length > 0){
    await Cart.deleteOne({ goodsId })
  }

  res.send({ result: "success" })
})

router.get("/cart", async (req, res) => {
  const cart = await Cart.find({});
  const goodsId = cart.map(cart => cart.goodsId);

  goodsInCart = await Goods.find()
    .where("goodsId")
    .in(goodsId);

  concatCart = cart.map(c => {
    for (let i = 0; i < goodsInCart.length; i++) {
      if (goodsInCart[i].goodsId == c.goodsId) {
        return { quantity: c.quantity, goods: goodsInCart[i] };
      }
    }
  });

  res.json({
    cart: concatCart
  });
});

router.patch("/goods/:goodsId/cart", async (req, res) =>{
  const { goodsId } = req.params
  const { quantity } = req.body

  const isGoodsInCart = await Cart.find({goodsId})
  if(isGoodsInCart.length > 0){
    await Cart.updateOne({ goodsId },  { $set : { quantity }})
  }

  res.send({ result : "success"})
})

module.exports = router;