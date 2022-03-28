// Require the necessary discord.js classes
const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');
const { token } = require('./botconfig/config.json');

// Create a new client instance
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_MEMBERS,
    ],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
    presence: {
        status: "online",
        activities: [{
        name: "CostoMosco's Code",
        type: "WATCHING"
        }]
    },
});


client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command, command);
}




// When the client is ready, run this code (only once)
client.on('ready', () => {
	console.log('Ready!');
});


// Login to Discord with your client's token
client.login(token);