const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")

        let cEmbed = new Discord.MessageEmbed()
        .setColor(colours.cyan)
        .setAuthor(`Uppu Munchi CATS!`, message.guild.iconURL)
        .setImage(body.file)
        .setTimestamp()
        .setFooter(`Uppu Munchi`, bot.user.displayAvatarURL)

        message.channel.send({embed: cEmbed})

        msg.delete();
}


module.exports.config = {
    name: "cat",
    description: "sends a picture of a cat!",
    usage: "!cat",
    accessableby: "Members",
    aliases: ["catto"]
}