const os = require('os')
const $  = require('jquery')

$(function () {
	
	$('.list-group-item').on('click', function () {
		$('.selected').removeClass('selected');

		$(this).addClass('selected');

		$('#image-displayed').attr('src', $(this).find('img').attr('src'));
	})

	$('#txt-search').on('keyup', function () {
		var lista = $('.list-group-item');
		var busqueda = $(this).val().trim();
		var data = '';
		var contador = 0;

		if (busqueda === '')
		{
			for (var item of lista)
			{
				$(item).removeClass('selected').fadeIn();
			}
		} else {

			for (var item of lista)
			{
				data = $(item).data('name');

				if (data.includes(busqueda))
				{
					contador++;

					if (contador === 1)
					{
						$(item).addClass('selected').show();
						$('#image-displayed').attr('src', $(item).find('img').attr('src'));
					}
					else
						$(item).removeClass('selected').show();
				} else {
					$(item).fadeOut();
				}
			}			
		}
	})



})

