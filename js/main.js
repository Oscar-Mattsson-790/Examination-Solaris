"use strict";

/*
TODO LIST: 

1. Skapa upp html element för varje planet
2. Skapa add event listener med "click" på varje planet
3. Skriv ut datan för varje planet vid "click":et
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
  console.log(data);

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
}

getPlanets();
