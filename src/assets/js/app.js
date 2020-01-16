const os = require('os')
const $  = require('jquery')

$(function () {
	
	$('.list-group-item').on('click', function () {
		$('.selected').removeClass('selected');

		$(this).addClass('selected');

		$('#image-displayed').attr('src', $(this).find('img').attr('src'));
	})

})

