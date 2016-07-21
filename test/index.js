import test from 'tape';
import primeFactor from '../lib/index';

test('test results', (t) => {
  t.same(primeFactor.calculate(18), [2, 3, 3], 'it should be [2, 3, 3]');
  t.same(primeFactor.calculate(18124324557), [3, 6041441519], 'it should be [3, 6041441519]');
  t.same(primeFactor.isPrime(5), true, 'it should be true');
  t.same(primeFactor.isPrime(10), false, 'it should be false');
  t.same(primeFactor.getUniqueFactors(18), [2, 3], 'it should be [2, 3]');
  t.same(primeFactor.getFrequency(12),
    [{ factor: 2, times: 2 }, { factor: 3, times: 1 }],
    'it should be [{ factor: 2, times: 2 }, { factor: 3, times: 1 }]');
  t.end();
});
