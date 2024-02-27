function toggleMenu() {
  /* inbuilt system in JS, target element on the webpage, basically using the element */
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  /*target these two elements, whenever clicked either add or remove the 'open' class*/
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
