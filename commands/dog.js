const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")

        let dEmbed = new Discord.MessageEmbed()
        .setColor(colours.cyan)
        .setAuthor(`Uppu Munchi DOGS!`, message.guild.iconURL)
        .setImage(body.message)
        .setTimestamp()
        .setFooter(`Uppu Munchi`, bot.user.displayAvatarURL)

        message.channel.send({embed: dEmbed})

        msg.delete();
}


module.exports.config = {
    name: "dog",
    description: "Sends a picture of a dog!",
    usage: "!dog",
    accessableby: "Members",
    aliases: ["doggo", "puppy"]
}