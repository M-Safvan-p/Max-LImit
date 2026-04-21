/*
===========================================
Question:
Find the count of unique vowels in a string.
===========================================
*/

function findUniqueVowels(string) {
  let unique = new Set();
  let vowels = "aeiou";

  for (let ch of string.toLowerCase()) {
    if (vowels.includes(ch)) {
      unique.add(ch);
    }
  }

  return unique.size;
}

// Example
console.log(findUniqueVowels("safvn"));

/*
===========================================
Question:
Find the length of the longest word in a sentence.
===========================================
*/

function findLongestWordLength(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest.length;
}

// Example
console.log(findLongestWordLength("I am learning JavaScript"));