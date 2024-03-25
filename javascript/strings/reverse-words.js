function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word and join them back into a sentence
    const reversedSentence = words.map(word => {
      return word.split('').reverse().join('');
    }).join(' ');

    return reversedSentence;
  }

// Time: O(n * m), Space: O(n * m)
/* Time: O(n * m) - Here, n is the number of words in the sentence, and m is the average length of these words.
We go through each word (O(n)) and then each character in the word to reverse it (O(m)), so it multiplies out.

Space: O(n * m) - We're creating a new string with the reversed words, which, in the worst case,
takes up as much space as the original sentence, so the space required scales with the size of the input sentence.
Each word is reversed and stored as a new string, which adds to the space complexity. */