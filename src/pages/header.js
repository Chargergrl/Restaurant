import moonImage from "../assets/images/moon.jpg";

const headerDiv = function (){
    const header = document.createElement("div");
    header.id="header";
    const moon = document.createElement("img");
    header.style.backgroundImage = 'url(' + moonImage + ')';



    const headerContainer = document.createElement("div");
    headerContainer.id="header-contain";

    const headerTitle = document.createElement("h1");
    headerTitle.textContent = "Fry Me to the Moon";
    headerTitle.classList.add("header-title");

    const headerSlogan = document.createElement("h2");
    headerSlogan.textContent = "Satisfy your cravings and launch your senses";

    const headerLinks = document.createElement("div");
    headerLinks.classList.add("header-links");

    const menuLink = document.createElement("button");
    menuLink.textContent = "Menu";
    menuLink.id = "menu-link";
    menuLink.classList.add("header-link");

    const aboutLink = document.createElement("button");
    aboutLink.textContent = "About";
    aboutLink.id = "about-link";
    aboutLink.classList.add("header-link");

    const homeLink = document.createElement("button");
    homeLink.textContent = "Home";
    homeLink.id = "home-link";
    homeLink.classList.add("header-link");

    header.appendChild(headerContainer);
    headerContainer.appendChild(headerTitle);
    headerContainer.appendChild(headerSlogan);
    headerContainer.appendChild(headerLinks);
    headerLinks.appendChild(homeLink);
    headerLinks.appendChild(menuLink);
    headerLinks.appendChild(aboutLink);
    

    return header;
}

export default headerDiv;
