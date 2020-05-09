const Discord = require('discord.js');
const bot = new Discord.Client();

const token = require('./token.js');

const commands = require('./commands.js');

bot.on('ready', () =>{
    console.log('Claptrap is online!');
    var test = bot.channels.fetch('707274162460426391');
    console.log(test.guild);
})

bot.on('message', message=>{
    var usercommand = message.content.split(" ");

    if(message.content.toLowerCase() == "hello") {
        message.reply('Hello World!');
    }

    if(usercommand[0] == "r") {
        message.reply("Wylosowana liczba to: " + commands.randomNumber(parseInt(usercommand[1]), parseInt(usercommand[2])));
    }

    usercommand.forEach(comm => {
        if(comm.toLowerCase() == "claptrap") {
            message.reply(commands.claptrapQuote());
            return;
        }
    });

    if(usercommand[0] == "rcu") {
        var channel;

        if(usercommand[1] === undefined)
            channel = bot.channels.fetch("707274162460426391");
        else
            channel = bot.channels.fetch(usercommand[1]);
        console.log(channel);
        message.reply("Wylosowany użytkownik to: " + commands.randomChannelUser(channel));
    }
})

bot.login(token);