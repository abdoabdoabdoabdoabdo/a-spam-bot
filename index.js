const discord=require("discord.js")
const client=new Discord.Client()
client.on("message", message => {
message.channel.send(Math.random())

})
client.login("your bot token")
