var express = require('express');
var app = require('../app');
var router = express.Router();
const {
    login
} = require('../api/data/login.js')
const fs = require('fs')
const axios = require('../api/requset.js')

// var request = require('request')
router.post('/api/zhihuijingqu/user/login', async (req, res) => {
    res.send(login)
})

module.exports = router;