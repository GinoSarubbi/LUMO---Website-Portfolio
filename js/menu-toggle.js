    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    if (menuBtn && mobileNav) {
      menuBtn.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('hidden') === false;
        menuBtn.setAttribute('aria-expanded', String(isOpen));
      });
    }