let cards = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]

let suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades']

// Deck using the images
// let deckImages = [/images/2_of_clubs.svg]

let deck = []

let playerHand = []

let dealerHand = []

// Used when popping and pushing values out of the arrays for sum total
let playerPoints = []

let dealerPoints = []

const buildDeck = () => {
  for (let cardsvalue = 0; cardsvalue < cards.length; cardsvalue++) {
    for (let suitvalue = 0; suitvalue < suit.length; suitvalue++) {
      let cardWeight = parseInt(cardsvalue[cards])
      if (cards[cardsvalue] === "king" || cards[cardsvalue] === "queen" || cards[cardsvalue] === "jack"){
        weight = 10
      }
      if (cards[cardsvalue] === "ace") {
        weight = 11
      }
      cardWeight = cards[cardsvalue] + ' of ' + suit[suitvalue]
      deck.push(cardWeight)
    }
  }

  let card = {
    Value: cards[cardsvalue]
    Suit: cards[suitValue]
    Weight: weight
    // Name: name
  }
}

const shuffleDeck = () => {
  for (let i = 51; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }
}

// Add in first deal button to provide the player with 2 cards as in the rules

const firstDeal = () => {
  for (let i = 0; i < 3; i++) {
    let drawnCard = deck.splice(0, 1)
  const _li = document.createElement('li')
  _li.textContent = drawnCard
  document.querySelector('.player').appendChild(_li)
  document.querySelector('.dealer').appendChild(_li)
  }
}

const dealCardPlayer = event => {
  let drawnCard = deck.splice(0, 1)
  playerHand.push(drawnCard)
  const _li = document.createElement('li')
  _li.textContent = playerHand
  document.querySelector('.player').appendChild(_li)
  // document.querySelector('.dealer').appendChild(_li)
  // ** Create Points addition for drawn cards
  let playerPoints = playerPoints.push(drawnCard)
  if (playerPoints === 21 && playerPoints !== 21) {
    console.log("Player winner")
    document.createElement('h1').querySelector('.results').appendChild("Player Won")
  }
  if (playerPoints < 21) {
    console.log ("Bust")
  }
}

// **Might Not Be Needed**
const dealCardDealer = event => {
  let drawnCard2 = deck.splice(0, 1)
  dealerHand.push(drawnCard2)
  const _li = document.createElement('li')
  _li.textContent = dealerHand
  document.querySelector('.dealer').appendChild(_li)
  // ** Create Points addition for drawn cards
  let dealerPoints = dealerPoints.push(drawnCard)
  if (dealerPoints === 21 && playerPoints !== 21) {
    console.log("Dealer winner")
    document.createElement('h1').querySelector('.results').appendChild("Dealer Won")
  }
  if (dealerPoints >= 17) {
    // stop running the dealer drawing
    return
  }
}

const stand = () => {
  document.querySelector('button').disabled
}

const reset = () => {
  buildDeck()
  shuffleDeck()
  playerPoints.length = 0
  dealerPoints.length = 0
  playerHand.length = 0
  dealerHand.length = 0
}

const main = () => {
  buildDeck()
  shuffleDeck()

  console.log(deck)
  const button = document.querySelector('.draw')
  const button2 = document.querySelector('.first-deal')
  const button3 = document.querySelector('.stand')
  const button4 = document.querySelector('.reset')
  button2.addEventListener('click', firstDeal)
  button.addEventListener('click', dealCardPlayer)
  button.addEventListener('click', dealCardDealer)
  button3.addEventListener('click', stand)
  button4.addEventListener('click', reset)
}

document.addEventListener('DOMContentLoaded', main)