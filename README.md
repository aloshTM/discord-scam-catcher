# discord-scam-catcher
tries to catch the generic discord scams that send messages in every channel in a server. logs them all to a channel where you can choose to unban if need be

# Setup
- Create a bot on the [discord developer portal](https://discord.com/developers/applications)
  - in the bot section of your application make sure to set "Message Content Intent" to be true 
- Invite this bot to the server you want it in
  - Make sure it has the permissions to ban members and send embeds
- Install [nodejs](https://nodejs.org/en) if you havent already.
- Download this repo as a zip and unzip it
- Rename ExampleConfig.json to just Config.json
- Fill out the config json
  -  token = your bots token
  -  HoneypotChannelId = the channel you **DONT** want users sending messages in. you should make a brand new channel for this, for best results give members embed perms in this channel if they do not already have them.
  -  LogChannelId = the channel you want log messages to be sent to in the event of someone sending a message in the Honeypot Channel
- Open up the folder in a terminal and run `npm i` to install discordjs
- Finally run `node .` and you should see it say "✅️ Logged in as BotName#1234"

# Contributing
**Feel free to submit pull requests!**
