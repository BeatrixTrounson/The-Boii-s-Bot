const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const {YTSearcher} = require('ytsearcher');
const ytpl = require('ytpl');
const PACKAGE = require('./package.json');
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();
client.music = require("discord.js-musicbot-addon");
 /**
  * The ready event is vital, it means that only _after_ this will your bot start reacting to information
  * received from Discord
  */
 client.on('ready', () => {
   console.log('I am ready! to grill my gamers!');
 });

 // Create a new webhook
const hook = new Discord.WebhookClient('558921382407307275', 'amj-kkWkIjg6GMNT8ds1L0WNAI8J1e7AC2wnF9hu6H6OX79A8vc3rd541Tr7iDpxUtxf');

 // Create an event listener for messages
 client.on('message', message => {
   // If the message is "bitch"
   if (message.content === 'bitch') {
     // Send "lasanga" to the same channel
     message.channel.send('lasanga');
   }
 });

 // Create an event listener for messages
 client.on('message', message => {
   // If the message is "bitch"
   if (message.content === 'overwatch') {
     // Send "lasanga" to the same channel
     message.channel.send('https://imgur.com/search/score?q=overwatch');
   }
 });

// Create an event listener for message what is my avatar then output there profile pic
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

/**
  * posts a image of rip when said command is read in chat
  */
client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!rip') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});

/**
 * A bot that welcomes new guild members when they join
 */
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

// Send a message using the webhook
hook.send('I am now alive!');

client.login('NTU4OTA4MzU5Mjg2NDU2MzIx.D3dwFA.J2qUQ7g9H5JhNWWvNii6xAQNdO0');
