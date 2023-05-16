import galacticFood from "../assets/images/galactic-chicken.jpg";
import lunarWings from "../assets/images/lunarwings.jpg";


const menu = function() {
    const content = document.querySelector("#content");

    const menuBackground = document.createElement("div");
    menuBackground.id = "menu-background";
    content.appendChild(menuBackground);

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    menuBackground.appendChild(menuContainer);

    const menuItem = document.createElement("div");
    menuItem.id = "menu-item";
    menuContainer.appendChild(menuItem);

    const galacticChick = document.createElement("img");
    galacticChick.src = galacticFood;
    galacticChick.id = "galactic-img"
    menuItem.appendChild(galacticChick);

    const menuItemContent = document.createElement("div");
    menuItemContent.classList.add("menu-item-content");
    menuItem.appendChild(menuItemContent);

    const galacticChicken = document.createElement("h2");
    galacticChicken.id = "galactic-chicken";
    galacticChicken.classList.add('chicken-item');
    galacticChicken.textContent = "Galactic Fried Chicken";
    
    menuItemContent.appendChild(galacticChicken);
   


    const galacticDes = [
        "Our crispy and juicy fried chicken is coated in a secret blend of spices, including our signature moon dust seasoning, for a flavor that's truly cosmic. One bite of this dish will transport you to another dimension of deliciousness."
    ]

    for (let i = 0; i < galacticDes.length; i++){
        const galacticParagraph = document.createElement("p");
        galacticParagraph.textContent = galacticDes[i];
        galacticParagraph.id = "chicken-paragraphs"
        menuItemContent.appendChild(galacticParagraph);
    }

    
    const menuItem2 = document.createElement("div");
    menuItem2.id = "menu-item";
    menuContainer.appendChild(menuItem2);

    const lunarWingsimg = document.createElement("img");
    lunarWingsimg.src = lunarWings;
    lunarWingsimg.id = "lunar-wing";
    menuItem2.appendChild(lunarWingsimg);

    const menuItem2Content = document.createElement("div");
    menuItem2Content.classList.add("menu-item-content");
    menuItem2.appendChild(menuItem2Content);

    const lunarWingContent = document.createElement("h2");
    lunarWingContent.id = "lunar-wing-des";
    lunarWingContent.classList.add('chicken-item');
    lunarWingContent.textContent = "Lunar Landing Chicken Wings";

    menuItem2Content.appendChild(lunarWingContent);

    const lunarLandingDes = [
        "Crispy fried chicken wings coated in a tangy moon dust seasoning. Embark on a flavor adventure as you bite into these expertly fried wings. The secret blend of spices known as moon dust tantalizes your taste buds, creating a heavenly combination of crunch and tanginess. Choose your preferred spice level and pair these celestial delights with your favorite dipping sauce or our specially crafted moon salsa."
    ]

    for (let i = 0; i < lunarLandingDes.length; i++){
        const lunarParagraph = document.createElement("p");
        lunarParagraph.textContent = lunarLandingDes[i];
        lunarParagraph.id = "wing-paragraphs"
        menuItem2Content.appendChild(lunarParagraph);
    }




}

export default menu