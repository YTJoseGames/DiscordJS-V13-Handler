const client = require('../..')
const config = require('../../configs/config.json')

const {MessageEmbed} = require('discord.js')

client.on('guildMemberAdd', async member => {
    let server = client.guilds.cache.get(config.guild_id)
    let canal = client.channels.cache.get('1009534562918998077')

    if(server != member.guild) {
        return
    } else {
        const embed = new MessageEmbed()
        .setDescription(`Olá **${member.user.username}** Seja muito bem vind@ ao servidor!`)
        canal.send({ embeds: [embed]})
    }
})