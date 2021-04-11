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
// Temperature Area - shakeing effect
// ========================

function shaking() {
  let temperature = document.querySelector('.temperatureArea');
  let observer = new IntersectionObserver(function(temp){
    if (temp[0]['isIntersecting'] === true) {
      temperature.classList.add('shake');
    } else {
      temperature.classList.remove('shake');
    }
  }, {threshold: [0]});
  observer.observe(temperature);
}

window.addEventListener('scroll', debounce(shaking));



// ========================
// Artist - show artist card on scroll
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


