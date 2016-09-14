# String.pred()

Get the predecessor of a given string. It is calculated decrementing each character in the string starting from the rightmost position. Decrementing a digit will result in another digit and decrementing a letter will result in another letter of the same case. Other characters or symbols are not modified.

## Install

```
npm install string-pred
```

## Usage

Just require the module and strings will have a new `pred()` method!

```js
require('string-pred')

console.log('abce'.pred())      // 'abcd'    
console.log('THX1139'.pred())   // 'THX1138'
console.log('<<koalb>>'.pred()) // '<<koala>>'
console.log('2000aaa'.pred())   // '1999zzz'
console.log('AAAA0000'.pred())  // 'ZZZ9999'
```

## See also

There is an implementation of next/succ Ruby's function in JavaScript, of which this module could be considered the complementary function:

https://gist.github.com/devongovett/1081265

## License

WTFPL
