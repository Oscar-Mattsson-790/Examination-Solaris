"use strict";

// Selected Elements
const body = document.querySelector("body");

// Create containers and set class

const mainContainer = document.createElement("main");
mainContainer.className = "main-container";
body.appendChild(mainContainer);

const headerContainer = document.createElement("header");
headerContainer.className = "header-container";
mainContainer.appendChild(headerContainer);

const footerContainer = document.createElement("footer");
footerContainer.className = "footer-container";
mainContainer.appendChild(footerContainer);

/*
TODO LIST: 

1. Skapa upp html element för varje planet
2. Skapa add event listener med "click" på varje planet
3. Hämta data och Skriv ut för varje planet vid "click":et
4. Lägg till HTML img-fil för varje planet

// Swamp VY mellan de sida 1 och 2?


5. Hämta och skriv ut H1 och H2
6. Hämta och skriv ut P - texten
7. Hämta och skriv ut H4 
  -OMKRETS med text 
  -KM FRÅN SOLEN med text
  -MAX TEMPERATUR med text
  -MIN TEMPERATUR med text

8. Lägg till en "gå tillbacka knapp" på Blåa solen


STYLE SIDA med CSS

1. Olika bakgrunds bilder på sidan
2. Flexbok för justering av planeterna
3. Gör en Div för solen - ändra färg via Javascript

Tillägg i HTML? 

1. Gör en div för solen på vänster sida

*/

const BASE_URL = "https://fathomless-shelf-54969.herokuapp.com";

async function getKey() {
  const response = await fetch(`${BASE_URL}/keys`, { method: "POST" });
  const data = await response.json();
  // console.log(data);

  return data.key;
}

async function getPlanets() {
  const key = await getKey();
  const response = await fetch(`${BASE_URL}/bodies`, {
    headers: {
      "x-zocom": key,
    },
  });
  const data = await response.json();
  return data;
}

// Header Content --------------------------------

const h1HeaderContainer = document.createElement("h1");
h1HeaderContainer.className = "h1-header-container";
h1HeaderContainer.textContent = "solsystemet";
headerContainer.appendChild(h1HeaderContainer);

const h3HeaderContainer = document.createElement("h3");
h3HeaderContainer.className = "h3-header-container";
h3HeaderContainer.textContent = "solaris";
headerContainer.appendChild(h3HeaderContainer);
// Main Content ----------------------------

const articleMainContainer = document.createElement("article");
articleMainContainer.className = "article-main-container-sun";
mainContainer.appendChild(articleMainContainer);

const planetContainer = document.createElement("section");
planetContainer.className = "planet-container";
mainContainer.appendChild(planetContainer);

// Planet Content -------------------------------

getPlanets().then((data) => {
  for (let planet of data.bodies) {
    if (planet.name.toLowerCase() !== "solen") {
      const planetElem = document.createElement("article");
      planetElem.className = planet.name.toLowerCase();
      planetContainer.appendChild(planetElem);
    }
    console.log(planet.name);
  }
});

// Footer Content ------------------------------

const logoFooterContainer = document.createElement("img");
logoFooterContainer.className = "img-footer-container";
logoFooterContainer.src = "/css/img/vector.png";
footerContainer.appendChild(logoFooterContainer);
