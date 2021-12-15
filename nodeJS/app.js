const express = require("express");
const goodsGetter = require('./routers/goods')
const goodsRouter = require("./routes/goods");
const userRouter = require("./routes/user.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 3000;
const path = require("path");

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("connected", () => {
    console.log("몽고DB에 연결되었씁니다!!");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use("/api", goodsGetter);
app.use("/goods", goodsRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.redirect("/goods");
});

app.get("/detail", (req, res) => {
    res.render("detail");
});

app.get("/cart", (req, res) => {
    res.render("cart");
});

app.get("/order", (req, res) => {
    res.render("order");
});

app.listen(port, () => {
    console.log(`listening port is ${port}`);
});
