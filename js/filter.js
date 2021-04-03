const filters = document.querySelectorAll('.gallery-filter');
const el = document.querySelectorAll('.gallery-element');
let selector = 'mix';

handleSelect(selector);
function handleSelect(n) {
  for (let j = 0; j < el.length; j++) {
    el[j].classList.remove('show');
    if ([...el[j].classList].indexOf(n) > -1) {
      el[j].classList.add('show');
    }
  }
}

filters.forEach(filter => filter.addEventListener('click', function() {
  let current = document.querySelector('.select');
  current.classList.remove('select');
  this.classList.add('select');
  selector = this.dataset.type;
  handleSelect(selector);
 })
)
