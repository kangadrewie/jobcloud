function fetchCloud() {
	searchContainer = document.getElementById('searchContainer');
	searchTerm = document.getElementById('searchTerm');
	searchLocation = document.getElementById('searchLocation');
	searchBar = document.getElementById('search');
	loadIcon = document.getElementById('loadIcon');

	searchContainer.style.top = '180px';
	searchTerm.style.backgroundColor = 'transparent';
	searchLocation.style.backgroundColor = 'transparent';
	searchBar.style.opacity = '0.2';
	loadIcon.style.opacity = '1';
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