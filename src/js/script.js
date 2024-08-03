function toggleMode() {
  const mobile_menu = document.getElementById("mobile_menu");

  mobile_menu.classList.toggle("active");
}
const btnMenu = document.getElementById("mobile_btn");
btnMenu.addEventListener("click", toggleMode);

function animarScroll() {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-item");
  const header = document.querySelector("header");
  const headerHeight = header ? header.offsetHeight : 0;
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition <= 0) {
    header.style.boxShadow = "none";
  } else {
    header.style.boxShadow = "5px 1px 5px rgba(0, 0, 0, 0.1)";

    let activeSectionIndex = -1;

    sections.forEach((section, i) => {
      const sectionTop = section.offsetTop - headerHeight;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
      }
    });

    navItems.forEach((item) => item.classList.remove("active"));

    if (activeSectionIndex >= 0 && navItems[activeSectionIndex]) {
      navItems[activeSectionIndex].classList.add("active");
    }
  }
}
window.addEventListener("scroll", animarScroll);

ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
  });

ScrollReveal().reveal('.dish', {
    origin: 'left',
    duration: 1700,
    distance: '20%'
  });

  ScrollReveal().reveal('#testimonial_chef', {
    origin: 'left',
    duration: 1000,
    distance: '20%'
  });

  ScrollReveal().reveal('.feedback', {
    origin: 'right',
    duration: 1000,
    distance: '20%'
  });

  ScrollReveal({ reset: true });