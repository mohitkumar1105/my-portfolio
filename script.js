const nav_bar = document.querySelector(".menubar");
const nav_header = document.querySelector(".navbar");

const toggleNavbar = () =>{
  nav_header.classList.toggle("active");

}


nav_bar.addEventListener("click", () => toggleNavbar());




