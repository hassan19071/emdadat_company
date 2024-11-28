// open and close mobile links;
let mobileLinks = document.querySelector(".navbar .mobile-links");
let menuBtn = document.querySelector(".navbar .menu-icon");

menuBtn.addEventListener("click",()=>{
    mobileLinks.classList.toggle("active");
    menuBtn.classList.toggle('active');
})