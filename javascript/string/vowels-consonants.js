//! *** VOWELS AND CONSONANTS ***

function returnVowelsAndConsonants(s) {
    const vowels = s.match(/[aeiou]/gi) || [];
    const consonants = s.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];

    return {
        sortedVowels: vowels.sort(),
        sortedConsonants: consonants.sort(),
    };
}
