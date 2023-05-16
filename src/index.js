import "./styles/home.css";
import "./styles/about.css";
import "./styles/menu.css";
import firstLoad from "./functions/firstLoad";
import home from "./pages/home";
import render from "./functions/render";
import about from "./pages/about";
import menu from "./pages/menu";

firstLoad();

// Wait for the document to finish loading before accessing any elements
document.addEventListener("DOMContentLoaded", function() {
    // Get the element you want to add the event listener to
    const menuButton = document.getElementById("menu-link");
    const aboutButton = document.getElementById("about-link");
    const homeButton = document.getElementById("home-link");
  
    // Check if the element exists before adding the event listener
    if (menuButton) {
      menuButton.addEventListener("click", function() {
        render();
        menu();
    });
    }

    if (aboutButton) {
        aboutButton.addEventListener("click", function () {
            render();
            about();
        });
    }

    if (homeButton) {
        homeButton.addEventListener("click", function(){
            render();
            home();
        });
    }
    
});
  