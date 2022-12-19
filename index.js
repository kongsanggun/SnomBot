const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { randomInt } = require('node:crypto');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent], });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, () => {
	console.log('Ready!');
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);
	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on(Events.MessageCreate, async msg => {

	const snomAngry = ['누알못! 누알못!', '누니머기는 엉덩이가 아니다!', 'SNOM ANGRY...', '거짓부렁을 퍼트리지 마라!', '누니머기는 명백한 애벌레 포켓몬이다!', '엉덩이?! 😡😡😡😡😡', '누알못 발언을 취소해라!'];
	if (msg.author.bot) return;

	const index = Math.floor(Math.random() * snomAngry.length);

	if (msg.content.indexOf("누니머기") !== -1 && msg.content.indexOf("엉덩이") !== -1 && (msg.content.indexOf("다") !== -1 || msg.content.indexOf("아니") === -1)) {
		msg.react('😡')
		.then(msg.react('👎'))
		.then(msg.reply({ content: snomAngry[index], fetchReply: true }));
	}

	if (msg.content.indexOf("%D")!== -1 || msg.content.indexOf("누엉")!== -1) {
		msg.react('😡')
		.then(msg.react('👎'))
		.then(msg.reply({ content: snomAngry[index], fetchReply: true }));
	}

	if ((msg.content.indexOf("Snom")!== -1 || msg.content.indexOf("snom")!== -1) && msg.content.indexOf("ass")!== -1 && !msg.content.indexOf("not")!== -1 && !msg.content.indexOf("n't")!== -1) {
		msg.react('😡')
		.then(msg.react('👎'))
		.then(msg.reply({ content: snomAngry[index], fetchReply: true }));
	}

	if ((msg.content.indexOf("Snom")!== -1 || msg.content.indexOf("snom")!== -1) && msg.content.indexOf("おしり")!== -1 && !msg.content.indexOf("not")!== -1 && !msg.content.indexOf("n't")!== -1) {
		msg.react('😡')
		.then(msg.react('👎'))
		.then(msg.reply({ content: snomAngry[index], fetchReply: true }));
	}

	if (msg.content.indexOf("ユキハミ")!== -1 && msg.content.indexOf("おしり")!== -1 && !msg.content.indexOf("not")!== -1 && !msg.content.indexOf("n't")!== -1) {
		msg.react('😡')
		.then(msg.react('👎'))
		.then(msg.reply({ content: snomAngry[index], fetchReply: true }));
	}

});

client.login(token);