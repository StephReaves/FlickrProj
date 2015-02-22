$(document).ready(function(){
	apiCall();

});

var apiCall = function() {
$.ajax({
	url: 'https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=wootwoot',
	type: 'GET',
	dataType: 'jsonp'
})
.success(function() {
	wootwoot()
	});
setTimeout(apiCall, 10000)
}

setTimeout(apiCall, 10000)

function wootwoot(data) {
	var info = data.items
	$('#dashboard').empty()
	for(var i = 0; i < info.length; i++) {
		$('#dashboard').append(info[i].title)
		$('#dashboard').append(info[i].author)
		$('#dashboard').append('<img src=' + info[i].media.m + '/>')
	}
}