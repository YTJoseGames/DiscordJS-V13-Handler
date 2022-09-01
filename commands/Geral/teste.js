const { MessageEmbed, Message } = require('discord.js')

module.exports = {
    name: 'teste',
    description: 'Apenas um CMD Teste',
    aliases: ['test', 'testi'],
    usage: '!teste',
    category: 'Geral',
    userPerms: ['ADMINISTRATOR'],
	botPerms: ['ADMINISTRATOR'],
    cooldown: 5000,

	run: async (client, message, args) => {

    message.channel.send(`a`)

	}
}