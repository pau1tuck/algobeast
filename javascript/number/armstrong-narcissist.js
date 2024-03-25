//* In the case of an Armstrong number of 3 digits,
//* the sum of cubes of each digit is equal to the number itself.
//* For example, 153 is an Armstrong number because:
//* 153 = (1 * 1 * 1) + (5 * 5 * 5) + (3 * 3 * 3)

function isArmstrongNumber(num) {
    let sum = 0;
    let temp = num;

    while (temp > 0) {
      let digit = temp % 10;
      sum += digit ** 3;
      temp = Math.floor(temp / 10);
    }

    return sum === num;
  }
// O(n) time for general case, O(1) for 3-digit numbers, O(1) space/memory
