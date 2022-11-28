/* Sélection des éléments HTML */
// Le bouton "hamburger"
const toggler = document.getElementById('navbar-toggle');
// L'icône
const icon = document.querySelector('#navbar-toggle i');
// La navigation à afficher
const navmobile = document.getElementById('navbar-collapse');

function menumobile() {
	navmobile.classList.toggle('visible');
	if (icon.classList.contains('fa-bars')) {
		icon.classList.add('fa-xmark');
		icon.classList.remove('fa-bars');
	}
	else {
		icon.classList.remove('fa-xmark');
		icon.classList.add('fa-bars');
	}
	// Avec 2 toggle
	//icon.classList.toggle('fa-xmark');
	//icon.classList.toggle('fa-bars');
}

//
// CODE PRINCIPAL
//

document.addEventListener("DOMContentLoaded", function () {
	toggler.addEventListener('click', menumobile);
});