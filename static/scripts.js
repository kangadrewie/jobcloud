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
	searchBar.style.opacity = '0';
	loadIcon.style.zIndex = '10';
	loadIcon.style.opacity = '1';
	searchBar.style.cursor = 'none';

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
	loadIcon.style.opacity = '0';

	let h1 = document.getElementById('title');
	h1.style.top = '0px';
	h1.style.fontSize = '60px';

	let header = document.getElementById('headerLogo');
	header.style.top = '45px';
	header.style.opacity = '0';

}

function hover() {
	fullscreen = document.getElementById('fullscreen');
	fullscreen.style.opacity = '0.3';
}

function noHover() {
	fullscreen = document.getElementById('fullscreen');
	fullscreen.style.opacity = '0';
}

function cloudClick() {
	popup = document.getElementById('popup');
	popupContent = document.getElementById('popup-content');
	popup.style.display = 'block';
	popup.style.opacity = '1';
}

function cloudClose() {
	popup = document.getElementById('popup');
	popup.style.opacity = '0';
	popup.style.display = 'none';	
}

function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
				$('.cloud').attr('src', stripped);
				$('title').text(cap(data.title) + ' Jobs in ' + cap(data.loc))
				resultsContainer();
			}
		});

	});

});
