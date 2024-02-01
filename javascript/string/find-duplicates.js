//! *** FIND DUPLICATES ***/
/* You're given a string that represents a list of names, separated by commas.
Write a function that finds and returns the FIRST name that appears more than once in the list.
If no name is repeated, return a message. */

findDuplicate = names => {
    const nameCounts = {};
    const nameList = names.split(",");

    for (const name of nameList) {
        nameCounts[name] = (nameCounts[name] || 0) + 1;
        if (nameCounts[name] > 1) {
            return name; // Duplicate found
        }
    }

    return "No duplicates found."; // No duplicates found
};
/*
Time Complexity: O(n) - This is because you're looping through the list of names once. Each operation within the loop (checking and updating the hashmap) is pretty much instantaneous (O(1)), thanks to the magic of hashmaps allowing rapid-fire access to stored data. So, the time it takes is directly proportional to the number of names in your list.

Space Complexity: O(n) - In the worst-case scenario, if all names are unique, your hashmap will end up storing each name once. So, the space needed grows linearly with the number of names, hence O(n).
*/
