# primes-and-factors
module to obtain the prime factors of a number

## Usage
``` js
var primesFactors = require('primes-and-factors');
primesFactors.calculate(18); // [2, 3, 3]
primesFactors.getUniqueFactors(18); // [2, 3]
primesFactors.isPrime(5); // true
primesFactors.getFrequency(12); // [{ factor: 2, times: 2 }, { factor: 3, times: 1 }],
```
## Install
    npm install primes-and-factors

## Test
    npm run test

## API
    calculate(number)         // get all prime factors of a number
    getUniqueFactors(number)  // get all prime factors of a number but without repeating

    getFrequency(number)      // get all prime factors of a number separate for frequency
    isPrime(number)           // return if a number is prime or not
