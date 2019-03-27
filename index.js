const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const {YTSearcher} = require('ytsearcher');
const ytpl = require('ytpl');
const fs = require('fs');
const PACKAGE = require('./package.json');
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();
client.music = require("discord.js-musicbot-addon");
var deathcounter_zero = 0;
var one = 1;
// Create an event listener for messages
client.on('message', message => {
  // If the message is "bitch"
    if (message.content === '+1 deathcounter') {
       var deathcounter = deathcounter_zero += one;
       var deathcounterstring = 'The Death Counter has gone up by 1 and now equals: ';
       var combinded_value = deathcounterstring + deathcounter;
      // Send "lasanga" to the same channel
      message.channel.send(combinded_value)
    }
});
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
   if (message.content === '!bitch') {
     // Send "lasanga" to the same channel
     message.channel.send('lasanga');
   }
 });

 // Create an event listener for messages
 client.on('message', message => {
   // If the message is "overwatch"
   if (message.content === '!overwatch') {
     // Send "imgur overwatch" to the same channel
     message.channel.send('https://imgur.com/search/score?q=overwatch');
   }
 });

 // Create an event listener for messages
 client.on('message', message => {
   // If the message is "overwatch"
   if (message.content === '!github') {
     // Send "imgur overwatch" to the same channel
     message.channel.send('https://github.com/BeatrixTrounson/The-BoiiZ-Bot');
   }
 });

 // Create an event listener for messages
 client.on('message', message => {
   // If the message is "bitch"
   if (message.content === 'THE ASS OF VAJRA') {
     // Send "lasanga" to the same channel
     message.channel.send('https://cdn.discordapp.com/attachments/368914786496282627/560412892604923905/SPOILER_fc5.png')
   }
});


// Create an event listener for messages
client.on('message', message => {
  // If the message is "bitch"
  if (message.content === 'the ass of vajra') {
    // Send "lasanga" to the same channel
    message.channel.send('https://cdn.discordapp.com/attachments/368914786496282627/560412892604923905/SPOILER_fc5.png')
  }
});

 // Create an event listener for messages
 client.on('message', message => {
   // If the message is "bitch"
   if (message.content === '!birthdays') {
     // Send "lasanga" to the same channel
     message.channel.send
     (`
      **Bailey/Letter42 - __January 28__**

**Ella/oceanman - __April 24__**

**Ben 1/stanLOONA - __May 23__**

**Jasmine/Bubblpoppa - __August 15__**

**Koen/potatoman - __September 5__**

**Ben 2/Beatrix - __October 5__**

**Dan/username264 - __November 5__**`);
   }
 });

 // Create an event listener for messages
 client.on('message', message => {
   // If the message is "overwatch"
   if (message.content === '!help') {
     // Send "imgur overwatch" to the same channel
     message.channel.send(`
The Bot Commands Are:
  **!overwatch**
  **!birthdays**
  **!github**
  **!bitch**
  **!whats my avatar**`);
   }
 });

// Create an event listener for message what is my avatar then output there profile pic
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '!what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});



/*
  * work in progress
  client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!randomimgur') {
      function generateimageURL(len, charSet) {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomimg = 'http://i.imgur.com/';
        for (var i = 0; i < len; i++) {
          var randomPoz = Math.floor(Math.random() * charSet.length);
          randomimg += charSet.substring(randomPoz,randomPoz+1);
          console.log( randomimg ) // The one to send
          message.channel.send("rawr", randomimg);
        }
      }
    }
});
*/
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
