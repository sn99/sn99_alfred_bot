var telegramBot = require('node-telegram-bot-api');

var token = '706018985:AAEFsF9381kcoMQU-YGFaeEFcF2xVNlS_1Q';

var api = new telegramBot(token, {polling: true});

api.onText(/\/help/, function (msg, match) {

    var fromId = msg.from.id;

    api.sendMessage(fromId, "Now what can I do ... Nothing as that rascal human developer is lazy ◉_◉");

});

api.onText(/\/start/, function (msg, match) {

    var fromId = msg.from.id;

    api.sendMessage(fromId, "They call me Alfred, Master !" +

        "\nI can help you in getting the ... let's say anything I can !" +

        "\n\nTo help you I just have few commands.\n/help\n/start");

});

console.log("Alfred to your service. Start conversations in your Telegram.");