export function createCharacterCard(characterData) {
  const card = document.createElement("list"); // Create a new article Element
  card.classList.add("card");

  const picture = document.createElement("img");
  picture.src = characterData.image;

  const title = document.createElement("h2");
  title.textContent = characterData.name;

  const infoCard = document.createElement("dl");
  infoCard.classList.add("card__info");

  const statusInfo = document.createElement("dd");
  statusInfo.textContent = characterData.status;

  const typeInfo = document.createElement("dd");
  typeInfo.textContent = characterData.type;

  // const occurences = document.createElement("dl");
  // occurences.classList.add("card__occurences-title");
  // occurences.textContent = characterData.occ;

  card.append(picture);
  card.append(title);
  card.append(infoCard);
  card.append(statusInfo);
  card.append(typeInfo);
  // card.append(occurences);

  return card;
}
