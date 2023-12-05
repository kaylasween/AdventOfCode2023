const fs = require('fs')

let input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
`

function getCardMatches(winningNumbers, cardNumbers) {
  let matches = 0
  for (let j = 0; j < winningNumbers.length; j++) {
    if (cardNumbers.includes(winningNumbers[j])) {
      matches++
    }
  }
  // console.log("matches: ", matches)
  return matches
}

function getNewCards(cards, initialCards = cards) {
  let numberOfCards = cards.length
  cards.forEach((card, index) => {
    const cardNumber = parseInt(card[0].trim().split(/\s+/g)[1])
    const winningNumbers = card[1].trim().split(/\s+/g)
    const cardNumbers = card[2].trim().split(/\s+/g)
    const cardMatches = getCardMatches(winningNumbers, cardNumbers)
    if (cardMatches) {
      const newCards = initialCards.slice(cardNumber, cardNumber + cardMatches)
      // console.log("newCards: ", newCards)
      numberOfCards += getNewCards(newCards, initialCards)
    }
  })
  return numberOfCards
}

// fs.readFile('Day4/day4input.txt', 'utf8', (err, input) => {
//   if (err) {
//     console.error(err)
//     return
//   }
  input = input.trim().split(`\n`)
  input = input.map(line => line.split(/[:|]/))

  console.log(getNewCards(input))
// })