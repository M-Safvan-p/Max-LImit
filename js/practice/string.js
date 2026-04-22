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
// console.log(findLongestWordLength("I am learning JavaScript"));


/*
===========================================
Question:
Convert a string to Camel Case.
===========================================
*/

function toCamelCase(string) {
  let words = string.split(" ");
  let result = "";

  for (let word of words) {
    let first = word[0].toUpperCase();
    let rest = word.slice(1);
    result += first + rest;
  }

  return result;
}

// Example
// console.log(toCamelCase("hello world safwan"));

/*
===========================================
Question:
Remove all non-alphabetic characters from a string.
===========================================
*/

function removeNonAlphabetic(string) {
  let result = "";

  for (let ch of string) {
    if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) {
      result += ch;
    }
  }

  return result;
}

// Example
console.log(removeNonAlphabetic("hadfw232$#@%!2sfss"));

/*
===========================================
Question:
Check if two strings are valid anagrams.
===========================================
*/

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let freq = {};

  for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let ch of t) {
    freq[ch] = (freq[ch] || 0) - 1;
    if (freq[ch] < 0) return false;
  }

  return true;
}

// Example
console.log(isAnagram("listen", "silent"));