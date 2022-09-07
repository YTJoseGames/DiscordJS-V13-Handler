const {MessageEmbed, Message} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "atm",
    cooldown: 5000,

    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author

        let money = db.get(`dinheiro_${member.id}`)
        if(money === null) money = 0

        if(member.id === message.author.id) {
            const embed1 = new MessageEmbed()
            .setDescription(`Você Possui: **R$${money}**`)
            return message.reply({ embeds: [embed1]})
        } else {
            const embed2 = new MessageEmbed()
            .setDescription(`${member} Possui: **R$${money}**`)
            return message.reply({ embeds: [embed2]})
        }
    }
}