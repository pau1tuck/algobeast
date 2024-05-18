/* Write a function that takes an array of numbers and returns the largest number in the list.
If there are no numbers in the list, return 0. */
function findLargestNumber1(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

function findLargestNumber2(numbers) {
    return Math.max(...numbers); // spreads the numbers into individual arguments
}

/* Given an integer n, return the largest number that contains exactly n digits. */
function largestNumber(n) {
    return 10 ** n - 1; // e.g. 1,000 - 1 = 999
}
