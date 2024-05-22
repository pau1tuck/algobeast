function binaryGap(N) {
    const binary = N.toString(2);
    let maxGap = 0;
    let currentGap = 0;

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            currentGap++;
        } else {
            maxGap = Math.max(maxGap, currentGap);
            currentGap = 0;
        }
    }
    return maxGap;
} // Time: O(n), where n is the number of bits in the binary representation of N; Space: O(1)