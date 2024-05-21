/* Instructions: In this challenge, the task is to debug the existing code to successfully execute all provided test files.
Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.
Debug the given function strings_xor to find the XOR of the two given strings appropriately.
Note: You can modify at most three lines in the given code and you cannot add or remove lines to the code.
To restore the original code, click on the icon to the right of the language selector.
Input Format: The input consists of two lines. The first line of the input contains the first string, `s`,
and the second line contains the second string, `t`. */

let result = "";
for (let i = 0; i < s.length; i++) {
    // XOR for binary strings: Append '1' if bits are different, '0' if they are the same
    result += (s[i] === t[i] ? '0' : '1');
}
return result;