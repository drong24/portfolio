

// adds fade in animation for about section when site is loaded
window.addEventListener('load', () => {
    const aboutSection = document.getElementById('frontpage');
    addFadeInAnimation(aboutSection);
})
// adds fade in animation when a section enters the viewport
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.fade_in'); // target all "fade_in" sections
    sections.forEach(section => {
        addFadeInAnimation(section);
    });
});

// used by scroll and load event listeners to add fade in animation
function addFadeInAnimation(element) {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight && elementBottom > 0) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    } else {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
    }
}

/* Dark Mode */
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");
const overlayMenu = document.querySelector(".overlay");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth >= 992) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
         overlayMenu.classList.remove("is-active");
      }
   }
});

// Dark and Light Mode on Switch Click
document.addEventListener("DOMContentLoaded", () => {
   const darkSwitch = document.getElementById("switch");

   darkSwitch.addEventListener("click", () => {
      document.documentElement.classList.toggle("darkmode");
      document.body.classList.toggle("darkmode");
   });
});
