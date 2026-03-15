const { Events, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType } = require('discord.js');
const { HoneypotChannelId, LogChannelId, AutomaticBan } = require('../Config.json')

module.exports = {
    name: Events.MessageCreate,
    once: false,
    async execute(message) {
        try {
            console.log(message.content)
            if (message.channelId == HoneypotChannelId ) {
                let Embed = new EmbedBuilder().setTitle("User sent message in honeypot channel!")
                .setDescription(`Message Author: ${message.author.displayName} (${message.author.username}),\n Message Content: ${message.content}\nEmbed Count: ${message.attachments.size}`)
                .setThumbnail(message.author.displayAvatarURL())
                .setTimestamp()
                .setColor("#e67e22")
                .setAuthor({ name: 'Pikas Discord Scam Detector', url: 'https://github.com/pl-k4' })

                let LogChannel = await message.client.channels.fetch(LogChannelId)

                console.log(LogChannel)
                if(AutomaticBan) {
                    message.member.ban({deleteMessageSeconds: 60, reason: "Flagged by pikas discord scam detector"})
                    let unbanButton = new ButtonBuilder()
                    .setEmoji("❤️")
                    .setLabel("Unban?")
                    .setCustomId(`unban_${message.author.id}`)
                    .setStyle(ButtonStyle.Success)

                    const row = new ActionRowBuilder().addComponents(unbanButton)

                    LogChannel.send({embeds: [Embed], components: [row]})
                } else {
                    LogChannel.send({embeds: [Embed]})
                }


            }
        } catch (error) {
            console.log(error)
        }
    }
}
