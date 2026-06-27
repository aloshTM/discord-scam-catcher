const { Events } = require('discord.js');
const { HoneypotChannelId } = require('../Config.json')

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		try {
			console.log(`✅️ Logged in as ${client.user.tag}`);

			let HoneypotChannel = await client.channels.fetch(HoneypotChannelId)

			const warning = ":rotating_light: **Do NOT send messages in this channel, this is a honeypot channel for scam detection. If you send a message here, you will be banned from the server.** :rotating_light:";

			const messages = await HoneypotChannel.messages.fetch({ limit: 1 });
			const lastMessage = messages.first();

			if (!lastMessage || lastMessage.content !== warning) {
				HoneypotChannel.send(warning).catch((err) => {
					console.log(err);
				});
			}
		} catch (err) {
			console.log(err);
		}
	}
};

