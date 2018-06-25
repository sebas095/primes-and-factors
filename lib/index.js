const primeFactor = {
  calculate: function(num, result = [], repeat = true) {
    if (!Number.isInteger(num)) return result;
    num = Math.abs(Math.round(num));
    if (num < 2) return result;
    const sqrt = Math.sqrt(num);
    let x = 2;
    if (num % x) {
      x = 3;
      if (num % x) {
        x = 5;
        let add = 2;
        while ((num % x) && (x < sqrt)) {
          x += add;            // 5, 7, 11, 13, 17, 19, 23...
          add = 6 - add;       // 2, 4,  2,  4,  2,  4,  2...
        }
      }
    }

    x = (x <= sqrt) ? x : num;

    if (!repeat) {
      const index = result.indexOf(x);
      if (index < 0) result.push(x);
    } else result.push(x);

    return (x === num) ? result : this.calculate(num / x, result, repeat);
  },

  getFrequency: function(num) {
    const factors = this.calculate(num);
    const count = {};
    const result = [];

    for (let factor of factors) {
      if (count.hasOwnProperty(factor)) {
        count[factor] += 1;
      } else count[factor] = 1;
    }

    for (const key in count) {
      if ({}.hasOwnProperty.call(count, key)) {
        const obj = {
          factor: Number(key),
          times: count[key],
        };
        result.push(obj);
      }
    }

    return result;
  },

  getUniqueFactors: function(num) {
    return this.calculate(num, [], false)
  },

  isPrime: function(num) {
    if (!Number.isInteger(num)) return false;
    if (num === 2 || num === 3) return true;
    if (num < 5 || num % 2 === 0 || num % 3 === 0) return false;

    const sqrt = Math.sqrt(num);
    for (let i = 5; i <= sqrt; i = i + 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  },
};

module.exports = primeFactor;
