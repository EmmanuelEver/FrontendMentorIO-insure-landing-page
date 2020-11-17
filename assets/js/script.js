const menu_toggler = document.getElementById("menu-toggler");
const nav_menu = document.getElementById("nav-dropdown");



const showNavDropwdown = () => {
	menu_toggler.setAttribute("src", "./images/icon-close.svg")
	nav_menu.style.transform = "translateX(0%)";
}

const hideNavDropwdown = () => {
	menu_toggler.setAttribute("src", "./images/icon-hamburger.svg")
	nav_menu.style.transform = "translateX(-100%)";
}

menu_toggler.addEventListener("click", (e) => {
	nav_menu.style.transform == "translateX(0%)" ? hideNavDropwdown() : showNavDropwdown()
})
