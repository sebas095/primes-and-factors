/* eslint-disable no-console */

// import pf from 'primes-and-factors' // From npm
import pf from '../lib/index'; // From local copy

const displayFunctionOutputs = (arr) => {
  console.log('');
  console.log('-------------------------------------------------------------------');
  console.log('    Format of examples on variable n:');
  console.log('1.  Is n prime?                           isPrime(n)');
  console.log('2.  Prime factors of n?                   getFactors(n)');
  console.log('3.  Distinct prime factors of n?          getUniqueFactors(n)');
  console.log('4.  Prime exponent object for n?          getPrimeExponentObject(n)');
  console.log('5.  Prime factors of n in object format?  getFrequency(n)');
  console.log('-------------------------------------------------------------------');
  for (const a of arr) {
    console.log('');
    console.log(`    n = ${a}`);
    console.log(`1.  ${pf.isPrime(a)}`);
    console.log(`2.  ${JSON.stringify(pf.getFactors(a))}`);
    console.log(`3.  ${JSON.stringify(pf.getUniqueFactors(a))}`);
    console.log(`4.  ${JSON.stringify(pf.getPrimeExponentObject(a))}`);
    console.log(`5.  ${JSON.stringify(pf.getFrequency(a))}`);
  }
  console.log('');
};

displayFunctionOutputs([0, 1, 2, 3, 4, 5, 6, 11, 18, 840, 27720,
  65537, 1000000, 1000003, 1000036, 10000000000023,
]);
