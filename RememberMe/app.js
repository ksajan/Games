document.addEventListener('DOMContentLoaded', () => {

      //Card Options
      const cardArray = [{
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
          name: 'banana',
          img: 'images/banana.png'
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
          name: 'banana',
          img: 'images/banana.png'
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

      const grid = document.querySelector('.grid')


      // Creating board
      function createBoard() {
        for (let i = 0; i < cards.length; i++) {
          var card = document.createElement('img')
          card.setAttribute('src', 'images/back.png)
          card.setAttribute('data-id', i)
          //card.addEventListener('click', flipcard); 
          grid.appendChild(card)
          }
        }

      )
