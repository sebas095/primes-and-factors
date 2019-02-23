/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */

import test from 'tape';
import primeFactor from '../lib/index';

const runTest = (t, startAtNumber, totalLoops, maxTimeNS, testLabel, functionToCall) => {
  let exampleOutput = null;
  const startTimeMS = Date.now();
  for (let i = startAtNumber; i < startAtNumber + totalLoops; i++) exampleOutput = functionToCall(i);
  const endTimeMS = Date.now();
  const timeInNS = Math.round((endTimeMS - startTimeMS) * 1000000 / totalLoops);
  console.log(`Average time was ${timeInNS}ns, tested on ${totalLoops} instances from ${startAtNumber} to ${startAtNumber + totalLoops - 1}, total time ${endTimeMS - startTimeMS}ms.`);
  t.ok(timeInNS < maxTimeNS, testLabel);
};

const primeFactorPerformanceSpec = () => {
  test('primeFactor performance test results', (t) => {
    runTest(t, 1, 1000000, 120, 'average < 120ns (nanoseconds) for primeFactor.isPrime(i%100), testing numbers less than 100', i => primeFactor.isPrime(i % 100));

    runTest(t, 100000001, 50000, 5500, 'average < 5500ns for primeFactor.isPrime(i), testing numbers around 1e8', i => primeFactor.isPrime(i));

    runTest(t, 100000000000001, 50, 4500000, 'average < 4,500,000ns for primeFactor.isPrime(i), testing numbers around 1e14', i => primeFactor.isPrime(i));

    runTest(t, 100000001, 10000, 17000, 'average < 17,000ns for primeFactor.getFactors(i), testing numbers around 1e8', i => primeFactor.getFactors(i));

    runTest(t, 100000001, 8000, 17000, 'average < 17,000ns for primeFactor.getUniqueFactors(i), testing numbers around 1e8', i => primeFactor.getUniqueFactors(i));

    runTest(t, 100000001, 6000, 27000, 'average < 27,000ns for primeFactor.getPrimeExponentObject(i), testing numbers around 1e8', i => primeFactor.getPrimeExponentObject(i));

    runTest(t, 100000001, 5000, 29000, 'average < 29,000ns for primeFactor.getFrequency(i), testing numbers around 1e8', i => primeFactor.getFrequency(i));

    t.end();
  });
};

export default primeFactorPerformanceSpec;
