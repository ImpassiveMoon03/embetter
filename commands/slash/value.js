const Discord = require('discord.js')

module.exports = {
    name: 'value',
    execute(interaction, bot){
        let option = interaction.options.get('query').value
        if(option == 'name'){
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle('Name JSON Argument')
                    .setDescription("The name to give the webhook that sends the embed")
                    .addField('Default', "The creator of the embed")
                    .addField('Argument Type', "Text")
                    .addField('Example', '```json\n{\n  "name": "Ghost Rider",\n  "description": "Edited Webhook Name"\n}\n```')
                    .setImage('https://media.discordapp.net/attachments/876316246608605214/876361748515553310/name.png')
                ]
            })
        }else if(option == 'avatar'){
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle('Avatar JSON Argument')
                    .setDescription("The URL of the avatar given to the webhook")
                    .addField('Default', "The creator of the embed's avatar")
                    .addField('Argument Type', "Text")
                    .addField('Example', '```json\n{\n  "avatar": "https://media.discordapp.net/attachments/876316246608605214/876362425081925632/unknown.png?width=576&height=432",\n  "description": "Editted Webhook Avatar"\n}\n```')
                    .setImage("https://media.discordapp.net/attachments/876316246608605214/876362958857445467/avatar.png")
                ]
            })
        }else if(option == 'content'){
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle('Content JSON Argument')
                    .setDescription('The cotent that captions the embed')
                    .addField('Default', "Empty")
                    .addField('Argument Type', "Text")
                    .addField('Example', '```json\n{\n  "content": "I am Ghost Rider",\n  "description": "Editted Message Content"\n}\n```')
                    .setImage("https://media.discordapp.net/attachments/876316246608605214/876372070995468299/content.png")
                ]
            })
        }else if(option == 'title'){
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle('Title JSON Argument')
                    .setDescription('The title of the embed')
                    .addField('Default', "Empty")
                    .addField('Argument Type', "Text")
                    .addField('Example', '```json\n{\n  "title": "Ghost Rider is Great!",\n  "description": "Editted Embed Title"\n}\n```')
                    .setImage("https://media.discordapp.net/attachments/876316246608605214/876373414577848330/title.png")
                ]
            })
        }else if(option == 'description'){
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle('Description JSON Argument')
                    .setDescription('The description of the embed')
                    .addField('Default', "Empty")
                    .addField('Argument Type', 'Text(Required)')
                    .addField('Example', '```json\n{\n  "description": "The embed Description!"\n}\n```')
                    .setImage('https://media.discordapp.net/attachments/876316246608605214/876374376822480896/description.png')
                ]
            })
        }else if(option == 'thumbnail'){
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle("Thumbnail JSON Argument")
                    .setDescription('The embed thumbnail image url')
                    .addField('Default', 'Empty')
                    .addField('Argument Type', 'Text')
                    .addField('Example', '```json\n{\n  "thumbnail": "https://media.discordapp.net/attachments/876316246608605214/876374561338322944/discord.png?width=432&height=432",\n  "description": "An embed with an edited thumbnail"\n}\n```')
                    .setImage('https://media.discordapp.net/attachments/876316246608605214/876376040136646716/thumbnail.png')
                ]
            })
        }else if(option == 'image'){
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle('Image JSON Argument')
                    .setDescription('The embed image url')
                    .addField('Default', 'Empty')
                    .addField('Argument Type', 'Text')
                    .addField('Example', '```json\n{\n  "image": "https://impassivemoon03.github.io/assets/github.png",\n  "description": "Embed with an edited image"\n}\n```')
                    .setImage("https://media.discordapp.net/attachments/876316246608605214/876376997805293589/image.png")
                ]
            })
        }else if(option == 'url'){
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle('URL JSON Argument')
                    .setDescription('Sets the link clicking the tile directs to')
                    .addField('Default', 'Empty')
                    .addField('Argument Type', 'Text')
                    .addField('Example', '```json\n{\n  "title": "Title",\n  "url": "https://impassivemoon03.github.io/",\n  "description": "Embed with a link"\n}\n```')
                    .setImage('https://media.discordapp.net/attachments/876316246608605214/876378118191976468/url.png')
                ]
            })
        }else if(option == 'color'){
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle('Color JSON Argument')
                    .setDescription('Sets the color of the embed')
                    .addField('Default', 'Discord Default')
                    .addField('Argument Type', 'Text/Number')
                    .addField('Example', '```json\n{\n  "color": "#b00b1e"\n  "description": "Red Embed"\n}\n```')
                    .setImage('https://media.discordapp.net/attachments/876316246608605214/876380423893164072/color.png')
                ]
            })
        }else if(option == 'author'){
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle('Author JSON Argument')
                    .setDescription('The author metadata of the embed')
                    .addField('Default', 'Empty')
                    .addField('Argument Type', 'Object')
                    .addField('Keys', "**Username** (Text) The username of the author\n**Avatar** - (Text) The image url for the avatar")
                    .addField('Example', '```json\n{\n  "author": {\n    "username": "Ghost Rider",\n    "avatar": "https://media.discordapp.net/attachments/876316246608605214/876362425081925632/unknown.png?width=576&height=432"\n  },\n  "description": "And embed with an author"\n}\n```')
                    .setImage('https://media.discordapp.net/attachments/876316246608605214/876381815030566942/author.png')
                ]
            })
        }else if(option == 'fields'){
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle('Fields JSON Argument')
                    .addField('Default', 'Empty')
                    .addField('Argument Type', 'Array(of Objects)')
                    .addField('Keys', "**Name** - (Text) The name of the field(Required)\n**Value** - (Text) The value of the field(Required)\n**Inline** - (Boolean) Whether or not the field is inline")
                    .addField('Example', '```json\n{\n  "fields": [\n    {\n      "name": "Hello",\n      "value": "World"\n    }\n  ]\n  "description": "This embed has a field"\n}\n```')
                    .setImage('https://media.discordapp.net/attachments/876316246608605214/876383321322586132/fields.png')
                ]
            })
        }else if(option == 'footer'){
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle('Footer JSON Argument')
                    .setDescription('The footer of the embed')
                    .addField('Default', 'Empty')
                    .addField('Agument Type', 'Object')
                    .addField('Keys', '**Text** - (Text) The text of the footer(required)\n**Icon** - (Text) The url of the footer icon image')
                    .addField('Example', '```json\n{\n  "footer": {\n    "text": "Made By ImpassiveMoon",\n    "icon": "https://impassivemoon03.github.io/assets/zel.png"\n  },\n  "description": "Embed with a footer"\n}\n```')
                    .setImage('https://media.discordapp.net/attachments/876316246608605214/876384855087284224/footer.png')
                ]
            })
        }
    }
}