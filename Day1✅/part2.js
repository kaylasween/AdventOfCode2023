const fs = require('fs')
const {wordsToNumbers} = require('words-to-numbers')

const wordRegex = /([0-9]|zero|one|two|three|four|five|six|seven|eight|nine)/gi
const revWordRegex = /([0-9]|orez|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/gi

fs.readFile('Day1/day1input.txt', 'utf8', (err, input) => {
  if (err) {
    console.error(err)
    return
  }
  input = input.trim().split(`\n`)
  let sum = 0
  for (let i = 0; i < input.length; i++) {
    const line = input[i]
    const reverseLine = line.split('').toReversed().join('')
    let [firstNum] = line.match(wordRegex)
    let [secondNum] = reverseLine.match(revWordRegex)
    secondNum = secondNum.split('').toReversed().join('')
    const value = Number(`${wordsToNumbers(firstNum)}${wordsToNumbers(secondNum)}`)
    sum = sum + value
  }
  console.log(`sum: ${sum}`)
})