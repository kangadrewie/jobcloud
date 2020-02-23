function fetchCloud() {
	let h1 = document.getElementById('title');
	searchContainer = document.getElementById('searchContainer');
	searchTerm = document.getElementById('searchTerm');
	searchLocation = document.getElementById('searchLocation');
	searchBar = document.getElementById('search');
	loadIcon = document.getElementById('loadIcon');

	searchContainer.style.opacity = '1';
	h1.style.top = '0px';
	h1.style.fontSize = '28px';
	// searchTerm.style.backgroundColor = 'transparent';
	// searchLocation.style.backgroundColor = 'transparent';

	// searchTerm.style.opacity = '0';
	// searchLocation.style.opacity = '0';
	// searchButton.style.opacity
	searchBar.style.opacity = '0';
	loadIcon.style.zIndex = '10';
	loadIcon.style.opacity = '1';
	searchBar.style.cursor = 'none';
	console.log('test');


}

function hoverCloud() {
	searchContainer = document.getElementById('searchContainer');
	searchTerm = document.getElementById('searchTerm');
	searchLocation = document.getElementById('searchLocation');
	searchBar = document.getElementById('search');

	searchTerm.style.backgroundColor = 'white';
	searchLocation.style.backgroundColor = 'white';
	searchBar.style.opacity = '1';
}


function resultsContainer() {
	resultsContainer = document.getElementById('results_container');
	resultsContainer.style.marginTop = "180px";
	// resultsContainer.style.position = 'absolute';
	header()
}

function header(){
	let header = document.getElementById('headerLogo');
	header.style.top = '45px';
	header.style.opacity = '1';
}

function clearFields() {
	frm = document.getElementsByTagName('FORM');
	frm.reset();  // Reset all form data
	return false;

}

function abort() {
	resultsContainer = document.getElementById('results_container');
	resultsContainer.style.marginTop = '100vh';

	searchBar = document.getElementById('search');
	loadIcon = document.getElementById('loadIcon');
	searchBar.style.opacity = '1';
	loadIcon.style.zIndex = '-10';
	// loadIcon.style.opacity = '0';

	let h1 = document.getElementById('title');
	h1.style.top = '0px';
	h1.style.fontSize = '60px';

	let header = document.getElementById('headerLogo');
	header.style.top = '45px';
	header.style.opacity = '0';

}

//POST SEARCH
$(function () {

	$('form').on('submit', function (e) {

		e.preventDefault();

		$.ajax({
			type: 'post',
			url: '/getIP',
			data: $('form').serialize(),
			success: function (data) {
				var output = JSON.stringify(data.wordcloud);
				var stripped = output.slice(1,-2);
				console.log(stripped);
				$('#cloud').attr('src', stripped);
				resultsContainer();
			}
		});

	});

});

//Search Details
function searchDetails(searchTerm, searchLocation) {

}