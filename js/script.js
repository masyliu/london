// ========================
// Fixed-header
// ========================

const header = document.querySelector('.header');

function fixedHeader() {
  if (window.pageYOffset > 15) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
};

window.addEventListener('scroll', fixedHeader);

// ========================
// Navbar
// ========================

const menuBtn = document.querySelector('.menuBtn');
const menuCloseBtn = document.querySelector('.menuCloseBtn');
const nav = document.querySelector('.navbar-collapse');

function handleMenu() {
  nav.classList.add('openMenu');
}
function handleClose() {
  nav.classList.remove('openMenu');
}

function resizeHandler() {
  if (window.visualViewport.width > 575) {
    nav.classList.remove('openMenu');
  }
}

menuBtn.addEventListener('click', handleMenu);
menuCloseBtn.addEventListener('click', handleClose);
window.visualViewport.addEventListene('resize', resizeHandler);