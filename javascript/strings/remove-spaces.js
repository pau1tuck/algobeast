function removeSpaces1(str) {
    return str.split(" ").join("");
}

function removeSpaces2(str) {
    return str.replace(/\s+/g, "");
}

function removeSpaces3(str) {
    return str.replaceAll(" ", "");
}

function removeSpaces4(str) {
    return str
        .split("")
        .filter(char => char !== " ")
        .join("");
}

function removeSpaces5(str) {
    return str.split("").reduce((acc, char) => {
        if (char !== " ") {
            acc += char;
        }
        return acc;
    }, "");
}
