//* In the case of an Armstrong number of 3 digits,
//* the sum of cubes of each digit is equal to the number itself.
//* For example, 153 is an Armstrong number because:
//* 153 = (1 * 1 * 1) + (5 * 5 * 5) + (3 * 3 * 3)

function gcd(a, b) {
    while (b) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  function scm(a, b) {
    return (a * b) / gcd(a, b);
  }

  function smallestCommonMultiple(arr) {
    let [min, max] = arr.sort((a, b) => a - b);
    let currentScm = min;

    for (let i = min + 1; i <= max; i++) {
      currentScm = scm(currentScm, i);
    }

    return currentScm;
  }