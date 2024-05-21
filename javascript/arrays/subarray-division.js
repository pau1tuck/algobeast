/* Instructions: Two children, Lily and Ron, want to share a chocolate bar.
Each of the squares has an integer on it.
Lily decides to share a contiguous segment of the bar selected such that:
The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.
Example:
s = [2, 2, 1, 3, 2]
d = 4
m = 2
Lily wants to find segments summing to Ron's birthday, d = 4, with a length equalling his birth month, m = 2.
In this case, there are two segments meeting her criteria: [2, 2] and [1, 3]. */

/* Here's a breakdown of the sliding window task:
Chocolate Bar:              An array where each element represents the value of a chocolate square.
Ron's Birth Month (m):      Determines the length of the subarrays to consider.
Ron's Birth Day (d):        Determines the target sum for the subarrays. */

/****** The goal is to find how many subarrays of length `m` sum up to `d`. ******/

function chocolate(s, d, m) {
    let count = 0; // This will count the number of valid segments
    let sum = 0; // This will keep the running sum of m elements

    // First, calculate the sum of the first 'm' elements, if possible
    if (s.length >= m) {
        for (let i = 0; i < m; i++) {
            sum += s[i];
        }
        // Check if the initial sum matches 'd'
        if (sum === d) {
            count++;
        }
        // Now, slide the window of size 'm' across the array, adjusting the sum
        for (let i = m; i < s.length; i++) {
            // Subtract the element that's sliding out and add the element that's sliding in
            sum = sum - s[i - m] + s[i];
            // Check if the updated sum matches 'd'
            if (sum === d) {
                count++;
            }
        }
    }
    return count;
}
// Example usage:
const s = [2, 2, 1, 3, 2];
const d = 4;
const m = 2;
console.log(chocolate(s, d, m)); // Outputs: 2
