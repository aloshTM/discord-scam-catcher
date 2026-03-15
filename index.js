const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [ GatewayIntentBits.DirectMessages, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});
const path = require('node:path');
const fs = require('node:fs');
let { token } = require('./Config.json');


const eventsPath = path.join(__dirname, "Events")
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
	const event = require(filePath);

    if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}

}

client.login(token);
