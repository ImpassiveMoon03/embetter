const Discord = require('discord.js')

module.exports = {
    name: 'json',
    aliases: [],
    description: 'Get help creating embeds using JSON',
    execute(message, bot){
        let embed = new Discord.MessageEmbed()
        .setTitle("How to use JSON to make discord embeds")
        .setDescription('JSON is an object of keys and values surrounded by curly brackets. Example:\n```json\n{"key": "value"}\n```\n\nTo use JSON to create embeds, you must populate keys with their desired value')
        .addField('Value Types', [
            "**Text** - The contents of the value is a string surrounds by double quotes(\")",
            "**Number** - The contents of the value are either an integer or a decimal",
            "**Array** - The contents of the value is a list of items, that can containt Strings, More Arrays, Objects, Numbers, Or Boolean",
            "**Object** - The contents of the value is another set of key-value pairs",
            "**Boolean** - The contents of the value is either true, or false not surrounds by any quotes"
        ].join('\n'))
        .addField('Keys', [
            "**name** - (Text) The name of the webhook the embed is sent through",
            "**avatar** - (Text) The URL of the image of the webhook's desired avatar",
            "**content** - (Text) The content of the message to send with the embed",
            "**title** - (Text) The title of the embed",
            "**description\\*** - (Text) The description of the embed",
            "**thumbnail** - (Text) The URL of an image to set as the embed thumbnail(the small square image in the top right corner)",
            "**image** - (Text) The URL of the image to set as the large image in the embed",
            "**url** - (Text) The URL clicking the embed title redirects you to",
            "**color** - (Text/Number) - The color of the embed",
            "**author** - (Object) - The author data of the embed",
            "**fields** - (Array) An array of Objects to define each embed field",
            "**footer** - (Object) The footer of the embed"
        ].join('\n'))
        .addField("Author Keys", [
            "**username\\*** - (Text) The username to give the author",
            "**avatar** - (Text) The URL of the avatar wanted for the author avatar"
        ].join('\n'))
        .addField("Field Keys", [
            "**name\\*** - (Text) The name of the field",
            "**value\\*** - (Text) The value of the field",
            "**inline** - Whether or not the field is inline with the next"
        ].join('\n'))
        .addField("Footer Keys", [
            "**text\\*** - (Text) The text of the footer",
            "**icon** - (Text) The URL of the image wanted for the footer icon"
        ].join('\n'))
        .addField("Example Input", '```json\n{\n  "name": "Embetter Ad",\n  "title": "Why Embetter is the GOAT",\n  "color": "#b00b1e",\n    "description": "It allows you to make AMAZING embeds using simple JSON data",\n  "fields": [\n    {"name": "It even allows you to add fields!", "value": "Just like this one!"},\n    {"name": "It lets you have them inline or separate", "value": "Just like this", "inline": true},\n    {"name": "And this!", "value": ":smiley:", "inline": true}\n  ],\n  "footer": {\n    "text": "It even allows you to put footers(And add quirky images to them)!",\n    "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"\n  }\n}```')
        .setImage('https://media.discordapp.net/attachments/856372732744171523/876312016644603935/Screenshot_2021-08-14_11.50.13_PM.png')
        .setFooter("* - Required Value")

        message.channel.send({embeds: [embed]})
    }
}