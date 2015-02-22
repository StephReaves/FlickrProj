$(document).ready(function(){
	console.log("hi")
	$.ajax({
		url: 'https://api.flickr.com/services/feeds/photos_public.gne?&format=json',
		type: 'GET',
		dataType: 'jsonp'
	})
	.done(function() {
		console.log("success");
	});

});