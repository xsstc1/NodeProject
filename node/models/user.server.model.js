var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    uid: Number,
    username: String,
    createTime: Date,
    password:String,
    lastLogin: Date
});

mongoose.model('User', UserSchema);
