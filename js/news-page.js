//news-page.js
// Toggle icon to open the responsive menu
const menuToggle = document.querySelector('.toggle');
const primaryNavBar = document.querySelector('#primary-nav');
const secondaryNavBar = document.querySelector('#secondary-nav');
menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle('active');
	primaryNavBar.classList.toggle('active');
	secondaryNavBar.classList.toggle('active');
});
// Toggle icon to close the responsive menu when a section anchor is clicked
secondaryNavBar.addEventListener('click', () => {
	menuToggle.classList.toggle('active');
	primaryNavBar.classList.toggle('active');
	secondaryNavBar.classList.toggle('active');
});