var express = require('express');
var app = require('../app');
var router = express.Router();
// const {
//   login
// } = require('../api/data/login.js')
const fs = require('fs')
const axios = require('../api/requset.js')

var request = require('request')
// router.get('/api/iuctrip/operator/login/checkcode', async (req, res) => {
//   // res.setHeader("Content-Type", 'image/jpeg');
//   request({
//     method: "POST",
//     headers: {
//       'Accept-Encoding': 'gzip, deflate'
//     },
//     encoding: null,
//     url: global.baseUrl + '/api/iuctrip/operator/login/checkcode',
//   }, (error, response, body) => {
//     console.log(body, '111')
//     res.set('Content-Type', 'image/jpeg;');
//     res.send(body)
//   });
//   // await axios.get('/api/iuctrip/operator/login/checkcode', req.body)
//   //   .then(data => {
//   //     res.send(data)
//   //   })
//   //   .catch(err => {
//   //     console.log(err, 'err')
//   //     res.send(err)
//   //   })
//   // res.send(iutrip)

// })

module.exports = router;