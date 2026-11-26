const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = '☰';
}));

const slider = document.getElementById('distanceSlider');
const distanceValue = document.getElementById('distanceValue');
const statusBox = document.getElementById('statusBox');
const statusTitle = document.getElementById('statusTitle');
const statusText = document.getElementById('statusText');
const statusIcon = document.getElementById('statusIcon');
function updateDistance() {
  const distance = Number(slider.value);
  distanceValue.textContent = distance;
  const warning = distance < 20;
  statusBox.classList.toggle('warning', warning);
  statusTitle.textContent = warning ? 'OBJECT TOO CLOSE' : 'SAFE DISTANCE';
  statusText.textContent = warning ? 'Buzzer ON · Object is within 20 cm' : 'Buzzer OFF · Object is beyond 20 cm';
  statusIcon.textContent = warning ? '!' : '✓';
}
slider.addEventListener('input', updateDistance);
updateDistance();
