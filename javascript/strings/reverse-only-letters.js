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