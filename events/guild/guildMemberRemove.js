const client = require('../..')
const config = require('../../configs/config.json')

const {MessageEmbed} = require('discord.js')

client.on('guildMemberRemove', async member => {
    let server = client.guilds.cache.get(config.guild_id)
    let canal = client.channels.cache.get('')

    if(server != member.guild) {
        return
    } else {
        const embed = new MessageEmbed()
        .setDescription(`**${member.user.username}** Espero que um dia você volte!`)
        canal.send({ embeds: [embed]})
    }
})
