/* Given an array arr and an integer k, rotate the array to the right by k steps. */

function clockwiseRotation(arr, k) {
	const iterations = k % arr.length; // Avoid unnecessary iterations if k > arr.length

	for (let i = 0; i < iterations; i++) {
		arr.unshift(arr.pop());
	}
	return arr;
}
/* Given an array arr and an integer k, rotate the array to the left by k steps. */
function reverseRotation(arr, k) {

arr.push(arr.shift());
return arr;
}
