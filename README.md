# primes-and-factors
Module with simple primality tester and functions to return prime factors of a number in various formats.

## Usage
``` js
const paf = require('primes-and-factors');
console.log(paf.isPrime(5))          ; // true
console.log(paf.calculate(18));        // [2, 3, 3]
console.log(paf.getUniqueFactors(18)); // [2, 3]
console.log(paf.getFrequency(12));     // [{ factor: 2, times: 2 }, { factor: 3, times: 1 }]
```

## Commands
- Install: `npm install primes-and-factors`
- Run tests: `npm run test`
- Build process: `npm run build`

## API
``` js
paf.isPrime(number)           // return if a number is prime or not
paf.calculate(number)         // get array of prime factors of a number
paf.getUniqueFactors(number)  // get array of distinct prime factors of a number
paf.getFrequency(number)      // get array of objects of prime factors of a number,
                              // object format is {factor: p, times: k} for p^k
```
