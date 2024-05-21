/* Instructions: Write a function that generates the first n rows of Pascal's Triangle.
Pascal's Triangle is a triangular array of the binomial coefficients. Each number is the sum of the two directly above it.
Input: A non-negative integer, n, representing the number of rows.
Output: An array of arrays, where each inner array represents a row of Pascal's Triangle. */

function generatePascalsTriangle(n) {
    if (n === 0) return [];
    if (n === 1) return [[1]]; // Base case: the first row of Pascal's Triangle

    // Recursively generate the triangle up to the row before the current one
    const result = generatePascalsTriangle(n - 1);

    // Compute the last row using the last row from the previously generated triangle
    const lastRow = result[result.length - 1];
    const currentRow = [1]; // First element of any row in Pascal's Triangle is 1

    // Compute the middle elements of the current row
    for (let i = 1; i < lastRow.length; i++) {
        currentRow[i] = lastRow[i - 1] + lastRow[i];
    }
    // The last element of any row in Pascal's Triangle is also 1
    currentRow.push(1);

    // Add the current row to the triangle
    result.push(currentRow);
    return result;
}    // Time: O(n^2), Space: O(n^2)
// Example usage
console.log(generatePascalsTriangle(5));