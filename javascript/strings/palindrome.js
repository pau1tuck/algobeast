// Check whether the given string is a palindrome.


function isPalindrome3(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
// Time: O(n), Space: O(n)

function isPalindrome(str) {
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}
	return true;
}
// Time: O(n), Space: O(1)

function isPalindrome2(str) {
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		if (str.charAt(left) !== str.charAt(right)) {
			return false;
		}
		left++;
		right--;
	}
	return true;
}
// Time: O(n), Space: O(1)


