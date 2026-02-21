// student=[
//   {
//     id: 1,
//     name: 'Aarav',
//     grade: '10',
//     scores: { math: 85, science: 90, english: 78 },
//     activities: ['cricket', 'music'],
//   },
//   {
//     id: 2,
//     name: 'Diya',
//     grade: '9',
//     scores: { math: 92, science: 88, english: 95 },
//     activities: ['debate', 'chess'],
//   },
//   {
//     id: 3,
//     name: 'Kabir',
//     grade: '10',
//     scores: { math: 76, science: 70, english: 82 },
//     activities: null,
//   },
//   {
//     id: 4,
//     name: 'Maya',
//     grade: '8',
//     scores: { math: 89, science: 94, english: 91 },
//     activities: ['dance'],
//   },
//   {
//     id: 5,
//     name: 'Arjun',
//     grade: '9',
//     scores: { math: 55, science: 65, english: 60 },
//     activities: ['football'],
//   },
// ]

// Q-1)  Count how many vowels are in a string.

// answer
function countVowels(string) {
  let vowels = "aeiou";
  let count = 0;
  for (let ch of string.toLowerCase()) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}

console.log(countVowels("howe"))