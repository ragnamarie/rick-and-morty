nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    pagination.textContent = `${page} / ${maxPage} `;
    cardContainer.innerHTML = "";
    url = `${apiUrl}?page=${page}`;
    fetchCharacters();
  }
});

previousButton.addEventListener("click", () => {
  if (page < 1) {
    page--;
    pagination.textContent = `${page} / ${maxPage} `;
    cardContainer.innerHTML = "";
    url = `${apiUrl}?page=${page}`;
    fetchCharacters();
  }
});
