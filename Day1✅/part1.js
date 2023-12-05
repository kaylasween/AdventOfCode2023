const fs = require('fs')

fs.readFile('day1input.txt', 'utf8', (err, input) => {
  if (err) {
    console.error(err)
    return
  }
  input = input.trim().split(`\n`)
  let sum = 0
  for (let i = 0; i < input.length; i++) {
    let value = ""
    input[i] = input[i].split('')
    input[i] = input[i].map((char) => {
      if (/^\d+$/.test(char)) {
        value = value + char
      }
    })
    value = value.charAt(0) + value.slice(-1)
    sum = sum + parseInt(value)
  }
  console.log(`sum: ${sum}`)
})