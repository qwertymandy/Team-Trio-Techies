// Code for smooth scrolling to section
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
});

// Code for showing/hiding the navigation menu on small screens
const toggleMenu = document.querySelector(".toggle-menu");
const navLinks = document.querySelector(".nav-links");

toggleMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Code for displaying the current year in the footer
const year = new Date().getFullYear();
const currentYear = document.querySelector(".current-year");
currentYear.textContent = year;
