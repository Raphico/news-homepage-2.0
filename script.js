const menuBtn = document.querySelector('.mobile-menu-toggle');
const primaryNav = document.querySelector('.primary-navigation');

menuBtn.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    menuBtn.setAttribute('aria-expanded', true);
  } else {
    primaryNav.setAttribute('data-visible', false);
    menuBtn.setAttribute('aria-expanded', false);
  }
})
