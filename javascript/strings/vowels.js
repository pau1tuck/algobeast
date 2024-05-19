let word = 'composure';
for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if('aeiou'.includes(letter)) {
        console.log(letter)
    }
}