function gcd(a, b) {
    while (b) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}
function scm(a, b) {
    return (a * b) / gcd(a, b);
}
function smallestCommonMultiple(arr) {
    let [min, max] = arr.sort((a, b) => a - b);
    let currentScm = min;

    for (let i = min + 1; i <= max; i++) {
        currentScm = scm(currentScm, i);
    }

    return currentScm;
}
