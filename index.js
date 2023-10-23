import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

export let apiUrl = "https://rickandmortyapi.com/api/character";

export async function fetchCharacters() {
  try {
    const response = await fetch(`${apiUrl}?page=${page}&name=${searchQuery}`);
    if (response.ok) {
      const data = await response.json();
      maxPage = data.info.pages;
      cardContainer.innerHTML = "";
      data.results.forEach((characterData) => {
        const cardElement = createCharacterCard(characterData);
        cardContainer.appendChild(cardElement);
      });

      updatePagination();
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred", error);
  }
}

function updatePagination() {
  pagination.innerHTML = `Page ${page} of ${maxPage}`;
}

fetchCharacters();

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const input = Object.fromEntries(formData);
  page = 1;
  searchQuery = input.query;
  fetchCharacters();
});
