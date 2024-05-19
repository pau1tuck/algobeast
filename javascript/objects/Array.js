[...array, ...newArray];
[...array, 8, 9, 10];
let arr = new Array(4).fill(0); // [0, 0, 0, 0]
Array.concat(newArray); // returns new array; don't try and `concat()` to a const variable!

for (const element of arr) {
    console.log(element); // Output: '0', '0', '0', '0'
}
for (const index in arr) {
    console.log(index); // Output: '0', '1', '2', '3'
    console.log(arr[index]); // Output: '0', 0', '0', '0'
}

Array.every(member => member.age > 20); // (current => condition): true
Array.filter(num => num % 2 === 0); // (current => condition): new array
Array.find(element => element.age > 40); // : arr[i] (or undefined)
Array.findIndex(member => member.age > 40); // (x => condition): index

[..."Hello"]; // [ 'H','e','l','l','o']
Array.from("Hello"); // ['H','e','l','l','o']
[...new Set([0, 0, 0])]; // [0]
Array.from(new Set([0, 0, 0])); // [0]

Array.includes(5); // true
Array.indexOf(2); // i or -1
Array.join(); // "1,2,3": string
Array.join(" "); // "1 2 3": string
Array.map(x, i => `${i}: GBP ${x.salary * 0.8}`); // (current_value, index => f)
Array.pop(); // :last element
Array.push(6, 7); // :new length of array
Array.reduce((a, c) => a + c, 0); // (acca, x) => function, initial): new value
Array.reverse(arr);
Array.shift(); // :first element
Array.slice(3, 5); // array[3,4] sliced: new array, last index not included
Array.splice();
Array.some(num => num === 13); // (current_value => condition): boolean
Array.some(staffMember => staffMember.name === "Justina Kap"); // :boolean

Array.forEach(number => {
    sum += number;
}); // :undefined
Array.forEach(
    (
        element,
        index,
        entireArray // Prefer `for` loop
    ) => console.log(`${index + 1}: ${element.name} earns ${element.currency} ${element.salary}`)
); // undefined (Note: forEach skips missing values; `for` loop returns `undefined` for missing x)
