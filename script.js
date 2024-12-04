const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const navMenuMobile = document.getElementById("nav-menu-mobile");

const clickSound = new Audio("click.wav");

menuIcon.addEventListener("click", () => {
    // Toggle menu open/close
    menuIcon.classList.toggle("open");
    navMenu.classList.toggle("active");
    navMenuMobile.classList.toggle("active"); // Toggle mobile menu

    // Update aria-expanded attribute
    const isOpen = menuIcon.classList.contains("open");
    menuIcon.setAttribute("aria-expanded", isOpen);

    // Play sound effect
    clickSound.currentTime = 0; // Restart sound if already playing
    clickSound.play();
});