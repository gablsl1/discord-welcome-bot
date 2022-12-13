const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const welcome = require('./welcome.js')

client.on('ready', () => {
    console.log('Discord bot está online')

    welcome(client)
})

client.login(config.token)