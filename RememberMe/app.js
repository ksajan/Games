document.addEventListener('DOMContentLoaded', () => {

  //Card Options
  const cardArray = [
    {
      name: 'bacon',
      img: 'images/bacon.png'
    },
    {
      name: 'burger',
      img: 'images/burger.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'roast-chicken',
      img: 'images/roast-chicken.png'
    },
    {
      name: 'shrimp',
      img: 'images/shrimp.png'
    },
    {
      name: 'french-fries',
      img: 'images/french-fries.png'
    },
    {
      name: 'pineapple',
      img: 'images/pineapple.png'
    },
    {
      name: 'fish',
      img: 'images/fish.png'
    },
    {
      name: 'spaghetti',
      img: 'images/spaghetti.png'
    },
    {
      name: 'bacon',
      img: 'images/bacon.png'
    },
    {
      name: 'burger',
      img: 'images/burger.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'roast-chicken',
      img: 'images/roast-chicken.png'
    },
    {
      name: 'shrimp',
      img: 'images/shrimp.png'
    },
    {
      name: 'french-fries',
      img: 'images/french-fries.png'
    },
    {
      name: 'pineapple',
      img: 'images/pineapple.png'
    },
    {
      name: 'fish',
      img: 'images/fish.png'
    },
    {
      name: 'spaghetti',
      img: 'images/spaghetti.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  const cardsChosen = []
  const cardsChosenId = []
  const cardsWon = []


  // Creating board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/back.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard);
      grid.appendChild(card)
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosenId[0] === cardsChosenId[1]) {
      alert('You Found a Match. Good Job!')
      cards[optionOneId].setAttribute('src', 'images/thumbs.png')
      cards[optionTwoId].setAttribute('src', 'images/thumbs.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/back.png')
      cards[optionTwoId].setAttribute('src', 'images/back.png')
      alert("Sorry! Try again!")
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You have Found all ot them. Awesome!"
    }
  }

  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosen.pop(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()



})
