"use strict";

// Importer
import { getPlanets } from "./modules/api.js";
import { fillElementWithdata, appendChilds } from "./modules/display.js";

//Skapa alla element
const body = document.querySelector("body");

const mainContainer = document.createElement("main");
mainContainer.className = "main-container";
body.appendChild(mainContainer);

const headerContainer = document.createElement("header");
headerContainer.className = "header-container";
mainContainer.appendChild(headerContainer);

const footerContainer = document.createElement("footer");
footerContainer.className = "footer-container";
mainContainer.appendChild(footerContainer);

const planetInfoContainer = document.createElement("section");
planetInfoContainer.className = "planet-info-container";
mainContainer.appendChild(planetInfoContainer);

const h1HeaderContainer = document.createElement("h1");
h1HeaderContainer.className = "h1-header-container";
h1HeaderContainer.textContent = "solsystemet";

const h3HeaderContainer = document.createElement("h3");
h3HeaderContainer.className = "h3-header-container";
h3HeaderContainer.textContent = "solaris";

const sun = document.createElement("article");
sun.setAttribute("id", "0");
sun.className = "sun";
sun.addEventListener("click", handleClick);

const planetContainer = document.createElement("section");
planetContainer.className = "planet-container";

const logoFooterContainer = document.createElement("img");
logoFooterContainer.className = "img-footer-container";
logoFooterContainer.src = "/css/img/vector.png";

const h1ElemNameOfPlanet = document.createElement("h1");
const h3ElemNameOfPlanet = document.createElement("h3");
const textAboutPlanet = document.createElement("p");
const textLine = document.createElement("div");
const textContainer = document.createElement("article");
const h4ElemCircumference = document.createElement("h4");
const h4TextCircumference = document.createElement("p");
const h4ElemMaxTemprature = document.createElement("h4");
const h4TextMaxTemprature = document.createElement("p");
const textContainerSecond = document.createElement("article");
const h4ElemDistance = document.createElement("h4");
const h4TextDistance = document.createElement("p");
const h4ElemMinTemprature = document.createElement("h4");
const h4TextMinTemprature = document.createElement("p");
const wrapInfo = document.createElement("div");
const textLine2 = document.createElement("div");
const textContainerThird = document.createElement("article");
const h4ElemMoon = document.createElement("h4");
const h4TextMoon = document.createElement("p");

const planetsColors = [
  "#ffd029",
  "#888888",
  "#e7cdcd",
  "#428ed4",
  "#ef5f5f",
  "#e29468",
  "#c7aa72",
  "#c9d4f1",
  "#7a91a7",
];

// Fyller på kontainrar med element
appendChilds();

// HandleClick function - Event ----------------------------
function handleClick(event) {
  let planetId = event.target.id;

  sun.style.backgroundColor = event.target.style.backgroundColor;
  headerContainer.style.display = "none";
  planetContainer.style.display = "none";
  mainContainer.style.backgroundImage =
    "url('https://www.psdgraphics.com/file/night-sky-stars.jpg')";
  mainContainer.style.backgroundRepeat = "no-repeat";
  mainContainer.style.backgroundSize = "cover";

  if (sun.className === "sun active") {
    location.reload();
  } else {
    sun.classList.add("active");
  }

  if (planetId === "ring") {
    planetId = "6";
    sun.style.backgroundColor = "#c7aa72";
  }

  fillElementWithdata(planetId);
}

const returnToHomePageButton = document.createElement("button");
returnToHomePageButton.textContent = "⤺";
textContainerThird.appendChild(returnToHomePageButton);
returnToHomePageButton.addEventListener("click", () => {
  return location.reload();
});

getPlanets().then((data) => {
  data.bodies.forEach((planet, index) => {
    if (
      planet.name.toLowerCase() !== "solen" &&
      planet.name.toLowerCase() !== "saturnus"
    ) {
      const planetElem = document.createElement("article");
      planetElem.style.backgroundColor = planetsColors[index];
      planetElem.setAttribute("id", index);
      planetElem.className = planet.name.toLowerCase();
      planetElem.addEventListener("click", handleClick);
      planetContainer.appendChild(planetElem);
    }

    if (planet.name.toLowerCase() === "saturnus") {
      const planetElem = document.createElement("article");
      const saturnusRing = document.createElement("img");
      planetElem.style.backgroundColor = planetsColors[index];
      saturnusRing.src = "/css/img/Ellipse 10.png";
      saturnusRing.setAttribute("id", "ring");
      saturnusRing.className = "saturnus-ring";
      planetElem.setAttribute("id", index);
      planetElem.className = planet.name.toLowerCase();
      planetElem.addEventListener("click", handleClick);
      planetElem.appendChild(saturnusRing);
      planetContainer.appendChild(planetElem);
    }
  });
});

export {
  h4TextMoon,
  h4ElemMoon,
  textContainerThird,
  textLine2,
  wrapInfo,
  h4TextMinTemprature,
  h4ElemMinTemprature,
  h4TextDistance,
  h4ElemDistance,
  textContainerSecond,
  h4TextMaxTemprature,
  h4ElemMaxTemprature,
  h4TextCircumference,
  h4ElemCircumference,
  textContainer,
  textLine,
  textAboutPlanet,
  h3ElemNameOfPlanet,
  h1ElemNameOfPlanet,
  planetInfoContainer,
  footerContainer,
  headerContainer,
  mainContainer,
  returnToHomePageButton,
  h1HeaderContainer,
  h3HeaderContainer,
  sun,
  planetContainer,
  logoFooterContainer,
};
