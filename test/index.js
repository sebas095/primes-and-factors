import test from 'tape';
import primeFactor from '../lib/index';

test('test results', (t) => {

  const calculateTestArray = [

  // Integer input > 1.5
    [120, false, [2, 2, 2, 3, 5], [2, 3, 5]]
  , [2, true, [2], [2]]
  , [3, true, [3], [3]]
  , [4, false, [2, 2], [2]]
  , [6, false, [2, 3], [2, 3]]
  , [11, true, [11], [11]]
  , [13, true, [13], [13]]
  , [18, false, [2, 3, 3], [2, 3]]
  , [25, false, [5, 5], [5]]
  , [35, false, [5, 7], [5, 7]]
  , [49, false, [7, 7], [7]]
  , [59, true, [59], [59]]
  , [61, true, [61], [61]]
  , [64, false, [2, 2, 2, 2, 2, 2], [2]]
  , [187, false, [11, 17], [11, 17]]
  , [3211, false, [13, 13, 19], [13, 19]]
  , [4620, false, [2, 2, 3, 5, 7, 11], [2, 3, 5, 7, 11]]
  , [65537, true, [65537], [65537]]
  , [1531250, false, [2, 5, 5, 5, 5, 5, 5, 7, 7], [2, 5, 7]]
  , [18124324557, false, [3, 6041441519], [3, 6041441519]]
  , [1000000000039, true, [1000000000039], [1000000000039], 'Prime approx 10^12']
  , [1000012533227, false, [600011, 1666657], [600011, 1666657], 'Unevenly balanced semiprime approx 10^12']
  , [1000076001443, false, [1000037, 1000039], [1000037, 1000039], 'Evenly balanced semiprime approx 10^12']

  // Other numeric inputs
  , [0, false, [], [], '0 has no prime factors']
  , [1, false, [], [], '1 has no prime factors']
  , [3.499999, false, [3], [3], '3.499999 gets rounded to 3']
  , [3.500000, false, [2, 2], [2], '3.500000 gets rounded to 4']
  , [-11, false, [11], [11], 'Ignore negative signs']
  , [-4620, false, [2, 2, 3, 5, 7, 11], [2, 3, 5, 7, 11], 'Ignore negative signs']

  // Invalid numeric input
  , [NaN, false, [], [], 'Invalid numbers should not have prime factors']
  , [Infinity, false, [], []]
  , [-Infinity, false, [], []]

  // Non-numeric input
  , [undefined, false, [], [], 'Anything non-numeric should not have prime factors']
  , [null, false, [], []]
  , [false, false, [], []]
  , [true, false, [], []]
  , ['', false, [], []]
  , ['aString', false, [], []]
  , [[], false, [], []]
  , [[2], false, [], []]
  , [{}, false, [], []]
  , [{2:1}, false, [], []]

  ]

  const runTests = (oneTest) => {
    const testInput = oneTest[0]
    const outputIP = oneTest[1]
    const outputF = oneTest[2]
    const outputUF = oneTest[3]
    const comment = oneTest[4]
    const commentText = (comment) ? ' (' + comment + ')' : ''

    let outputText = 'calculate(' + testInput + ') = [' + outputF + ']' + commentText
    t.same(primeFactor.calculate(testInput), outputF, outputText)

    outputText = 'getUniqueFactors(' + testInput + ') = [' + outputUF + ']'
    t.same(primeFactor.getUniqueFactors(testInput), outputUF, outputText)

    outputText = 'isPrime(' + testInput + ') = ' + outputIP
    t.same(primeFactor.isPrime(testInput), outputIP, outputText)

    console.log(' ')
  }

  for (let oneTest of calculateTestArray) runTests(oneTest)

  t.same(primeFactor.getFrequency(12),
    [{ factor: 2, times: 2 }, { factor: 3, times: 1 }],
    'it should be [{ factor: 2, times: 2 }, { factor: 3, times: 1 }]');
  t.end();
});
