const loadHeaderHTML = (url, selector, callback) => {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        element.innerHTML = html;
      });
      if (typeof callback === 'function') {
        callback();
      }
    })
    .catch((error) => console.error("Error loading header:", error));
};

loadHeaderHTML("header.html", ".header", () => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const body = document.body;
    if (!isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (href.startsWith('/') || href.startsWith('http')) {
        toggleMenu();
        return;
      }
  
      event.preventDefault();
      const targetId = href.replace('#', '');
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        toggleMenu();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (
      mobileMenu.classList.contains('is-open') &&
      !event.target.closest('.js-menu-container') &&
      !event.target.closest('.js-open-menu')
    ) {
      toggleMenu();
    }
  });

  window.matchMedia('(min-width: 1279px)').addEventListener('change', (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      toggleMenu();
    }
  });
});
