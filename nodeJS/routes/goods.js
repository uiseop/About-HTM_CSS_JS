const express = require("express");
const Goods = require("../schemas/Goods");
const Cart = require("../schemas/Cart");

var router = express.Router();

router.get("/", async (req, res) => {
    const goods = await Goods.find({})

    res.render("index");
});

router.get("/list", function (req, res, next) {
    res.send("Router 상품 목록 페이지");
});

router.get("/detail", function (req, res, next) {
    res.send("Router 상품 상세 페이지");
});

module.exports = router;
