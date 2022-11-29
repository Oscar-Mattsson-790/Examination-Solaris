"use strict";

// Här displayas information om planeterna

import { getPlanets } from "./api.js";

import {
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
} from "../main.js";

function appendChilds() {
  headerContainer.appendChild(h1HeaderContainer);
  headerContainer.appendChild(h3HeaderContainer);
  mainContainer.appendChild(sun);
  mainContainer.appendChild(planetContainer);
  footerContainer.appendChild(logoFooterContainer);

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
}

function fillElementWithdata(planetId) {
  getPlanets().then((data) => {
    data.bodies.forEach((planet) => {
      if (planet.id == planetId) {
        h4ElemMoon.textContent = "månar";
        h4TextMoon.textContent = `${data.bodies[Number(planetId)].moons}`;

        h4ElemMinTemprature.textContent = "min temperatur";
        h4TextMinTemprature.textContent = `${
          data.bodies[Number(planetId)].temp.night
        } °C`;

        h4ElemDistance.textContent = "km från solen";
        h4TextDistance.textContent = `${
          data.bodies[Number(planetId)].distance
        } km`;

        h4ElemMaxTemprature.textContent = "max temperatur";
        h4TextMaxTemprature.textContent = `${
          data.bodies[Number(planetId)].temp.day
        } °C`;

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

        // Display Elements
        planetInfoContainer.style.display = "block";
        // Return button
        returnToHomePageButton.style.display = "block";
      }
    });
  });
}

export { fillElementWithdata, appendChilds };
