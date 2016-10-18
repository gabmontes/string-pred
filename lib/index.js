if (!String.prototype.includes) {
  require('core-js/fn/string/includes')
}

const letters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'

function pred() {
  let result = ''
  let carry = false

  let i = this.length
  while (i--) {
    const char = this.charAt(i)

    const letterPos = letters.indexOf(char.toLowerCase())
    if (letterPos > 0) {
      const pred = letters[letterPos - 1]
      const isUpper = char === char.toUpperCase()
      result = (isUpper ? pred.toUpperCase() : pred).concat(result)
      carry = false
      break
    }
    if (letterPos === 0) {
      const pred = letters[letters.length - 1]
      const isUpper = char === char.toUpperCase()
      result = (isUpper ? pred.toUpperCase() : pred).concat(result)
      carry = true
      continue
    }

    const numberPos = numbers.indexOf(char)
    if (numberPos > 0) {
      result = numbers[numberPos - 1].concat(result)
      carry = false
      break
    }
    if (numberPos === 0) {
      result = numbers[numbers.length - 1].concat(result)
      carry = true
      continue
    }

    result = char.concat(result)
  }

  result = i === -1 ? result : this.substring(0, i).concat(result)

  const startsWithLetter = letters.includes(result.charAt(0).toLowerCase())
  if (carry && startsWithLetter) {
    return result.substring(1)
  }

  return result
}

String.prototype.pred = String.prototype.pred || pred
