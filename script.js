document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.getElementById('burgerBtn');
  const navbarNav = document.getElementById('navbarNav');
  const overlay = document.getElementById('overlay');
  const body = document.body;

  function toggleMenu() {
    burgerBtn.classList.toggle('active');
    navbarNav.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('menu-open');
  }

  function closeMenu() {
    burgerBtn.classList.remove('active');
    navbarNav.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('menu-open');
  }

  burgerBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  const navLinks = navbarNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
});