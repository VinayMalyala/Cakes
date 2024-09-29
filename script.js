// show menu
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

// Menu show 
if(navToggle){
    navToggle.addEventListener("click", function(){
        navMenu.classList.add("show-menu");
    });
}

// Menu hidden 
if(navClose){
    navClose.addEventListener("click", function(){
        navMenu.classList.remove("show-menu");
    });
}

// remove menu mobile 
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener('click', linkAction));


// shadow header 
const shadowHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add("shadow-header") : header.classList.remove('shadow-header');
}

window.addEventListener('scroll', shadowHeader);

// swiper favorites
// document.addEventListener('DOMContentLoaded', () => {
//     const swiperFavorites = new Swiper('.favorites_swiper', {
//         loop: true,
//         grabCursor: true,
//         slidesPerView: "auto",
//         centeredSlides: "auto",
//     });
// });

// show scroll up 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
}

window.addEventListener('scroll', scrollUp);

// scroll section active links 
const sections = document.querySelectorAll("section[id");

const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        }else{
            sectionsClass.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);