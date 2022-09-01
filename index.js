const { Client, Collection } = require('discord.js')
const config = require('./configs/config.json')
const fs = require('fs')

const client = new Client({
    intents: 32767,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER', 'GUILD_MEMBER']
});

client.commands = new Collection()
client.aliases = new Collection()
client.prefix = config.prefix
module.exports = client;
client.categories = fs.readdirSync("./commands/");

["command", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(config.token)