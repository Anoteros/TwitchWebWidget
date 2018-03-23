var channels = ["AnoterosTV", "mzdusty", "freecodecamp"];
var channelData = [];


$(document).ready(function(){

	for(var i = 0; i < channels.length; i++) {
$.ajax({
	 async: false,
	 type: 'GET',
	 url: 'https://api.twitch.tv/kraken/channels/'+channels[i]+'',
	 headers: {
	   'Client-ID': 'ua831h3l3wb2hb8e66ao7gmhdjqsjw'
	 },
	 success: function(data) {
	 	channelData.push(data);
	}
})

	};
	console.log(channelData);
});


