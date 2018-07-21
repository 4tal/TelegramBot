const configurations = require('./configurations');
const BotUser = require('./BotUser.model'); 
const UserState = require('./UserState.model');
const mongoose = require('mongoose');
const Cryptr = require('cryptr');


var mongoDB = configurations.mongoDBConnectionString;


//Not sure if it is userID/ChatId
//Try to use the options for optional parameters.
function addUserToDB(userName,password,userID){
    cryptr = new Cryptr(configurations.secretForEncryption);
    const encryptedPassword = cryptr.encrypt(password);

    


}

function updateUser(){

}

function deleteUser(){

}

//Get the id of the state of the conversion with the bot.
function getUserState(){

}

module.exports.addUserToDB = addUserToDB();
module.exports.updateUser = updateUser();
module.exports.deleteUser = deleteUser();
