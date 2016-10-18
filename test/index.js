const { expect } = require('chai')

require('../lib')

const testStrings = [
  // Ruby's string next/succ examples
  { pred: 'abcd',      succ: 'abce' },
  { pred: 'THX1138',   succ: 'THX1139' },
  { pred: '<<koala>>', succ: '<<koalb>>' },
  { pred: '1999zzz',   succ: '2000aaa' },
  { pred: 'ZZZ9999',   succ: 'AAAA0000' },
  // Numbers only
  { pred: '0',         succ: '1' },
  { pred: '9',         succ: '0' }, // rolls within same-digits count
  { pred: '00',        succ: '01' },
  { pred: '09',        succ: '10' },
  { pred: '10',        succ: '11' },
  { pred: '19',        succ: '20' },
  { pred: '99',        succ: '00' }, // rolls within same-digits count
  { pred: '000',       succ: '001' },
  { pred: '009',       succ: '010' },
  { pred: '099',       succ: '100' },
  { pred: '199',       succ: '200' },
  { pred: '999',       succ: '000' }, // rolls within same-digits count
  // Lowercase only
  { pred: '',          succ: 'a' },
  { pred: 'a',         succ: 'b' },
  { pred: 'z',         succ: 'aa' },
  { pred: 'aa',        succ: 'ab' },
  { pred: 'az',        succ: 'ba' },
  { pred: 'ba',        succ: 'bb' },
  { pred: 'zz',        succ: 'aaa' },
  { pred: 'aaa',       succ: 'aab' },
  { pred: 'aaz',       succ: 'aba' },
  { pred: 'ZZ',        succ: 'AAA' },
  // Uppercase only
  { pred: 'A',         succ: 'B' },
  { pred: 'Z',         succ: 'AA' },
  // Mix lower and uppercase
  { pred: 'aZ',        succ: 'bA' },
  { pred: 'Az',        succ: 'Ba' },
  // Mix numbers and letters
  { pred: '0a',        succ: '0b' },
  { pred: '0z',        succ: '1a' },
  { pred: 'a0',        succ: 'a1' },
  { pred: 'a9',        succ: 'b0' },
  { pred: 'A9',        succ: 'B0' },
  // Mix symbols
  { pred: '0-z',       succ: '1-a' },
  { pred: '09-z',      succ: '10-a' },
  { pred: '-zz',       succ: '-aa' },
  // Semver-like strings
  { pred: '0.0.9',     succ: '0.1.0' },
  { pred: '1.0.0',     succ: '1.0.1' },
]

describe('String.pred()', function () {
  testStrings.forEach(function (pair) {
    it(`should return the predecessor of ${pair.succ}`, function () {
      expect(pair.succ.pred(pair.options)).to.equal(pair.pred)
    })
  })
})
