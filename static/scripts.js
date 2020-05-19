$(document).ready(function() {

	$('form').on('submit', function (e) {

		e.preventDefault();
		$('#title').css({'top': '0px', 'font-size': '28px'});
		$('#search').css({'opacity': '0', 'cursor': 'none'});
		$('#loadIcon').css({'z-index': '10', 'opacity': '1'});

		job_title = $('#searchTerm').val();
		job_location = $('#searchLocation').val();

		$.ajax({
			type: 'post',
			url: '/searching-catalog',
			data: $('form').serialize(),
			success: function (data) {
				//Once Webscraping is completed. Reredirect to results page
				document.location.href = '/search-results';
			}
		});

	});

});
