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
// Activate Scrollspy Navbar
// ========================

// for clickable event

const navs = document.querySelectorAll('.nav');

function handleNav() {
  navs.forEach(n => n.classList.remove('activeNav'));
  this.classList.add('activeNav');
}

navs.forEach(nav => nav.addEventListener('click', handleNav));


// for Scrollspy Navbar

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkNav() {
  let observer = new IntersectionObserver(function(entries){
    for (let i = 0; i < entries.length; i++) {
      let navID = document.getElementsByClassName(entries[i].target.id)[0];
      if (entries[i]['isIntersecting'] === true) {
        navID.classList.add('activeNav');
      } else {
        navID.classList.remove('activeNav');
      }
    }
  }, {rootMargin: '-150px', threshold: [0]});
  observer.observe(document.querySelector('#sliderNav'));
  observer.observe(document.querySelector('#aboutNav'));
  observer.observe(document.querySelector('#featureNav'));
  observer.observe(document.querySelector('#pictureNav'));
  observer.observe(document.querySelector('#artistNav'));
  observer.observe(document.querySelector('#locationNav'));
}

window.addEventListener('scroll', debounce(checkNav));


// ========================
// About - show flavour place bar on scroll
// ========================

function showBar() {
  let flavourPlace = document.querySelector('.flavourPlace');
  let observer = new IntersectionObserver(function(bar){
    if (bar[0]['isIntersecting'] === true) {
      flavourPlace.classList.add('showBar');
    } else {
      flavourPlace.classList.remove('showBar');
    }
  }, {rootMargin: '-100px', threshold: [0]});
  observer.observe(flavourPlace);
}

window.addEventListener('scroll', debounce(showBar));


// ========================
// About - show artist card on scroll
// ========================

const artistCards = document.querySelectorAll('.artist-content');

function showArtist() {
  artistCards.forEach(artistCard => {
    const slideInAt = window.scrollY + window.innerHeight;
    const cardBottom = artistCard.offsetTop + artistCard.offsetHeight;
    const isHalfShown = slideInAt > artistCard.offsetTop;
    const isNotScrollPast = window.scrollY < cardBottom;
    if (isHalfShown && isNotScrollPast) {
      artistCard.classList.add('showArtist');
    } else {
      artistCard.classList.remove('showArtist');
    }
  });
}

window.addEventListener('scroll', debounce(showArtist));




// ========================
// Collapse Navbar
// ========================

const menuBtn = document.querySelector('.menuBtn');
const menuCloseBtn = document.querySelector('.menuCloseBtn');
const navbarCollapse = document.querySelector('.navbar-collapse');

function handleMenu() {
  navbarCollapse.classList.toggle('openMenu');
}

function handleClose() {
  navbarCollapse.classList.remove('openMenu');
}

function resizeHandler() {
  let viewWidth = window.innerWidth || window.visualViewport.width;
  if (viewWidth > 575 ) {
    navbarCollapse.classList.remove('openMenu');
  }
}

menuBtn.addEventListener('click', handleMenu);
menuCloseBtn.addEventListener('click', handleClose);
window.addEventListener('resize', resizeHandler);


