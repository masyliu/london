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
