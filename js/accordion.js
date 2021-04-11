// ========================
// Feature - accordion
// ========================

const accordions = document.querySelectorAll('.accordion');
let opened = document.querySelector('.open');
handlePanel(opened);

function handlePanel(n) {
  let currentPanel = n.nextElementSibling;
  currentPanel.style.display = 'block';
}

function handleAccordion() {
  const panels = document.querySelectorAll('.panel');
  for (let i = 0; i < panels.length; i++) {
    panels[i].style.display = 'none';
  }
  opened.classList.remove('open');
  this.classList.add('open');
  opened = this;
  handlePanel(opened);
}

accordions.forEach(accordion => accordion.addEventListener('click', handleAccordion));