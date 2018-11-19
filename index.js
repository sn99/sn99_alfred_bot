const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const TOKEN = '706018985:AAEFsF9381kcoMQU-YGFaeEFcF2xVNlS_1Q';


const options = {
    polling: true
};

/*
const options = {
    webHook: {
        port: 443
    }
};
*/

const api = new TelegramBot(TOKEN, options);

NTBA_FIX_319 = 2;

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