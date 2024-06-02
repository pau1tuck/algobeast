function reverseOnlyLetters(S) {
    let arr = S.split('');
    let left = 0, right = arr.length - 1;
    while (left < right) {
        if (!/[a-zA-Z]/.test(arr[left])) {
            left++;
        } else if (!/[a-zA-Z]/.test(arr[right])) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
} // Time: O(n), Space: O(1)

function reverseOnlyLetters(S) {
    let letters = S.split('').filter(c => /[a-zA-Z]/.test(c));
    let result = [];
    for (let i = 0; i < S.length; i++) {
        if (/[a-zA-Z]/.test(S[i])) {
            result.push(letters.pop());
        } else {
            result.push(S[i]);
        }
    }
    return result.join('');
} // Time: O(n), Space: O(n)