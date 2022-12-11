const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
            .setName('cry2')
            .setDescription('귀여운 포켓몬 누니머기의 울음소리'),
    async execute(interaction) {
                await interaction.reply('슈와~');
    },
}