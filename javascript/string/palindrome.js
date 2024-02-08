/* Check if the given string str is a palindrome */
// ---------------------------------------------

// ---------------------------------------------
// OPTIMAL SOLUTION:

function checkPalindrome1(str) {
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

/* Time Complexity: O(n)
The loop iterates approximately n/2 times, which is O(n) in Big O notation.

/ Space Complexity: O(1)
This function only uses a fixed amount of space (for the index variable and a few comparisons), regardless of the input string's size. */

// ---------------------------------------------

function checkPalindrome2(str) {
	return str === str.split("").reverse().join("");
}
/* Time Complexity: O(n)
.split(""), .reverse(), and .join("") each have a time complexity of O(n), where n is the length of the string.

/ Space Complexity: O(n)
.split("") creates a new array of size n, and .join("") creates a new string of size n. This results in additional space usage proportional to the size of the input string. */

// ---------------------------------------------

/*Including the palindrome problem in a list of fundamental algorithms for JavaScript programmers preparing for a formal exam is a good idea. Here are some reasons why:

Algorithmic Thinking: The palindrome problem is an excellent example to teach basic algorithmic thinking, such as iterating over a string, comparing characters, and understanding edge cases.

String Manipulation: It involves essential string manipulation methods in JavaScript like split, reverse, and join, along with basic indexing and iteration, which are crucial for any JavaScript developer.

Complexity Analysis: It provides an opportunity to discuss time and space complexity, which is vital for understanding the efficiency of algorithms.

Problem-Solving Skills: This problem tests a candidate's problem-solving skills and their ability to implement a solution that handles all possible inputs correctly.

Variations and Extensions: The palindrome problem can be extended or modified in numerous ways (e.g., palindrome in a sentence ignoring spaces and punctuation, longest palindrome in a string), making it a versatile question for testing deeper understanding.

Common Interview Question: It's a common question in coding interviews, testing fundamental programming skills.

While the palindrome problem itself might not be complex, it embodies several key aspects of programming that are important for any JavaScript developer, especially in the context of an exam or interview. */
