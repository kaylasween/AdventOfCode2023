const fs = require('fs')
//only 12 red cubes, 13 green cubes, and 14 blue cubes
fs.readFile('day2input.txt', 'utf8', (err, input) => {
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
    let possible = true
    for (let j = 0; j < game.game.length; j++) {
      const round = game.game[j].map(block => {
        block = block.trim().split(' ')
        const color = block[1]
        const size = parseInt(block[0])
        if (color === "red" && size > 12) {
          possible = false
        }

        if (color === "green" && size > 13) {
          possible = false
        }

        if (color === "blue" && size > 14) {
          possible = false
        }
        return possible
      })
    }
    if (possible) {
      sum = sum + Number(game.id)
    }
  }
  console.log(sum)
})