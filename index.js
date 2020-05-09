const Discord = require('discord.js');
const bot = new Discord.Client();

const token = require('./token.js');

const commands = require('./commands.js');

bot.on('ready', () =>{
    console.log('Claptrap is online!');
    //var test = bot.channels.fetch('707274162460426391');
    //console.log(test.guild);
})

bot.on('message', message=>{
    var usercommand = message.content.split(" ");
    
    if(message.content.toLowerCase() == "hello") {
        message.reply('Hello World!');
    }

    if(usercommand[0] == "r") {
        message.reply("Wylosowana liczba to: " + commands.randomNumber(parseInt(usercommand[1]), parseInt(usercommand[2])));
    }

    //console.log(bot);
    usercommand.forEach(comm => {
        if(comm.toLowerCase().substr(0, 8) == "claptrap" || comm.slice(3, -1) == bot.user.id || comm.slice(2, -1) == bot.user.id) {
            message.reply(commands.claptrapQuote());
            return;
        }
    });

    if(usercommand[0].toLowerCase() == "addme" || usercommand[0].toLowerCase() == "gram!") {
        let guild = bot.guilds.cache.get('702933427183288351');
        let member = guild.member(message.author);
        //console.log(guild.channels);
        //console.log(guild.presences);
        //console.log(guild.voiceStates);
        //console.log(member);
        message.reply(commands.addVolunteer(member));
    }

    if(usercommand[0].toLowerCase() == "add") {
        let guild = bot.guilds.cache.get('702933427183288351');
        let member = guild.member(usercommand[1]);
        
        if(member != undefined)
            message.reply(commands.addVolunteer(member));
        else
            message.reply('brak takiego gracza do dodania');
    }

    if(usercommand[0].toLowerCase() == "show") {
        message.reply(commands.showVolunteer());
    }

    if(usercommand[0].toLowerCase() == "pick") {
        message.reply(commands.pickVolunteer());
    }

    if(usercommand[0].toLowerCase() == "pickd") {
        message.reply(commands.pickVolunteer(true));
    }

    if(usercommand[0].toLowerCase() == "delete") {
        if(usercommand[1] != undefined) 
            message.reply(commands.deleteVolunteer(usercommand[1].slice(3, -1)));
    }

    if(usercommand[0].toLowerCase() == "clear") {
        commands.clearVolunteer();
    }

    if(usercommand[0].toLowerCase() == "rcu") {
        var channel;

        if(usercommand[1] === undefined)
            channel = bot.channels.fetch("707274162460426391");
        else
            channel = bot.channels.fetch(usercommand[1]);
        console.log(channel);
        message.reply("Wylosowany użytkownik to: " + commands.randomChannelUser(channel));
    }

    if(usercommand[0].toLowerCase() == "addvote") {
        let guild = bot.guilds.cache.get('702933427183288351');
        let member = guild.member(usercommand[1].slice(3, -1));
        
        if(member != undefined)
            message.reply(commands.addVote(message.author.id, member));
        else
            message.reply('brak takiego gracza do dodania');
    }

    if(usercommand[0].toLowerCase() == "clearvote") {
        commands.clearVote();
    }

    if(usercommand[0].toLowerCase() == "showvote") {
        message.reply(commands.showVote());
    }
})

bot.login(token);