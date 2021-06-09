//join-us.js
// Toggle icon to open the responsive menu
const menuToggle = document.querySelector('.toggle');
const primaryNavBar = document.querySelector('#primary-nav');
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    primaryNavBar.classList.toggle('active');
});
