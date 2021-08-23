document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('#toggle')
  const menu = document.querySelector('.nav-menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('is-visible');
  });
});