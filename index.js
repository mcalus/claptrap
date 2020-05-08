const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzA4Mzk0MTMyNTY1MTMxMzI1.XrWuCg.UQpLb8YM30YJHtieINrOgATuKLE';

bot.on('ready', () =>{
        console.log('Claptrap is online!');
})

bot.on('message', message=>{
    if(message.content === "HELLO") {
        message.reply('Hello World!');
    }


    const chan = message.channel;
    const answer = 'test';

    //Select a random user
    const user = message.channel.members.random();
    //console.log(user);
    //message.reply(user.nickname);
    //const userid = user.id
    /*
    //fetch messages from the user and contains answer
    chan.fetchMessages().then(messages => {
        const usermsgs = messages.filter(
            m => m.content === answer);

        if(usermsgs){
            const randomCorrectUser = usermsgs.random().author;
            message.reply('winner is' + `${randomCorrectUser.username}`);
        }else{
            message.reply('No Winner');
        }
    }).catch(console.error);
    */
})

bot.login(token);