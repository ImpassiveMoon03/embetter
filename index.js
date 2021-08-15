require('dotenv').config()
const Discord = require('discord.js')
const fs = require('fs')

const bot = new Discord.Client({intents: new Discord.Intents(4657)})
bot.commands = new Discord.Collection()
bot.slash = new Discord.Collection()

let cmd = fs.readdirSync('./commands/message').filter(f => f.endsWith('.js'))
console.log(cmd)
for(var i = 0; i<cmd.length; i++){
    let com = require(`./commands/message/${cmd[i]}`)
    bot.commands.set(com.name, com)
    for(var j = 0; j<com.aliases.lenght;j++){
        bot.commands.aet(com.aliases[j], com)
    }
    console.log('Loaded '+com.name)
}

let slshcmd = fs.readdirSync('./commands/slash').filter(f => f.endsWith('js'))
for(var i = 0; i<slshcmd.length; i++){
    let com = require(`./commands/slash/${slshcmd[i]}`)
    bot.slash.set(com.name, com)
    console.log('Loaded Slash Command '+com.name)
}

bot.on('ready', () => {
    console.log('Logged In!')

    // bot.application.commands.create({
    //     name: 'json',
    //     description: 'Get help on making embeds using JSON'
    // })
    
    // bot.application.commands.create({
    //     name: 'help',
    //     description: 'Get help with the bot'
    // })
    
    // bot.application.commands.create({
    //     name: 'commands',
    //     description: 'Get a list of bot commands'
    // })
    
    // bot.application.commands.create({
    //     name: 'invite',
    //     description: 'Get the bot\'s invite link'
    // })
    
    // bot.application.commands.create({
    //     name: 'value',
    //     description: 'View information on a certain key',
    //     options: [
    //         {
    //             name: 'query',
    //             type: "STRING",
    //             description: 'The key to view',
    //             required: true,
    //             choices: [
    //                 {name: 'name', value: 'name'},
    //                 {name: 'avatar', value: 'avatar'},
    //                 {name: 'content', value: 'content'},
    //                 {name: 'title', value: 'title'},
    //                 {name: 'description', value: 'description'},
    //                 {name: 'thumbnail', value: 'thumbnail'},
    //                 {name: 'image', value: 'image'},
    //                 {name: 'url', value: 'url'},
    //                 {name: 'color', value: 'color'},
    //                 {name: 'author', value: 'author'},
    //                 {name: 'fields', value: 'fields'},
    //                 {name: 'footer', value: 'footer'}
    //             ]
    //         }
    //     ]
    // })
})

bot.on('interactionCreate', (interaction) => {
    if(!interaction.isCommand()) return
    bot.slash.forEach(s => {
        if(interaction.commandName == s.name){
            return s.execute(interaction, bot)
        }
    })
})

bot.on('messageCreate', (message) => {
    if(!message.content.startsWith('e-')) return
    if(message.author.bot) return
    if(message.channel.type == 'dm') return
    bot.commands.forEach(c => {
        if(message.content.startsWith(`e-${c.name}`)){
            return c.execute(message, bot)
        }
    })
})

bot.login(process.env.TOKEN)