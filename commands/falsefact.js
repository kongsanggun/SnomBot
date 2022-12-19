const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
            .setName('falsefact')
            .setDescription('이 커멘드는 거짓부렁을 퍼트리는 누알못들의 주장을 말합니다.'),
    async execute(interaction) {
                await interaction.reply('누알못 : 누니머기는 엉덩이다~');
    },
}