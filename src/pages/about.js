const about = function(){
    const content = document.querySelector("#content");
    content.style= "overflow: scroll";

    const backgroundAbout = document.createElement("div");
    backgroundAbout.id="background-about";
    content.appendChild(backgroundAbout);

    const aboutDiv = document.createElement("div");
    aboutDiv.id = "about-div";
    backgroundAbout.appendChild(aboutDiv);

    const aboutContent = [
        "Welcome to Fry Me to the Moon, where we're on a mission to serve up the most delicious fried chicken in the galaxy. Our restaurant is inspired by the wonders of space, and we're dedicated to creating an out-of-this-world dining experience for all of our customers.",
        "Our team of space explorers is always pushing the boundaries of flavor, experimenting with new techniques and ingredients to create dishes that are truly otherworldly. From our crispy, golden fried chicken to our tangy, cosmic dipping sauces, every dish is designed to transport you to a world of flavor that's unlike anything you've ever tasted.",
        "But we're not just about great food - we're also dedicated to providing a dining experience that's truly stellar. Our restaurant is outfitted with all the latest space-age technology, from our zero-gravity dining chairs to our holographic menus. And our team of friendly astronauts is always on hand to guide you through our menu and make sure your dining experience is nothing short of stellar.",
        "So whether you're a fan of classic Southern-style fried chicken or you're looking to try something new and exciting, Fry Me to the Moon has something for everyone. So put on your space suit, strap on your jetpack, and join us for a journey through the galaxy of flavor. We can't wait to blast off with you!"
    ]
    
    for (let i = 0; i < aboutContent.length; i++) {
        const aboutParagraph = document.createElement("p");
        aboutParagraph.textContent = aboutContent[i];
        aboutParagraph.id = "about-paragraphs"
        aboutDiv.appendChild(aboutParagraph);
      }
}

export default about;