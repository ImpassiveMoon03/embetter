const Discord = require('discord.js')

module.exports = {
    name: 'commands',
    execute(interaction, bot){
        interaction.reply({
            embeds: [
                new Discord.MessageEmbed()
                .setTitle('Embetter Commands')
                .setDescription(
                    [
                        "e-help - Get help making embeds",
                        "e-commands - Get a list of commands",
                        "e-json - View help on JSON data",
                        "e-embed - Build an embed",
                        "e-invite - Get the bot invite link"
                    ].join('\n')
                )
            ]
        })
    }
}