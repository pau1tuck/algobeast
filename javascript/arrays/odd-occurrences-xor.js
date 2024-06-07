function oddOccurrencesInArray(arr) {
    let result = 0;
    for (let element of arr) {
        result ^= element; // The XOR operation continuously updates the result by XORing it with each element in the array.
        // XOR-ing any number with itself results in 0, and XOR-ing any number with 0 results in the number itself.
        // So, any paired elements cancel out, leaving only the unpaired number in result by the end of the loop.
        // When a number appears twice, XORing it twice with something cancels it out (because n XOR n = 0 and x XOR 0 = x).
    }
    return result;
}
// Time: O(n), where n is the number of elements in arr; Space: O(1)