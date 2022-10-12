const currentRoute = window.location.pathname;

const menuItems = [...document.querySelectorAll('header nav ul li a')];

menuItems.forEach(item => {
  if (item.getAttribute('href') === currentRoute) {
    item.classList.add('active');
  }
});
