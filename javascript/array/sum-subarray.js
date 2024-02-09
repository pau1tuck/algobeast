/* SUBARRAY SUM EQUALS K */
/* This problem involves counting the number of subarrays within an array that sum up to a given target number. */

function subarraySum(nums, k) {
    let count = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, 1); // To handle the case when a subarray starts from index 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

// Example usage:
console.log(subarraySum([1, 1, 1], 2)); // 2
