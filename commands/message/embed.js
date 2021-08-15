const Discord = require('discord.js')
function isJSON(string = ""){
    try{
        JSON.parse(string)
    }catch(err){
        return false
    }
    return true
}

module.exports = {
    name: 'embed',
    aliases: [],
    description: "Creae a custom embed",
    execute(message, bot){
        let c = message.content.split('```')
        if(!c.length >= 2) return message.channel.send('This command requires a code block!')
        let content = c[1]
        if(!content) return message.channel.send('This command requires a code block')
        if(content.toLowerCase().startsWith('json')){
            content = content.split('\n').slice(1).join('\n')
            if(!isJSON(content)){
                return message.channel.send("Invalid JSON data")
            }else{
                let embedData = JSON.parse(content)

                let name = embedData.name || message.author.username
                let avatar = embedData.avatar || message.author.avatarURL()
                let webhook = message.channel.createWebhook(name, {avatar: avatar}).then(hook => {
                    let embed = new Discord.MessageEmbed()
                    if(!embedData.description) return message.channel.send('Your embed must have a description!')
                    embed.setDescription(embedData.description)
                    if(embedData.title) embed.setTitle(embedData.title)
                    if(embedData.footer && typeof(embedData.footer) == 'object'){
                        if(embedData.footer.text && embedData.footer.icon) embed.setFooter(embedData.footer.text, embedData.footer.icon) 
                        else if(embedData.footer.text) embed.setFooter(embedData.footer.text)
                    }
                    if(embedData.color) embed.setColor(embedData.color)
                    if(embedData.image) embed.setImage(embedData.image)
                    if(embedData.url) embed.setURL(embedData.url)
                    if(embedData.thumbnail) embed.setThumbnail(embedData.thumbnail)

                    if(embedData.author && typeof(embedData.author) == 'object'){
                        if(embedData.author.username && embedData.author.avatar) embed.setAuthor(embedData.author.username, embedData.author.avatar)
                    }

                    if(embedData.fields && typeof(embedData.fields) == 'object' && Array.isArray(embedData.fields)){
                        if(embedData.fields.length > 25) return message.channel.send('Your embed must have less than or equal to 25 fields')
                        else{
                            for(var i = 0; i<embedData.fields.length; i++){
                                let fieldData = embedData.fields[i]
                                if(!fieldData.name) return message.channel.send(`Embed field ${i+1} is missing a name`)
                                if(!fieldData.value) return message.channel.send(`Embed field ${i+1} is missing a value`)
                                let inline = fieldData.inline || false

                                embed.addField(fieldData.name, fieldData.value, inline)
                            }
                        }
                    }

                    message.delete()
                    if(!embedData.content){
                        hook.send({
                            embeds: [embed]
                        }).then(h => hook.delete())
                    }else{
                        if(embedData.content.includes("@everyone") || embedData.content.includes("@here")){
                            hook.send({
                                embeds: [embed]
                            }).then(h => hook.delete())
                            message.channel.send('Your content has been removed for mentioning everyone and/or here')
                        }else{
                            hook.send({
                                embeds: [embed],
                                content: embedData.content
                            }).then(h => hook.delete())
                        }
                    }
                }).catch(err => {
                    message.channel.send(`An Error Has Occured\n\`\`\`${err}\`\`\``)
                })
            }
        }else{
            return message.channel.send('Please define your code block as JSON!')
        }
    }
}