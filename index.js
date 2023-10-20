import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

const url = "https://rickandmortyapi.com/api";

export async function fetchCharacters() {
  try {
    const response = await fetch(`${url}/character`); // Correct the API endpoint
    if (response.ok) {
      const data = await response.json();
      data.results.forEach((characterData) => {
        const cardElement = createCharacterCard(characterData);
        cardContainer.appendChild(cardElement); // Append the card to the container
      });
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred", error);
  }
}
fetchCharacters();
