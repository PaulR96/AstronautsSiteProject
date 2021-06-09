//gallery.js
/**
			* ...
			*/
//Initialization of the variables
var i = 0; // This variable will represent the current image selected
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var img9 = document.getElementById("img9");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var hero = document.getElementById("hero");
// this array contains all the elements of the slider
var pictures = document.getElementsByClassName("pictures");
// this array contains all the background images of the elementes in the slider
var backgroundImg = new Array("img/space10.jpg", "img/space2.jpg", "img/space3.jpg", "img/space11.jpg", "img/space5.jpg", "img/space6.jpg", "img/space7.jpg", "img/space8.jpg", "img/space9.jpg");
/**
* initializeSlider()
* Set the slider in the same way every time the page is loaded
*/
function initializeSlider() { // Invoked only when the page is loaded in the browser
	hero.style.backgroundImage = 'url("' + backgroundImg[0] + '")'; // The hero image is the first one in the array
	for (var j = 0; j < backgroundImg.length; j++) {
		pictures[j].style.backgroundImage = 'url("' + backgroundImg[j] + '")'; // Set the images in the preview 
	}
	updateSlider(0, 4); // Always shows the first 5 images
}
/**
* updateSlider(min, max)
* @param {number} first - first image to show in the 5 image in the preview
* @param {number} last - last image to show in the 5 image in the preview
*/
function updateSlider(first, last) { // Shows only the images between the two parameters
	for (var j = 0; j < backgroundImg.length; j++) { // hide all the images
		pictures[j].style.display = 'none';
	}
	for (var j = first; j <= last; j++) { // shows only the images that you want to see
		pictures[j].style.display = 'flex';
	}
}
/**
* goNextPicture()
* Select the previous image in the preview
*/
function goNextPicture() {
	if (i < backgroundImg.length - 1) {
		i++;
		hero.style.backgroundImage = 'url("' + backgroundImg[i] + '")';
		pictures[i].classList.add("active");
		pictures[i - 1].classList.remove("active");
		//
		pictures[i + 1].style.display = 'flex';
		pictures[i - 4].style.display = 'none';
	} else if (i == backgroundImg.length - 1) {	// if is the last image the slider continue to change images ciclyc
		i = 0;
		hero.style.backgroundImage = 'url("' + backgroundImg[i] + '")';
		pictures[i].classList.add("active");
		pictures[backgroundImg.length - 1].classList.remove("active");
		updateSlider(i, 4);
	}
}
/**
* goPrevPicture()
* Select the next image in the preview
*/
function goPrevPicture() {
	if (i > 0) {
		i--;
		hero.style.backgroundImage = 'url("' + backgroundImg[i] + '")';
		pictures[i].classList.add("active");
		pictures[i + 1].classList.remove("active");
		//
		pictures[i - 1].style.display = 'flex';
		pictures[i + 4].style.display = 'none';
	} else if (i == 0) {	// if is the first image the slider continue to change images ciclyc
		i = backgroundImg.length - 1;
		hero.style.backgroundImage = 'url("' + backgroundImg[i] + '")';
		pictures[i].classList.add("active");
		pictures[0].classList.remove("active");
		updateSlider(i - 4, backgroundImg.length - 1);
	}
}
/**
* swicthHeroOnClick(pictureSelected,n)
* @param {element} pictureSelected - the div clicked
* @param {number} n - the position of the div clicked in the slider
*/
function swicthHeroOnClick(pictureSelected, n) { // Swicthing hero clicking on the images
	for (var j = 0; j < backgroundImg.length; j++) { // hide all the images
		pictures[j].classList.remove("active");
	}
	if (i >= 0) {
		hero.style.backgroundImage = 'url("' + backgroundImg[n] + '")'; // Set the hero image
		pictureSelected.classList.add("active");
		i = n;
		switch (i) { // The slider will always show 5 images, and the image clicked by the user will always be the third one when possible
			case 0:
				updateSlider(i, 4);
				break;
			case 1:
				updateSlider(i - 1, 4);
				break;
			case backgroundImg.length - 1:
				updateSlider(i - 4, backgroundImg.length - 1);
				break;
			case backgroundImg.length - 2:
				updateSlider(i - 3, backgroundImg.length - 1);
				break;
			default:
				updateSlider(i - 2, i + 2);
				break;
		}
	}
}
// onclick functions for the arrows in the slider
next.onclick = function () {
	goNextPicture();
}
prev.onclick = function () {
	goPrevPicture();
}
// onclick functions for each image in the slider
img1.onclick = function () {
	swicthHeroOnClick(img1, 0);
}
img2.onclick = function () {
	swicthHeroOnClick(img2, 1);
}
img3.onclick = function () {
	swicthHeroOnClick(img3, 2);
}
img4.onclick = function () {
	swicthHeroOnClick(img4, 3);
}
img5.onclick = function () {
	swicthHeroOnClick(img5, 4);
}
img6.onclick = function () {
	swicthHeroOnClick(img6, 5);
}
img7.onclick = function () {
	swicthHeroOnClick(img7, 6);
}
img8.onclick = function () {
	swicthHeroOnClick(img8, 7);
}
img9.onclick = function () {
	swicthHeroOnClick(img9, 8);
}
// Toggle icon to open the responsive menu
const menuToggle = document.querySelector('.toggle');
const primaryNavBar = document.querySelector('#primary-nav');
menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle('active');
	primaryNavBar.classList.toggle('active');
});
