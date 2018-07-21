var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Add the options instead of the string
var StatesSchema = new Schema({
    Name: String,
    NextOptions: String
});

module.exports = mongoose.model('State',StatesSchema);