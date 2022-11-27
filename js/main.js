"use strict";

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

planetInfoContainer.appendChild(h1ElemNameOfPlanet);
planetInfoContainer.appendChild(h3ElemNameOfPlanet);
planetInfoContainer.appendChild(textAboutPlanet);
planetInfoContainer.appendChild(textLine);
planetInfoContainer.appendChild(textContainer);
planetInfoContainer.appendChild(textContainerSecond);
planetInfoContainer.appendChild(wrapInfo);
planetInfoContainer.appendChild(textContainerThird);

textContainer.appendChild(h4ElemCircumference);
textContainer.appendChild(h4TextCircumference);
textContainer.appendChild(h4ElemMaxTemprature);
textContainer.appendChild(h4TextMaxTemprature);

textContainerSecond.appendChild(h4ElemDistance);
textContainerSecond.appendChild(h4TextDistance);
textContainerSecond.appendChild(h4ElemMinTemprature);
textContainerSecond.appendChild(h4TextMinTemprature);

textContainerThird.appendChild(textLine2);
textContainerThird.appendChild(h4ElemMoon);
textContainerThird.appendChild(h4TextMoon);

wrapInfo.appendChild(textContainer);
wrapInfo.appendChild(textContainerSecond);

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

// Selected Elements

// Create containers and set class

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
  console.log(data);
  return data;
}

// HandleClick function - Event
function handleClick(event) {
  console.log("click på staturnus ring", event.target);
  console.log("click event", event.target.style.backgroundColor);
  sun.style.backgroundColor = event.target.style.backgroundColor;
  headerContainer.style.display = "none";
  planetContainer.style.display = "none";
  planetInfoContainer.style.display = "block";
  mainContainer.style.backgroundImage =
    "url('https://www.psdgraphics.com/file/night-sky-stars.jpg')";
  mainContainer.style.backgroundRepeat = "no-repeat";
  mainContainer.style.backgroundSize = "cover";
  getPlanets().then((data) => {
    data.bodies.forEach((planet) => {
      let planetId = event.target.id;
      if (planet.id == planetId) {
        h4ElemMoon.textContent = "månar";
        h4TextMoon.textContent = `${data.bodies[Number(planetId)].moons}`;

        h4ElemMinTemprature.textContent = "min temperatur";
        h4TextMinTemprature.textContent = `${
          data.bodies[Number(planetId)].temp.night
        } C`;

        h4ElemDistance.textContent = "km från solen";
        h4TextDistance.textContent = `${
          data.bodies[Number(planetId)].distance
        }`;

        h4ElemMaxTemprature.textContent = "max temperatur";
        h4TextMaxTemprature.textContent = `${
          data.bodies[Number(planetId)].temp.day
        } C`;

        textAboutPlanet.textContent = `${data.bodies[Number(planetId)].desc}`;
        h1ElemNameOfPlanet.textContent = `${
          data.bodies[Number(planetId)].name
        }`;

        h3ElemNameOfPlanet.textContent = `${
          data.bodies[Number(planetId)].latinName
        }`;

        h4ElemCircumference.textContent = "omkrets";
        h4TextCircumference.textContent = `${
          data.bodies[Number(planetId)].circumference
        } km`;

        wrapInfo.className = "wrap-info";
        textContainerThird.className = "text-container-third";
        textContainerSecond.className = "text-container-second";
        textContainer.className = "text-container";
        textLine.className = "text-line";
        textLine2.className = "text-line2";
        textAboutPlanet.className = "text-about-planet";
      }
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
    console.log(planet.name);
  });
});

// Footer Content ------------------------------

const logoFooterContainer = document.createElement("img");
logoFooterContainer.className = "img-footer-container";
logoFooterContainer.src = "/css/img/vector.png";
footerContainer.appendChild(logoFooterContainer);
