export function createCharacterCard(characterData) {
  const card = document.createElement("article"); // Create a new article Element
  card.classList.add("card");
  card.innerHTML =
    `
    <li class="card">
          <div class="card__image-container">
            <img
              class="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="Rick Sanchez"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title"></h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">` +
    status +
    `</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">` +
    type +
    `</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">` +
    51 +
    `</dd>
            </dl>
          </div>
        </li>`;

  // Fill the article element with content.

  const picture = document.createElement("img");
  picture.src = characterData.name;

  const heading = document.createElement("h2");
  heading.textContent = characterData.name;

  card.append(heading);

  const eyeColor = document.createElement("p");
  eyeColor.textContent = `Eye color: ${characterData.eye_color}`;

  card.append(eyeColor);

  const birthYear = document.createElement("p");
  birthYear.textContent = `Birth Year: ${characterData.birth_year}`;

  card.append(birthYear);

  return card;
}
