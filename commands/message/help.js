const Discord = require('discord.js')

module.exports = {
    name: 'help',
    aliases: ['how'],
    description: 'Get help creating embeds',
    execute(message, bot){
        message.channel.send({
            embeds: [
                new Discord.MessageEmbed()
                .setTitle('Embetter Help')
                .setDescription('Use e-commands to get a list of commands')
                .addField('Making embeds with JSON', "e-embed\n\\`\\`\\`json\nJSON data\n\\`\\`\\`")
            ]
        })
    }
}