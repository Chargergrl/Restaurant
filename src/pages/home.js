import rocketImg from "../assets/images/rocket.jpg";

const home = function() {

    const content = document.querySelector("#content");

    const pageBackground = document.createElement("div");
    pageBackground.classList.add("page-bg");
    pageBackground.id="background";
    content.appendChild(pageBackground);
    

    const homeMain = document.createElement("div");
    homeMain.classList.add("home-main");
    pageBackground.appendChild(homeMain);

    const homeContain = document.createElement("div");
    homeContain.classList.add("home-contain");
    homeMain.appendChild(homeContain);

    const rocket = document.createElement("img");
    rocket.src = rocketImg;
    rocket.id = "rocket-img"
    homeContain.appendChild(rocket);

    const homeDiv = document.createElement("div");
    homeDiv.id = "homeDiv";
   

    const infoContent = [
        "Come and join us at Fry Me to the Moon, where the stars align with the sizzle of succulent chicken.",
        "Discover the magic of a space-themed culinary adventure that will transport you to new frontiers of flavor.",
        "Whether you're an avid space enthusiast or simply seeking a unique dining experience, our restaurant promises to ignite your senses and leave you with memories that will linger like constellations in the night sky.",
        "Prepare for liftoff and embark on a gastronomic odyssey that is simply extraordinary."
    ]

    for (let i = 0; i < infoContent.length; i++) {
        const homeParagraph = document.createElement("p");
        homeParagraph.textContent = infoContent[i];
        homeParagraph.id = "home-paragraphs"
        homeDiv.appendChild(homeParagraph);
    }

    homeContain.appendChild(homeDiv);


    const footer = document.createElement("div");
    footer.id="footer";
    content.appendChild(footer);

}

export default home;