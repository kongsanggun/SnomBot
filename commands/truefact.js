const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
            .setName('truefact')
            .setDescription('이 커멘드는 옳은 사실을 말합니다.'),
    async execute(interaction) {
                await interaction.reply('누니머기는 엉덩이가 아니다!!!');
    },
}