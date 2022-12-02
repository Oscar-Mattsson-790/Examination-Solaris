"use strict";

// Fetch Data - Här hämtar API och nyckel

const BASE_URL =
  "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/solaris-api";

async function getKey() {
  const response = await fetch(`${BASE_URL}/keys`); // Ta bort { method: POST } här
  const data = await response.json();
  console.log(data);

  return data.key;
}

// const BASE_URL = "https://fathomless-shelf-54969.herokuapp.com";

// async function getKey() {
//   const response = await fetch(`${BASE_URL}/keys`, { method: "POST" });
//   const data = await response.json();

//   return data.key;
// }

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

export { getPlanets };
