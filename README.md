# primes-and-factors
Module with simple primality tester and functions to return prime factors of a number in various formats.

## Usage
``` js
const primesFactors = require('primes-and-factors');
console.log(primesFactors.isPrime(5))          ; // true
console.log(primesFactors.calculate(18));        // [2, 3, 3]
console.log(primesFactors.getUniqueFactors(18)); // [2, 3]
console.log(primesFactors.getFrequency(12));     // [{ factor: 2, times: 2 }, { factor: 3, times: 1 }]
```

## Commands
- Install: `npm install primes-and-factors`
- Run tests: `npm run test`
- Build process: `npm run build`

## API
``` js
isPrime(number)           // return if a number is prime or not
calculate(number)         // get array of prime factors of a number
getUniqueFactors(number)  // get array of distinct prime factors of a number
getFrequency(number)      // get array of objects of prime factors of a number,
                          // object format is {factor: p, times: k} for p^k
```
