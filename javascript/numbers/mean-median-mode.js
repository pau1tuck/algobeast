function calculateStatistics(numbers) {
    numbers.sort((a, b) => a - b);
    // Mean
    const total = numbers.reduce((acc, num) => acc + num, 0);
    const mean = total / numbers.length;
    // Median
    let median;
    if (numbers.length % 2 === 0) {
        median = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
    } else {
        median = numbers[Math.floor(numbers.length / 2)];
    }
    // Mode
    let modeMap = {};
    let maxCount = 0;
    let modes = [];
    numbers.forEach(number => {
        if (modeMap[number]) {
            modeMap[number]++;
        } else {
            modeMap[number] = 1;
        }
        if (modeMap[number] > maxCount) {
            maxCount = modeMap[number];
            modes = [number];
        } else if (modeMap[number] === maxCount) {
            modes.push(number);
        }
    });
    modes = [...new Set(modes)]; // Ensure modes are unique
    return { mean, median, mode: modes };
}
// Example usage
const data = [1, 2, 4, 2, 3, 2, 3, 3];
console.log(calculateStatistics(data));
