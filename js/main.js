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

const planetInfoContainer = document.createElement("div");
planetInfoContainer.className = "planet-info-container";
mainContainer.appendChild(planetInfoContainer);

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
  // console.log(data);
  return data;
}

// Functions
function handleClick(event) {
  headerContainer.style.display = "none";
  planetContainer.style.display = "none";
  sun.style.backgroundColor = "#428ED4";

  getPlanets().then((data) => {
    console.log(data.bodies);
    data.bodies.forEach((planet) => {
      console.log(planet.id, event.target.id);
      if (planet.id == event.target.id) {
        console.log(planet);
      }
      console.log(planet.id);
    });
  });

  console.log("CLICK ON: ", event.target.className, event.target.id);
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

const sun = document.createElement("article");
sun.setAttribute("id", "0");
sun.className = "sun";
sun.addEventListener("click", handleClick);
mainContainer.appendChild(sun);

const planetContainer = document.createElement("section");
planetContainer.className = "planet-container";
mainContainer.appendChild(planetContainer);

// Planet Content -------------------------------

getPlanets().then((data) => {
  data.bodies.forEach((planet, index) => {
    if (
      planet.name.toLowerCase() !== "solen" &&
      planet.name.toLowerCase() !== "saturnus"
    ) {
      const planetElem = document.createElement("article");
      planetElem.setAttribute("id", index);
      planetElem.className = planet.name.toLowerCase();
      planetElem.addEventListener("click", handleClick);
      planetContainer.appendChild(planetElem);
    }
    if (planet.name.toLowerCase() === "saturnus") {
      const planetElem = document.createElement("article");
      const saturnusRing = document.createElement("img");
      saturnusRing.src = "/css/img/Ellipse 10.png";
      saturnusRing.setAttribute("id", "ring");
      saturnusRing.className = "saturnus-ring";
      planetElem.setAttribute("id", index);
      planetElem.className = planet.name.toLowerCase();
      planetElem.addEventListener("click", handleClick);
      planetElem.appendChild(saturnusRing);
      planetContainer.appendChild(planetElem);
    }
    console.log(planet.name);
  });
});

// Footer Content ------------------------------

const logoFooterContainer = document.createElement("img");
logoFooterContainer.className = "img-footer-container";
logoFooterContainer.src = "/css/img/vector.png";
footerContainer.appendChild(logoFooterContainer);
