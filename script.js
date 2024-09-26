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

navMenu.forEach(n => n.addEventListener('click', linkAction));


// shadow header 
const shadowHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add("shadow-header") : header.classList.remove('shadow-header');
}

window.addEventListener('scroll', shadowHeader);