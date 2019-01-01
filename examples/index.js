// const paf = require('primes-and-factors'); // From npm
const paf = require('../lib/index.js'); // Local copy

console.log(`Is 5 prime? ${paf.isPrime(5)}`);
// true
console.log(`Is 35 prime? ${paf.isPrime(35)}`);
// false

console.log(`Prime factors of 18: ${JSON.stringify(paf.calculate(18))}`);
// [2, 3, 3]
console.log(`Prime factors of 840: ${JSON.stringify(paf.calculate(840))}`);
// [2, 2, 2, 3, 5, 7]

console.log(`Distinct prime factors of 18: ${JSON.stringify(paf.getUniqueFactors(18))}`);
// [2, 3]
console.log(`Distinct prime factors of 840: ${JSON.stringify(paf.getUniqueFactors(840))}`);
// [2, 3, 5, 7]

console.log(`Prime factors of 12 in object format: ${JSON.stringify(paf.getFrequency(12))}`);
// [{"factor":2,"times":2},{"factor":3,"times":1}]
console.log(`Prime factors of 56056 in object format: ${JSON.stringify(paf.getFrequency(56056))}`);
// [{"factor":2,"times":3},{"factor":7,"times":2},{"factor":11,"times":1},{"factor":13,"times":1}]
