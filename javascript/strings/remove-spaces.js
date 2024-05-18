function removeSpaces1(str) {
    return str.split(" ").join("");
} // Time: O(n), Space: O(n)

function removeSpaces2(str) {
    return str.replace(/\s+/g, "");
} // Time: O(n), Space: O(n)

function removeSpaces3(str) {
    return str.replaceAll(" ", "");
} // Time: O(n), Space: O(n)

function removeSpaces4(str) {
    return str
        .split("")
        .filter(char => char !== " ")
        .join("");
} // Time: O(n), Space: O(n)

function removeSpaces5(str) {
    return str.split("").reduce((acc, char) => {
        if (char !== " ") {
            acc += char;
        }
        return acc;
    }, "");
} // Time: O(n), Space: O(n)
s;
