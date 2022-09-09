const {MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'pay',

    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        let money = db.get(`dinheiro_${message.author.id}`)
        if(money === null) money = 0

        if(!member) return message.reply(`Você deve mencionar alguém`)
        if(member.id === message.author.id) return message.reply(`Você não pode enviar dinheiro a si mesmo!`)
        if(!args[1]) return message.reply(`Coloque um valor válido para realizar a transferencia`)
        if(isNaN(args[1])) return message.reply(`O valor deve ser numérico`)
        if(money < args[1]) return message.reply(`Você não possui esta quantia!`)
        if(args[1] <= 100) return message.reply(`O valor deve ser maior que 100!`)

        let resultado = (10 / 100) * args[1]
        let porcentagem = args[1] - resultado

        const embed = new MessageEmbed()
        .setTitle(`Transferecia!`)
        .setDescription(`Foi enviado para: ${member} a quantia de: ${porcentagem}! \n\n10% do valor foi recolhido para o banco!`)
        message.reply({ embeds: [embed]})
        db.add(`dinheiro_${member.id}`, porcentagem)
        db.subtract(`dinheiro_${message.author.id}`, args[1])
        db.add(`bancocentral_${client.user.id}`, resultado)
    }
}