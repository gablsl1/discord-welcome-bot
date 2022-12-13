 module.exports = client => {
    const channelId = 'ID DO CANAL DE NOVOS MEMBROS'
    const rulesChannel = 'ID DO CANAL DE REGRAS'
    client.on('guildMemberAdd', (member) => {
        console.log(member)

        const message = `Bem vindo(a) ${member.user.username} ao nosso servidor! Tenha certeza de checar nosso ${member.guild.channels.cache
            .get(rulesChannel)
            .toString()}`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}