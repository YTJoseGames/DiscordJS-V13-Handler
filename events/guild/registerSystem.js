const {MessageEmbed, MessageButton, MessageActionRow} = require('discord.js')
const client = require('../..')
const config = require('../../configs/config.json')

client.on('messageCreate', async message => {
    if(message.author.bot) return
    if(message.content.indexOf(config.prefix) !== 0) return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if(command == 'registro') {
        if(![config.owner_id].includes(message.author.id)) return

        const embed = new MessageEmbed()
        .setDescription(`Seja muito bem vind@ ao servidor \n\n Clique aqui para se registrar!`)

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Registrar-se')
            .setCustomId('registro')
        )

        message.channel.send({ embeds: [embed], components: [row], fetchReply: false})
    }
})

client.on('interactionCreate', async (button) => {
    let server = client.guilds.cache.get(config.guild_id)
    let canal = client.channels.cache.get('')
    let cargo = server.roles.cache.get('')

    const member = button.member

    if(button.customId === 'registro') {
        
        setTimeout(() => {
            member.roles.add(cargo)
        }, 5000)

        canal.send(`${member} Se Registrou com sucesso no servidor!`)

    }
})
