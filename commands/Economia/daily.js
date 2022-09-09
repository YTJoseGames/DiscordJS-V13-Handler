const {MessageEmbed} = require('discord.js')
const db = require('quick.db')
const ss = require('../../configs/settings.json')
const ms = require('parse-ms')

module.exports = {
    name: 'daily',
    cooldown: 5000,

    run: async (client, message, args) => {
        let quantia = Math.floor(Math.random() * 1000)
        let timeout = ss.cooldowns.daily
        let utilizado = db.get(`tempodaily_${message.author.id}`)

        if(utilizado !== null && timeout - (Date.now() - utilizado) > 0) {
            let time = ms(timeout - (Date.now() - utilizado))
            return message.reply(`Você já coletou o seu money diário recentemente! Aguarde: **${time.hours} Horas, ${time.minutes} Minutos e ${time.seconds} Segundos!**`)
        } else {
            const embed = new MessageEmbed()
            .setTitle(`Money Diario!`)
            .setDescription(`Você coletou seu money diário! A quantia recebida foi: **${quantia}**`)
            message.reply({ embeds: [embed]})
            db.add(`dinheiro_${message.author.id}`, quantia)
            db.set(`tempodaily_${message.author.id}`, Date.now())
        }
    }
}