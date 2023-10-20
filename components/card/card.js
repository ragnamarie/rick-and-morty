export function createCharacterCard(characterData) {
  const card = document.createElement("list"); // Create a new article Element
  card.classList.add("card");

  // Fill the article element with content.

  const picture = document.createElement("img");
  picture.src = characterData.image;

  const title = document.createElement("h2");
  title.textContent = characterData.name;

  const status = document.createElement("dl");
  status.classList.add("card__status-title");
  status.textContent = characterData.title;

  const type = document.createElement("dl");
  type.classList.add("card__type-title");
  type.textContent = characterData.type;

  const occurences = document.createElement("dl");
  occurences.classList.add("card__occurences-title");
  occurences.textContent = characterData.occ;

  card.append(picture);
  card.append(title);
  card.append(status);
  card.append(type);
  card.append(occurences);

  return card;
}
