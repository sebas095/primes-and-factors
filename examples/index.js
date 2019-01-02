// const pf = require('primes-and-factors'); // From npm
const pf = require('../lib/index.js'); // Local copy

console.log(`Is 5 prime? ${pf.isPrime(5)}`);
// true
console.log(`Is 77 prime? ${pf.isPrime(77)}`);
// false

console.log(`Prime factors of 18: ${JSON.stringify(pf.getFactors(18))}`);
// [2, 3, 3]
console.log(`Prime factors of 840: ${JSON.stringify(pf.getFactors(840))}`);
// [2, 2, 2, 3, 5, 7]

console.log(`Distinct prime factors of 18: ${JSON.stringify(pf.getUniqueFactors(18))}`);
// [2, 3]
console.log(`Distinct prime factors of 840: ${JSON.stringify(pf.getUniqueFactors(840))}`);
// [2, 3, 5, 7]

console.log(`Prime exponent object for 18: ${JSON.stringify(pf.getPrimeExponentObject(18))}`);
// {2:1, 3:2}
console.log(`Prime exponent object for 840: ${JSON.stringify(pf.getPrimeExponentObject(840))}`);
// {2:3, 3:1, 5:1, 7:1}

console.log(`Prime factors of 12 in object format: ${JSON.stringify(pf.getFrequency(12))}`);
// [{"factor":2,"times":2},{"factor":3,"times":1}]
console.log(`Prime factors of 56056 in object format: ${JSON.stringify(pf.getFrequency(56056))}`);
// [{"factor":2,"times":3},{"factor":7,"times":2},{"factor":11,"times":1},{"factor":13,"times":1}]
