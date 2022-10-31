const hamburger = document.querySelector(`#hemburger`);
const navBarLinks = document.querySelector(`.nav-bar__links__container`);
const navBar = document.querySelector(`.nav-bar`);
const x = document.querySelector(`#x`);
const linkNav = document.querySelectorAll(`.nav-bar__link`);
const navLogo = document.querySelector(`.nav-bar__logo`);

const imges = document.querySelectorAll(`.img__container`);
const hamburgerHanddler = () => {
	navBarLinks.classList.add(`navlinksshow`);
	document.querySelector(`body`).style.backgroundColor = `gray`;
	navBarLinks.style.height = `${window.innerHeight}px`;
};

const xHanddler = () => {
	navBarLinks.classList.remove(`navlinksshow`);
	document.querySelector(`body`).style.backgroundColor = `initial`;
};

hamburger.addEventListener(`click`, hamburgerHanddler);
x.addEventListener(`click`, xHanddler);

window.innerHeight;

onscroll = (event) => {
	if (window.scrollY > 100) {
		navBar.style.opacity = `1`;
		navBar.classList.add(`bgwhite`);
		navLogo.style.fontSize = `6rem`;
		navLogo.style.paddingTop = `2rem`;
		navLogo.style.paddingBottom = `2rem`;
		for (link of linkNav) {
			link.style.fontSize = `2.5rem`;
			link.classList.remove(`op`);
		}
	} else {
		navBar.style.opacity = `0`;
	}
};

const images = document.querySelectorAll(".img");
let imgSrc;
// get images src onclick
images.forEach((img) => {
	img.addEventListener("click", (e) => {
		imgSrc = e.target.src;
		//run modal function
		imgModal(imgSrc);
	});
});
//creating the modal
let imgModal = (src) => {
	const modal = document.createElement("div");
	modal.setAttribute("class", "modal");
	//add the modal to the main section or the parent element
	document.querySelector(".gellery_image_container").append(modal);
	//adding image to modal
	const newImage = document.createElement("img");
	newImage.setAttribute("src", src);
	//creating the close button
	const closeBtn = document.createElement("i");
	closeBtn.setAttribute("class", "fas fa-times closeBtn");
	//close function
	closeBtn.onclick = () => {
		modal.remove();
	};
	modal.append(newImage, closeBtn);
};
