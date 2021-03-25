var express = require('express');
var router = express.Router();
 // 引入Mock对象
const Mock = require('mockjs')
 
const generateData = () => {
  // 使用Mock.mock方法来生成mock数据
    return Mock.mock({
      "code": 200,
      "data|12": [
        {
          "id": "@id",
          "title": "@ctitle(15, 25)",
          "author": "@cname",
          "volume": "@int(100, 300)",
          "createAt": "@int(10000000000000, 1554363040517)"
        }
      ]
    })
  }
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(generateData())
});

module.exports = router;
