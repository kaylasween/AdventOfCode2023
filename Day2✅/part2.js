const fs = require('fs')
//only 12 red cubes, 13 green cubes, and 14 blue cubes
fs.readFile('Day2/day2input.txt', 'utf8', (err, input) => {
  if (err) {
    console.error(err)
    return
  }
  input = input.trim().split(`\n`)
  let sum = 0
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(`: `)
    const game = {
      id: input[i][0].split(" ")[1],
      game: input[i][1].split(/[;]+/).map(block => block.trim().split(','))
    }
    let lowestNumber = {
      red: 0,
      green: 0,
      blue: 0
    }
    for (let j = 0; j < game.game.length; j++) {
      console.log(game.game[j])
      const round = game.game[j].map(block => {
        block = block.trim().split(' ')
        const color = block[1]
        const size = parseInt(block[0])

        if (color === "red" && size > lowestNumber.red) {
          lowestNumber.red = size
        }

        if (color === "green" && size > lowestNumber.green) {
          lowestNumber.green = size
        }

        if (color === "blue" && size > lowestNumber.blue) {
          lowestNumber.blue = size
        }
        return lowestNumber
      })
      console.log(round)
    }
    const lowestNumberProduct = lowestNumber.red * lowestNumber.green * lowestNumber.blue
    console.log(lowestNumberProduct)
    sum += lowestNumberProduct
  }
  console.log(sum)
})