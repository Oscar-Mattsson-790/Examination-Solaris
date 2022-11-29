"use strict";

// Fetch Data - Här hämtat API och Nyckel

const BASE_URL = "https://fathomless-shelf-54969.herokuapp.com";

async function getKey() {
  const response = await fetch(`${BASE_URL}/keys`, { method: "POST" });
  const data = await response.json();

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

export { getPlanets };