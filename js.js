// $.getJSON('https://jsonplaceholder.typicode.com/posts', function(data){

//  $.each(data, function(i, data){
//  	$('ul').append('<div><p class="title">'+data.title+'</p><p class="body">'+data.body+'</p></div>')
//  })

// });

// $.ajax({
// 	method: 'GET',
// 	url: 'https://jsonplaceholder.typicode.com/posts',
// 	dataType: 'json'
// }).done(function(data){
// 	console.log(data);
// })

$('#postForm').submit(function(e){
	e.preventDefault();
	alert('yes');
	var title = $('#title').val();
	var body = $('#body').val();
	var url = $(this).attr('action');

	$.post(url, {title: title, body: body}).done(function(data){
		console.log('Post saved');
		console.log(data);
	});
	$.ajax({
	  type: "GET",
	  url: url,
	  data: {title: title, body: body},
	  success: function(data) {
	  	console.log(data);
	  }
	});

	$.ajax({
	  type: "POST",
	  url: url,
	  data: {title: title, body: body},
	  success: function(data) {
	  	console.log(data);
	  }
	});



})

$('.inner').click(function (event) {
	alert('inner');
	// event.preventDefault();
	// event.stopPropagation();
	return false;
})
// $('.outer').click(function () {
// 	alert('outer')

// })