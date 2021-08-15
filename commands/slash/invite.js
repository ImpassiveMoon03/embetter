const Discord = require('discord.js')

module.exports = {
    name: 'invite',
    execute(message, bot){
        Interaction.reply(
            {
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle('Bot Invites')
                    .addField('Bot Invite', `[Click Me!](https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=536872960&scope=bot%20applications.commands)`)
                    .addField('Support Server', '[CLick Me!](https://discord.gg/mZpSX5y9Mp)')
                ]
            }
        )
    }
}