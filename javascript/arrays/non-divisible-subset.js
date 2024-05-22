const nonDivisibleSubset = (k, arr) => {
    // The purpose of the remainders array is to keep track of the values of the remainders when each number in the input array `arr` is divided by `k`
    const remainders = new Array(k).fill(0);
    // Count the frequency of each remainder when divided by k
    arr.forEach(number => remainders[number % k]++);
    // If k is even, we must only include one number that leaves a remainder of k / 2, otherwise the sum will be divisible by k
    if (k % 2 === 0) {
        remainders[k / 2] = Math.min(remainders[k / 2], 1);
    }
    // Initialize the result at a minimum of either 1 or the total numbers that give a remainder of 0
    let result = Math.min(remainders[0], 1);
    // Choose maximum of count of numbers giving remainder i or k-i
    for (let i = 1; i <= k / 2; i++) {
        result += Math.max(remainders[i], remainders[k - i]);
    }
    return result;
};
