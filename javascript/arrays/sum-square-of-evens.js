// From an array `arr`, filter all the evens, square them, then find the sum.
function sumSquareOfEvens(arr) {
    return arr
        .filter(num => num % 2 === 0)
        .map(even => even ** 2)
        .reduce(sum, square => sum + square, 0);
}