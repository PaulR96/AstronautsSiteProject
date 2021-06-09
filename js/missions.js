//missions.js
// Toggle icon to open the responsive menu
const menuToggle = document.querySelector('.toggle');
const primaryNavBar = document.querySelector('#primary-nav');
menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle('active');
	primaryNavBar.classList.toggle('active');
});
//Toggle the list of the crew members
var crewToggle = document.getElementsByClassName("view-crew");
for (var i = 0; i < crewToggle.length; i++) {
	crewToggle[i].addEventListener("click", function () {
		var crew = this.nextElementSibling;
		if (crew.style.display === "block") {
			crew.style.display = "none";
		} else {
			crew.style.display = "block";
		}
	});
}
// Fixing the SecondaryNavBar while scrolling & modify CSS properties for anchors
var SecondaryNavBar = document.getElementById("secondary-nav");
var backToTop = document.getElementById("back-to-top");
var fixed = SecondaryNavBar.offsetTop;
var futureAnchor = document.getElementById("future-anchor");
var futureSection = document.getElementById("future");
var currentAnchor = document.getElementById("current-anchor");
var currentSection = document.getElementById("current");
var pastAnchor = document.getElementById("past-anchor");
var pastSection = document.getElementById("past");
window.onscroll = function () { FunctionScrool() }; // This function will invoked every time the page scrolls
function FunctionScrool() {
	if (window.pageYOffset >= fixed) { // When the scroll page reach the SecondaryNavBar it will become fixed
		SecondaryNavBar.classList.add("fixed");
		backToTop.style.visibility = "visible";
	} else {
		SecondaryNavBar.classList.remove("fixed");
		backToTop.style.visibility = "hidden";
	}
	futureAnchor.classList.remove("actualSection");
	currentAnchor.classList.remove("actualSection");
	pastAnchor.classList.remove("actualSection");
	// Modify CSS properties of the anchors when the scroll page reach the respective section
	if (window.pageYOffset >= futureSection.offsetTop && window.pageYOffset < currentSection.offsetTop) {
		futureAnchor.classList.add("actualSection");
	} else if (window.pageYOffset >= currentSection.offsetTop && window.pageYOffset > futureSection.offsetTop && window.pageYOffset < pastSection.offsetTop) {
		currentAnchor.classList.add("actualSection");
	} else if (window.pageYOffset >= pastSection.offsetTop && window.pageYOffset > currentSection.offsetTop) {
		pastAnchor.classList.add("actualSection");
	} else {
		futureAnchor.classList.remove("actualSection");
	}
}