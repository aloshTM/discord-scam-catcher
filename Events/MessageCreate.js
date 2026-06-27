const { Events, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, PermissionsBitField } = require('discord.js');
const { HoneypotChannelId, LogChannelId, AutomaticBan } = require('../Config.json')

module.exports = {
    name: Events.MessageCreate,
    once: false,
    async execute(message) {
        try {
            if (message.author.bot) return;
            if (message.channelId == HoneypotChannelId ) {
                const messageContent = message.content || "*No text content*"
                const previewContent = messageContent.length > 1000 ? `${messageContent.slice(0, 997)}...` : messageContent

                let Embed = new EmbedBuilder().setTitle("User sent message in honeypot channel!")
                .setDescription(`Message Author: ${message.author.displayName} (${message.author.username})\nEmbed Count: ${message.attachments.size}`)
                .addFields({ name: "Message Content", value: previewContent })
                .setThumbnail(message.author.displayAvatarURL())
                .setTimestamp()
                .setColor("#e67e22")
                .setAuthor({ name: "Pika's Discord Scam Detector", url: "https://github.com/pl-k4" })

                let LogChannel = await message.client.channels.fetch(LogChannelId)

                // console.log(LogChannel)
                if (message.member.permissions.has(PermissionsBitField.Flags.BanMembers) || message.member.permissions.has(PermissionsBitField.Flags.ModerateMembers) || message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
                    // does the user have the Ban Members permission, Timeout Members permission, or Administrator permission? 
                    console.log("User is a mod or admin")
                    await message.delete() 
                    // it will make it so the warning message gets resent upon another bot startup. im not looking for Every message in the channel. id rather kms.  
                    return // prevents mods or admins from getting banned by the bot.
                } else {
                    await message.member.ban({deleteMessageSeconds: 60, reason: "Flagged by pika's discord scam detector"})
                    let unbanButton = new ButtonBuilder()
                    .setEmoji("❤️")
                    .setLabel("Unban?")
                    .setCustomId(`unban_${message.author.id}`)
                    .setStyle(ButtonStyle.Success)

                    let previewButton = new ButtonBuilder()
                    .setEmoji("🔍")
                    .setLabel("Preview")
                    .setCustomId(`preview_${message.author.id}`)
                    .setStyle(ButtonStyle.Primary)

                    const row = new ActionRowBuilder().addComponents(unbanButton, previewButton)

                    LogChannel.send({embeds: [Embed], components: [row]})
                }

            }
        } catch (error) {
            console.log(error)
        }
    }
}
