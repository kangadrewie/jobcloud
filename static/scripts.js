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
