var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
    User.find({}, function(err, docs) {
        if (err) {
            res.end('Error');
            return next();
        }
        var requestData = {
            data: docs,
            status: 200,
            message: "请求成功"
        }
        res.jsonp(requestData);
    });
});
var dataSuccess = {
    status: '100',
    msg: '登录成功',
    data: true
};
router.post('/login', function(req, res, next) {
    // 打印post请求的数据内容
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.password);
    res.end(JSON.stringify(dataSuccess));
    var user = new User({
        uid: 1,
        password: req.body.password,
        username: req.body.username
    })

    user.save(function(err) {
        if (err) {
            res.end('Error');
            return next();
        }
    })
});

// 删除指定数据
router.post('/del', function(req, res, next) {
    var userId = req.body.userId;
    User.remove({ _id: userId }, function(err, docs) {
        if (err) console.log(err);
        console.log('删除成功：' + docs);

    });
    var delSuccess = {
        status: '100',
        msg: '删除成功',
        data: true
    };
    res.end(JSON.stringify(delSuccess));
});

module.exports = router;
