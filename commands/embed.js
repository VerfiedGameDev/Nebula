const { Message, Client } = require("discord.js");

module.exports = {
    name: "Hi",
    aliases: ['hello'],
    permissions : [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(!client.settings.get(message.guild.id, "FUN")){
            return message.channel.send(new MessageEmbed()
              .setColor('RANDOM')
              .setFooter("Hello, How Are You..")
              .setTitle(`<:no:833101993668771842> HEck yeAh`)
              .setDescription(`Hey`)
            );
        }
    }
}
