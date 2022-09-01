const client = require('../..')
const { MessageEmbed, Message } = require('discord.js')

client.on('messageCreate', message => {
    if(message.author.bot) return;
    if(message.content == `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
        
        const embed = new MessageEmbed()
        .setDescription(`OI :)`)
        message.channel.send({ embeds: [embed]})
    }
})