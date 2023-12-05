const fs = require('fs')

let sampleInput = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`
sampleInput = sampleInput.trim().split(`\n`)
sampleInput = sampleInput.map(line => line.split(""))

let sum = 0




// fs.readFile('Day3/day3input.txt', 'utf8', (err, input) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   input = input.trim().split(`\n`)
// })