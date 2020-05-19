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



// function fetchCloud() {
// 	let h1 = document.getElementById('title');
// 	searchContainer = document.getElementById('searchContainer');
// 	searchTerm = document.getElementById('searchTerm');
// 	searchLocation = document.getElementById('searchLocation');
// 	searchBar = document.getElementById('search');
// 	loadIcon = document.getElementById('loadIcon');

// 	searchContainer.style.opacity = '1';
// 	h1.style.top = '0px';
// 	h1.style.fontSize = '28px';
// 	searchBar.style.opacity = '0';
// 	loadIcon.style.zIndex = '10';
// 	loadIcon.style.opacity = '1';
// 	searchBar.style.cursor = 'none';
// 	console.log('test');


// }
