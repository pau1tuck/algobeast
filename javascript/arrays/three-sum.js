/* Instructions: Given an array nums of n integers, find all unique triplets in the array which gives the sum of zero. */

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let left = i + 1, right = nums.length - 1, sum = 0 - nums[i];
            while (left < right) {
                if (nums[left] + nums[right] === sum) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (nums[left] + nums[right] < sum) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
} /* Time Complexity: O(n^2), where n is the number of elements in the array.
The outer loop runs in O(n), and the inner two-pointer scan runs in O(n) per fixed element.
Space Complexity: O(1) or O(n), depending on whether the sorting space is considered. */

/* 1. Sort the Array: First, sort the array if it isn't already. This makes it easier to navigate and avoid duplicates.

2. Iterate with a Fixed Point: Use one loop to fix one element at a time. For each fixed element, use a two-pointer approach to find the other two elements which make the sum to zero.

3. Two-Pointer Technique:
    Place a left pointer at the element immediately after your fixed point.
    Place a right pointer at the end of the array.
    Move these pointers inward. If their sum is too large, decrease the right pointer to reduce the sum. If their sum is too small, increase the left pointer to increase the sum.

4. Skip Duplicates: After finding each triplet, skip over duplicates to ensure unique triplets. This involves jumping over the same values for both the fixed element and the two pointers as long as the subsequent values are identical to the ones just used.

5. Add Valid Triplets: Each time the sum of the triplet equals zero, add it to your result list. */