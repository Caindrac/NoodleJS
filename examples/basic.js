var NoodleJS = require('../');

var client = NoodleJS.newClient({
    url: 'mymumbleserver.domain',
    name: 'NoodleJS'
});

client.on('connect', function(event) {
    console.log("NoodleJS connected to the server!");
});

client.on('textMessage', function(event) {
    console.log("Received a message: " + event.textMessage.message);
});

client.on('userChange', function(event) {
    console.log(event.user.name + " has changed!");
});

client.on('channelChange', function(event) {
    console.log(event.channel.name + " has changed!");
});
