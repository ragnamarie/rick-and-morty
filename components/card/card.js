export function createCharacterCard(characterData) {
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML = `
  <div class="card__image-container">
  <img
    class="card__image"
    src="${characterData.image}"
    alt="${characterData.name}"
  />
  <div class="card__image-gradient"></div>
</div>
<div class="card__content">
  <h2 class="card__title">${characterData.name}</h2>
  <dl class="card__info">
    <dt class="card__status-title">Status</dt>
    <dd class="card__status-description">${characterData.status}</dd>
    <dt class="card__type-title">Type</dt>
    <dd class="card__type-description">${characterData.type}</dd>
    <dt class="card__occurences-title">Occurrences</dt>
    <dd class="card__occurences-description">${characterData.episode.length}</dd>
  </dl>
</div>
  `;
  return card;
}
