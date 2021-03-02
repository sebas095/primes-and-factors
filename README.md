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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/sebas095"><img src="https://avatars0.githubusercontent.com/u/8863503?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sebastian Duque Restrepo</b></sub></a><br /><a href="https://github.com/sebas095/primes-and-factors/commits?author=sebas095" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sebas095"><img src="https://avatars.githubusercontent.com/u/11883046?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Ryan</b></sub></a><br /><a href="https://github.com/sebas095/primes-and-factors/commits?author=davidryan59" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
