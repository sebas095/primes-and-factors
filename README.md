# primes-and-factors
Module with simple primality tester and functions to return prime factors of a number in various formats.

## API
``` js
const pf = require('primes-and-factors');
pf.isPrime(number);           // return boolean: true if number is prime (e.g. 5), false otherwise (e.g. 18)
pf.getFactors(number);        // get array of prime factors of a number (e.g. [2, 3, 3] for 18)
pf.getUniqueFactors(number);  // get array of distinct prime factors of a number (e.g. [2, 3] for 18)
pf.getPrimeExponentObject(number);    // get array of distinct prime factors of a number (e.g. {2:1, 3:2} for 18)
pf.getFrequency(number);      // get array of objects for prime factors of a number,
                              // object format is {factor: p, times: k} for p^k
```

For full examples see GitHub `examples` directory.
