const {Events, MessageFlags, PermissionsBitField} = require("discord.js")

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
        try {
            if(interaction.isButton()) {
                let buttonId = interaction.customId.toString()

                // prob a better way to do this but this is easiest way to pass the user id from the button
                if(buttonId.startsWith("unban_")) {
                    let userId = buttonId.split("_")[1]

                    if (interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
                        
                        interaction.guild.members.unban(userId)
                        interaction.message.edit({components: []})
                        interaction.reply({ content: 'User was unbanned!', flags: MessageFlags.Ephemeral })
                    } else {
                        interaction.reply({ content: 'You dont have permissions to unban users!', flags: MessageFlags.Ephemeral })
                    }
                }
            }   
        } catch (error) {
            console.log(error)   
            if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'There was an error!', flags: MessageFlags.Ephemeral });
			} else {
				await interaction.reply({ content: 'There was an error!', flags: MessageFlags.Ephemeral });
			}
        }
    }
}