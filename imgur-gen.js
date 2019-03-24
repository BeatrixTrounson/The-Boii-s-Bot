var numattempts = 0;

function generateimageURL(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomimg = 'http://i.imgur.com/';
    for (var i = 0; i < len; i++) {
    	var randomPoz = Math.floor(Math.random() * charSet.length);
    	randomimg += charSet.substring(randomPoz,randomPoz+1);
      console.log( randomimg ) // The one to send
      message.channel.send("rawr", randomimg);
    }
