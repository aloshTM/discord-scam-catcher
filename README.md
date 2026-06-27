# discord-scam-catcher
tries to catch the generic Discord scams that send messages in every channel in a server. logs them all to a channel where you can choose to unban if need be <br>
a generic Discord scam being [one like this](https://cdn.discordapp.com/attachments/1285770631131955322/1520283085634142248/image.png?ex=6a40a175&is=6a3f4ff5&hm=eeb0a346e3140c64acff712315c2a83f8fa407c59a5239da5a08c99c541c16fd&) or [like this](https://cdn.discordapp.com/attachments/1285770631131955322/1520283086414413915/image.png?ex=6a40a175&is=6a3f4ff5&hm=4b58eca5a68a8bc41b34fbf0e358714a3b96314e507ae7b97b3332184283e582&) <br>
<sub><sup> Essentially the point is they want either your data or your money. They get random account details that got hacked from a rat (Remote Access Trojan) and usually it's a person that is big in media that wants you to sign up to some place (like MrBeast or Elon Musk) and it's usually a referral code to a gambling site that wants you to put in a code for free money but you have to pay as a verification to get the money first and they never give you the money. </sub></sup>

# Usage
1. You setup the bot
2. Scammer joins
3. Scammer sends MrBeast crypto wow!!
4. Scammer sends it in every channel
5. Scammer sends it in honeypot channel
6. Scammer gets banned. Hassle free <br>
 **OR**
## Other usage
1. You setup the bot
2. Idiot joins
3. Idiot sees random channel you can type in
4. Idiot sends a message in the honeypot channel
5. Idiot gets banned by the bot
6. You unban the idiot from the log channel. Un-hassle free

# Setup
- Create a bot on the [Discord Developer Portal](https://discord.com/developers/applications)
  - In the Bot section of your application make sure to set "Message Content Intent" to be true 
- Invite this bot to the server you want it in
  - Make sure it has the permissions to ban members and send embeds
- Install [nodejs](https://nodejs.org/en) if you haven't already.
- Download this repo as a zip and unzip it
- Rename ExampleConfig.json to just Config.json
- Fill out the config json
  -  token = your bots token
  -  HoneypotChannelId = the channel you **DON'T** want users sending messages in. you should make a brand new channel for this, for best results give members embed perms in this channel if they do not already have them.
  -  LogChannelId = the channel you want log messages to be sent to in the event of someone sending a message in the Honeypot Channel
- Open up the folder in a terminal and run `npm i` to install discordjs
- Finally run `node .` and you should see it say `✅️ Logged in as BotName#1234`

# Contributing
**Feel free to submit pull requests!**
