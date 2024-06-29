// Toggle Class Active for Hamburger Menu
const navbarNav = document.querySelector('.navbar-nav');
// When Toogle Click//
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Click Outside Element to Remove Element
const hm = document.querySelector('#hamburger-menu');


document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
});


var achievementSlider = document.querySelector('.achievement-slider');
achievementSlider.addEventListener('scroll', function() {
  // Deteksi saat slide berhenti scroll
  var scrollLeft = achievementSlider.scrollLeft;
  var cardWidth = document.querySelector('.achievement-card').offsetWidth;
  var currentIndex = Math.round(scrollLeft / cardWidth);
  console.log('Current Index:', currentIndex);
});