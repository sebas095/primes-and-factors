# primes-and-factors
Module with simple primality tester and functions to return prime factors of a number in various formats. Find [module on npm](https://www.npmjs.com/package/primes-and-factors) and [code repo with examples on GitHub](https://github.com/sebas095/primes-and-factors).

## API
``` js
const pf = require('primes-and-factors');
pf.isPrime(number);                // return boolean: true if number is prime (e.g. 5), false otherwise (e.g. 18)
pf.getFactors(number);             // get array of prime factors of a number (e.g. [2, 3, 3] for 18)
pf.getUniqueFactors(number);       // get array of distinct prime factors of a number (e.g. [2, 3] for 18)
pf.getPrimeExponentObject(number); // get object of primes and exponents (e.g. {2:1, 3:2} for 18)
pf.getFrequency(number);           // get array of objects, each object for a prime power factor p^k
                                   // with object format {factor: p, times: k}
```

Use `npm i primes-and-factors` to install. For full examples see GitHub `examples` directory. Works up to `Number.MAX_SAFE_INTEGER` which is approximately `9e15`.
