# primes-and-factors
Module with simple primality tester and functions to return prime factors of a number in various formats.

## API
``` js
paf.isPrime(number)           // return if a number is prime or not
paf.calculate(number)         // get array of prime factors of a number
paf.getUniqueFactors(number)  // get array of distinct prime factors of a number
paf.getFrequency(number)      // get array of objects of prime factors of a number,
                              // object format is {factor: p, times: k} for p^k
```

Also see `examples` directory.
