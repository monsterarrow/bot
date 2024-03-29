const Discord = require("discord.js")
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {

    if(message.author.id != "203104843479515136") return message.channel.send("You're the bot the owner!")

    try {
        await message.channel.send("Bot is shutting down...")
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
    


}


module.exports.config = {
    name: "shutdown",
    description: "shuts down the bot!",
    usage: "!shutdown",
    accessableby: "Bot Owner",
    aliases: ["botstop"]
}