// Navegación: cambiar estado activo
const navLinks = document.querySelectorAll('#nav-list li a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Menú hamburguesa móvil
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.classList.toggle('open');
});

// Ticker de titulares (ejemplo simple)
const tickerText = document.getElementById('ticker-text');
const titulares = [
  "Última hora: Avances en la vacuna contra el COVID-19.",
  "Economía mundial se recupera tras año difícil.",
  "Cambio climático: países firman nuevo acuerdo.",
  "Tecnología: lanzamiento del nuevo smartphone 5G.",
  "Medio ambiente: parques nacionales reciben récord de visitas."
];

let index = 0;
function updateTicker() {
  tickerText.textContent = titulares[index];
  index = (index + 1) % titulares.length;
}
updateTicker();
setInterval(updateTicker, 5000);

