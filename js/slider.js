const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot')
let slideIndex = -1;
carousel();

function carousel() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slideIndex++;
  if (slideIndex + 1 > slides.length) {slideIndex = 0};
  slides[slideIndex].style.display = 'block';
  dots[slideIndex].className += ' active';
  setTimeout(carousel, 3000);
}

function showSlide(e) {
  var n = [...dots].indexOf(e.currentTarget);
  if (slideIndex !== n) {
    slideIndex = n;
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].className += ' active';
  }
}
dots.forEach(dot => dot.addEventListener('click', showSlide));
