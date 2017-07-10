var express = require('express');
var router = express.Router();

/* GET home page. */
 router.get('/', function(req, res, next) {
   var fortunes = [
   "沃克是谁",
   "沃克很厉害的",
   "大沃克",
   "沃克是大牛",
   ];
   var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
   // res.json({
   //     status: 200,
   //     message: randomFortune ,
   //     data: []
   //   });
    res.render('index', { title: 'Express',fortune: randomFortune });
 });

module.exports = router;
