var express = require("express");
var app = require("../app");
var router = express.Router();
const {
    login,
    merchants
} = require("../api/data/login.js");
const {
    order
} = require("../api/data/order.js");
const fs = require("fs");
const axios = require("../api/requset.js");

router.post("/zhihuijingqu-service/api/zhihuijingqu/user/login", async (req, res) => {
    res.send(login);
});
router.post("/zhihuijingqu-service/api/zhihuijingqu/user/order", async (req, res) => {
    console.log(req.body, 'req');
    res.send(order);
});
router.post("/zhihuijingqu-service/api/zhihuijingqu/user/merchants", async (req, res) => {
    res.send(merchants());
});
module.exports = router;