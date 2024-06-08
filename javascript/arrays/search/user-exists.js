// Best solution (do not use a for loop):
const userExists = (username, users) => users.some(el => el.name === username); // returns true or true

const userExists3 = (username, users) => {
    const index = users.findIndex(el => el.name === username); // returns the object
    return index > 0;
}
// Other solutions:
const userExists2 = (username, users) => {
    const user = users.find(el => el.name === username); // returns the object
    return Boolean(user);
}