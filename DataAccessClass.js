const configurations = require('./configurations');
const BotUser = require('./BotUser.model'); 
const UserState = require('./UserState.model');
const mongoose = require('mongoose');
const Cryptr = require('cryptr');


var mongoDB = configurations.mongoDBConnectionString;


//Users:

//Not sure if it is userID/ChatId
//Try to use the options for optional parameters.
function addUserToDB(userName,password,userID){
    cryptr = new Cryptr(configurations.secretForEncryption);
    const encryptedPassword = cryptr.encrypt(password);

    //Make sure it fits to the model.
    Task.create({
        UserName: userName,
        Password: encryptedPassword,
        userId:userID
    },
    function(err,herrr){
        if(err){
            return res.send("Error");
        }
        else{
            return res.send("OK");
        }
    });
    

}

function CheckIfUserExist(){

}

function UpdateUser(){

}

function DeleteUser(){

}

//Get the id of the state of the conversion with the bot.


//#####################################################################

//States:

function GetUserCurrentState(userID){

}

function GetNextOptions(state){

}

//#####################################################################



//Make it in one call
module.exports.addUserToDB = AddUserToDB();
module.exports.updateUser = UpdateUser();
module.exports.deleteUser = DeleteUser();
module.exports.GetUserCurrentState = GetUserCurrentState();
module.exports.GetNextOptions = GetNextOptions();
module.exports.CheckIfUserExist = CheckIfUserExist();


