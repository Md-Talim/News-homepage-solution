const navToggleBtn = document.querySelector(".menu-icon");
const navBar = document.querySelector(".primary-navigation");
const links = document.querySelectorAll(".links");
const web3Image = document.querySelector('.web3-img');

navToggleBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
  const hasActive = navBar.classList.contains("active");
  if (hasActive)
    navToggleBtn.setAttribute("src", "./assets/images/icon-menu-close.svg");
  else navToggleBtn.setAttribute("src", "./assets/images/icon-menu.svg");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
    const hasActive = navBar.classList.contains("active");
    if (hasActive)
      navToggleBtn.setAttribute("src", "./assets/images/icon-menu-close.svg");
    else navToggleBtn.setAttribute("src", "./assets/images/icon-menu.svg");
  });
});
