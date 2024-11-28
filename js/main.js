// open and close mobile links;
let mobileLinks = document.querySelector(".navbar .mobile-links");
let menuBtn = document.querySelector(".navbar .menu-icon");

menuBtn.addEventListener("click", () => {
  mobileLinks.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

// scroll to top;
let scrollToBtn = document.querySelector(".scroll-to-top");

scrollToBtn.addEventListener("click", () => {
  scrollTo({
    top: "0",
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToBtn.classList.add("active");
  } else {
    scrollToBtn.classList.remove("active");
  }
});

// laoding page;
let loadingPage = document.querySelector(".loading-section");

window.onload = () => {
  loadingPage.classList.add("hide");
  document.body.classList.remove("no-scroll");
};
