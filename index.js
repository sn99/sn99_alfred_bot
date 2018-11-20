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

api.on('message', (msg) => {
    const rejection = "wanna fuck";

    const fromId = msg.chat.id;

    if (msg.text.includes(rejection)) {
        api.sendMessage(fromId, "I am afraid not Master !!!" +
            "\n\nAlthough this may help : <a href=\"https://www.pornhub.com/\">Enjoy ;)</a>", {parse_mode: "HTML"})
    }
});

api.onText(/\/commands/, (msg) => {

    const fromId = msg.chat.id;

    api.sendMessage(fromId, "The commands available are : \n\n/about\n/commands\n/nomonday\n/start\n/tea");

});

api.onText(/\/help/, (msg) => {

    const fromId = msg.chat.id;

    api.sendMessage(fromId, "Now what can I do ... Most probably enter marvel universe and use infinity stones to clean this nasty ol dust (☞ﾟ∀ﾟ)☞\n" +
        "Plus you are on your own see /commands")
});

api.onText(/\/start/, (msg) => {

    const fromId = msg.chat.id;

    api.sendMessage(fromId, "They call me Alfred, Master !!!" +

        "\nI can help you in getting the ... let's say anything I can !!!" +

        "\n\nTo help you I just have few commands.\n/help\n/about\n/commands\n/start");

});

api.onText(/\/tea/, (msg) => {
    const fromId = msg.chat.id;

    api.sendMessage(fromId, "And how would you like that sir ?", {
        "reply_markup": {
            "keyboard": [["Spicy"], ["Sugary"], ["Ya fir bole to ekdum kadak"]]
        }
    });
});

api.onText(/\/about/, (msg) => {
    const fromId = msg.chat.id;

    api.sendMessage(fromId, "The bot was created by <a href=\"https://github.com/sn99\">Siddharth Naithani</a>", {parse_mode: "HTML"})
});

api.onText(/\/nomonday/, (msg) => {

    const fromId = msg.chat.id;

    api.sendPhoto(fromId, "https://www.commitstrip.com/wp-content/uploads/2018/11/Strip-Conseil-da%C3%AEn%C3%A9s-650-finalenglish.jpg",
        {caption: "Here we go ! \nNever push on Weekends ... never !!!"});

});

console.log("Alfred to your service. Start conversations in your Telegram.");