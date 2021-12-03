//Credits to https://github.com/kubowania for the script.
document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'dino',
        img: 'images/dino.png'
      },
      {
        name: 'fallout',
        img: 'images/fallout.png'
      },
      {
        name: 'hello',
        img: 'images/hello.jpeg'
      },
      {
        name: 'hum',
        img: 'images/hum.png'
      },
      {
        name: 'husky',
        img: 'images/husky.png'
      },
      {
        name: 'pokemon',
        img: 'images/pokemon.png'
      },
      {
        name: 'dino',
        img: 'images/dino.png'
      },
      {
        name: 'fallout',
        img: 'images/fallout.png'
      },
      {
        name: 'hello',
        img: 'images/hello.jpeg'
      },
      {
        name: 'hum',
        img: 'images/hum.png'
      },
      {
        name: 'husky',
        img: 'images/husky.png'
      },
      {
        name: 'pokemon',
        img: 'images/pokemon.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/closed.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/closed.png')
        cards[optionTwoId].setAttribute('src', 'images/closed.png')
        
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert("Tu l'as a trouvé!")
        cards[optionOneId].setAttribute('src', 'images/win.jpg')
        cards[optionTwoId].setAttribute('src', 'images/win.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/closed.png')
        cards[optionTwoId].setAttribute('src', 'images/closed.png')
        
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        alert('Tu as gagné!')
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })