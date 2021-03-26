var express = require('express');
var router = express.Router();
const api = require('../api/login/api.js')
const {
  login
} = require('../api/login/data.js')
const axios = require('../api/requset.js')
const fs = require('fs')

router.get(api.checkcode, async (req, res, next) => {
  // res.setHeader('Content-Type', 'application/octet-stream');
  await axios.get(api.checkcode, req.body)
    .then(data => {
      console.log(data, 'data')
      res.send(data)
      // fs.readFile(data, (err, a) => {
      //   if (err) throw err;
      //   console.log(a)
      // });
      // const cs = fs.createReadStream(data);
      // cs.on("data", chunk => {
      //   console.log(chunk, 'chunk')

      //   res.write(chunk);
      // })
      // cs.on("end", () => {
      //   res.status(200);
      //   res.end();
      // })
    })
    .catch(err => {
      res.send(err)
    })
  // request.get({
  //     url: `${CONFIG.api.speechMark}/file/download?filePath=${req.body.filePath}`,
  //     json: req.body,
  //     gzip:true,
  //     headers:{
  //         'Content-Type': 'application/octet-stream',
  //         'usertoken': req.headers.usertoken,
  //     },
  // }).on('response', function(response) {
  //     console.log(response.statusCode) // 200
  //     console.log(response.headers)
  //     // console.log(response.headers['content-type']) // 'image/png'
  //     // res.headers['content-type'] = response.headers['content-type']
  //     this.pipe(res)
  //   });
});


// router.get(api.login, function (req, res, next) {
//   console.log(req, "req");
//   res.json({
//     "code": 200,
//     "data": login
//   })
// });

// router.post(/\/*/, async (req, res) => {
//   console.log(req, 'req')
//   if (req.method == "GET") {
//     await axios.get(req.url, req.body)
//       .then(data => {
//         res.send(data)
//       })
//       .catch(err => {
//         res.send(err)
//       })
//   } else {
//     await axios.post(req.url, req.body).then(data => {
//         res.send(data)
//       })
//       .catch(err => {
//         res.send(err)
//       })
//   }
// })

// router.post(api.logout, async (req, res) => {
//   await axios.post(api.logout, req.body)
//     .then(data => {
//       res.send(data)
//     })
//     .catch(err => {
//       res.send(err)
//     })
// })
// router.post(api.login, async (req, res) => {
//   await axios.post(api.login, req.body)
//     .then(data => {
//       res.send(data)
//     })
//     .catch(err => {
//       res.send(err)
//     })
// })
module.exports = router;