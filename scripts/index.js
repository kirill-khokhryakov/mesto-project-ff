// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
const cardContainer = document.querySelector('.places__list');

function createCard(element, deleteCard) {

    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image').src = element.link;

    cardImage.text = element.name;
    cardElement.querySelector('.card__title').textContent = element.name;
    cardElement.querySelector('.card__delete-button').addEventListener('click',function() {
        deleteCard(cardElement);
    });

    return cardElement;
    
}

function deleteCard(card) {
  card.remove()
}

initialCards.forEach((card) => {

  const cardElement = createCard(card, deleteCard);
  cardContainer.append(cardElement);
});