$(document).ready(function(){
	$.ajax({
		url: 'https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=wootwoot',
		type: 'GET',
		dataType: 'jsonp'
	})
	.success(function() {
		wootwoot()
	});

});

function wootwoot(data) {
	var info = data.items
	for(var i = 0; i < info.length; i++) {
		$('#dashboard').append(info[i].title)
		$('#dashboard').append(info[i].author)
		$('#dashboard').append('<img src=' + info[i].media.m + '/>')
	}
}