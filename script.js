var channels = ["AnoterosTV", "mzdusty", "freecodecamp", "ESL_SC2"];
var channelData = [];
var onlineData = [];

$(document).ready(function(){
	// Loop through channels array && make an API call for each
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

	for(var i = 0; i < channels.length; i++) {

$.ajax({
	 async: false,
	 type: 'GET',
	 url: 'https://api.twitch.tv/kraken/streams/'+channels[i]+'',
	 headers: {
	   'Client-ID': 'ua831h3l3wb2hb8e66ao7gmhdjqsjw'
	 },
	 success: function(data) {
	 	onlineData.push(data);
	}
});

}


	// Debugging
	// console.log(onlineData);
	// console.log(channelData);

	// For each returned twitch channel assign variables to Twitch stream: ID, Logo, URL, game and title.
	$.each(channelData, function(i){
var game = channelData[i].game;
var streamTitle = channelData[i].status;
var twitchID = channelData[i].display_name;
var twitchLogo = "<img src="+channelData[i].logo+">";
var twitchURL = channelData[i].url;

	if(onlineData[i].stream !== null) {
	// Add Online Streams to top of List 
		$(".sub-container").prepend(
			"<a href='"+twitchURL+"'><div class='all-streams row' id='stream-container"+i+"'><div class='col-sm' id='twitch-logo'>"+twitchLogo+"</div><div class='col-sm' id='twitch-name'>" + twitchID +"</div><div class='col-sm' id='game-title'>"+ game +"</div><div class='col-sm' id='stream-title'>"+ streamTitle +"</div></div></a> ").hide().fadeIn(1000);
	} else {
	// Add Offline Streams to bottom of list.
		$(".sub-container").append(
			"<div style='background-color: gray;' class='all-streams row' id='stream-container"+i+"'><div class='col-sm' id='twitch-logo'>"+twitchLogo+"</div><div class='col-sm' id='twitch-name'>" + twitchID +"</div><div class='col-sm' id='offline'>Offline</div></div> ").hide().fadeIn(1000);
	}


	});

});


