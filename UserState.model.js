var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Learn how to add an array/object for the previous states.
var UserStatesSchema = new Schema({
    UserName: String,
    State: String,
    PreviousStats: String
});

module.exports = mongoose.model('UserState',UserStatesSchema);