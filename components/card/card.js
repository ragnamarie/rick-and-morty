export function createCharacterCard(characterData) {
  const card = document.createElement("li"); // Create a new article Element
  card.classList.add("card");

  const picture = document.createElement("img");
  picture.src = characterData.image;

  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");

  const title = document.createElement("h2");
  title.classList.add("card__title");
  title.textContent = characterData.name;

  const infoCard = document.createElement("dl");
  infoCard.classList.add("card__info");

  const statusTitle = document.createElement("dt");
  statusTitle.classList.add("card__status-title");
  statusTitle.textContent = "Status";

  const statusInfo = document.createElement("dd");
  statusInfo.classList.add("card__status-description");
  statusInfo.textContent = characterData.status;

  const typeTitle = document.createElement("dt");
  typeTitle.classList.add("card__type-title");
  typeTitle.textContent = "Title";

  const typeInfo = document.createElement("dd");
  typeInfo.classList.add("card__type-description");
  typeInfo.textContent = characterData.type;

  // const occurences = document.createElement("dl");
  // occurences.classList.add("card__occurences-title");
  // occurences.textContent = characterData.occ;

  card.append(picture);
  card.append(cardContent);
  card.append(title);
  card.append(infoCard);
  card.append(statusTitle);
  card.append(statusInfo);
  card.append(typeTitle);
  card.append(typeInfo);
  // card.append(occurences);

  return card;
}
