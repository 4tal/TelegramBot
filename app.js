const TelegramBot = require('node-telegram-bot-api');
const configuration = require('./configurations');

var telegramToken = configuration.telegramToken;



//TODO:
//FInish the models: (BotUser and BotState)
//Learn how to add the inline messages.
//



/*

bot.on('message', (msg) => {
const chatId = msg.chat.id;
  console.log(msg);
  switch(msg.text) {
    case "News":
        bot.sendMessage(chatId,"https://t.me/mivzakim,https://t.me/MokedGlobal");
        bot.sendMessage(chatId,"https://t.me/MokedGlobal");
        bot.sendMessage(chatId,"https://t.me/mivzakim");
        break;
    case "Development":
        bot.sendMessage(chatId,"https://t.me/mivzakim");
        bot.sendMessage(chatId,"https://t.me/MokedGlobal");
        bot.sendMessage(chatId,"https://t.me/mivzakim");
        break;
    default:

}

// send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'OR Sason a zain !wiz Bot. What would you like to do now? ',{
  "reply_markup": {
      "keyboard": [["News","Development" ,"CC"]]
      }
  });
});


function addUser(){
  mongoose.Promise = global.Promise;
  mongoose.connect(mongoDB, {
      useMongoClient: true
  });

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  //Need to add insert to query
  db.close();
}
*/



/*
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(url, function(err, db) {
  if(err)
  {
    return console.dir(err);
  }
  else
  {
      console.log("Succ");
  }

*/
