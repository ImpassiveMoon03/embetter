const Discord = require('discord.js')

module.exports = {
    name: 'help',
    execute(interaction, bot){
        interaction.reply({
            embeds: [
                new Discord.MessageEmbed()
                .setTitle('Embetter Help')
                .setDescription('Use e-commands to get a list of commands')
                .addField('Making embeds with JSON', "e-embed\n\\`\\`\\`json\nJSON data\n\\`\\`\\`")
            ]
        })
    }
}