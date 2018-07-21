var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BotUsersSchema = new Schema({
    UserName: String,
    Name: String,
    Email:String
});

module.exports = mongoose.model('BotUser',BotUsersSchema);