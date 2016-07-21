const primeFactor = {
  calculate: function(num, result = [], repeat = true) {
    const root = Math.sqrt(num);
    let x = 2;

    if (num % x) {
      x = 3;
      while ((num % x) && (x < root)) {
        x += 2;
      }
    }

    x = (x <= root) ? x : num;

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

    for (const i in factors) {
      if (count.hasOwnProperty(factors[i])) {
        count[factors[i]] += 1;
      } else count[factors[i]] = 1;
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
    let ok = true;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        ok = false;
        break;
      }
    }

    return ok;
  },
};

module.exports = primeFactor;
