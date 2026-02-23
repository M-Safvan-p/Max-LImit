/*
===========================================
Question:
Count how many vowels are in a given string.
===========================================
*/

function countVowels(string) {
  let vowels = "aeiou";
  let count = 0;

  for (let ch of string.toLowerCase()) {
    if (vowels.includes(ch)) count++;
  }

  return count;
}

// console.log(countVowels("howe")); // 2

/*
===========================================
Question:
Print all prime numbers from a given array.
===========================================
*/

// let result = [];
// let check = true;

function removePrime(array) {
  for (let num of array) {
    check = true;

    if (num < 2) break;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        check = false;
      }
    }

    if (check) result.push(num);
  }

  console.log(result);
}

// removePrime([3, 5, 2, 6, 7, 12]); // [3, 5, 2, 7]

/*
===========================================
Question:
Find the second largest number in a given array.
===========================================
*/

function secLarge(array) {
  let largest = 0;
  let second = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      second = largest;
      largest = array[i];
    } else {
      if (array[i] > second) {
        second = array[i];
      }
    }
  }

  console.log(second);
}

// secLarge([12, 5, 2, 6, 7, 2]); // 7

/*
===========================================
Question:
Flatten a nested array into a single array.
===========================================
*/


function flatten(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result
}

console.log(flatten([1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]]));


/*
===========================================
Question:
Remove duplicate even numbers from an array 
while keeping odd numbers unchanged.
===========================================
*/

function removeDupEven(array) {
  let unique = new Map();
  let result = [];

  for (let n of array) {
    if (n % 2 == 0) {
      if (!unique.has(n)) {
        unique.set(n, true);
        result.push(n);
      }
    } else {
      result.push(n);
    }
  }

  console.log(result);
}

// removeDupEven([2, 3, 4, 5, 2, 3, 4, 5, 3, 0]); 
// [2, 3, 4, 5, 3, 5, 3, 0]




/*
=================================================================================================================================
OBJECT TYPE QS
=================================================================================================================================
*/

/*
===========================================
Question:
Group students by their grade.
===========================================
*/

const students = [
  { name: "Rahul", grade: "A" },
  { name: "Anu", grade: "B" },
  { name: "Kiran", grade: "A" },
  { name: "Meera", grade: "C" },
  { name: "John", grade: "B" },
];

function group(array) {
  let result = {};

  for (let ob of array) {
    if (!result[ob.grade]) {
      result[ob.grade] = [ob.name];
    } else {
      result[ob.grade].push(ob.name);
    }
  }

  console.log(result);
}

// group(students); // { A: ["Rahul","Kiran"], B: ["Anu","John"], C: ["Meera"] }
/*



===========================================
Question:
Get all file names from a nested file system object.
===========================================
*/

const fileSystem = {
  name: "root",
  files: ["file1.txt", "file2.txt"],
  folders: [
    {
      name: "docs",
      files: ["doc1.pdf", "doc2.pdf"],
      folders: [
        {
          name: "personal",
          files: ["resume.docx"],
          folders: [],
        },
      ],
    },
    {
      name: "images",
      files: ["photo1.jpg", "photo2.jpg"],
      folders: [],
    },
  ],
};

function getAllFiles(folder) {
  let result = [];

  result.push(...folder.files);

  for (let sub of folder.folders) {
    result.push(...getAllFiles(sub));
  }

  return result;
}

// console.log(getAllFiles(fileSystem));
// ["file1.txt","file2.txt","doc1.pdf","doc2.pdf","resume.docx","photo1.jpg","photo2.jpg"]

/*
===========================================
Question:
Find the student who scored the highest mark in a given subject.
===========================================
*/

/*
===========================================
Question:
1) Find the student who scored the highest mark in a given subject.
2) Add pass/fail status based on total marks.
===========================================
*/

let student = [
  {
    id: 1,
    name: "Aarav",
    grade: "10",
    scores: { math: 85, science: 90, english: 78 },
    activities: ["cricket", "music"],
  },
  {
    id: 2,
    name: "Diya",
    grade: "9",
    scores: { math: 92, science: 88, english: 95 },
    activities: ["debate", "chess"],
  },
  {
    id: 3,
    name: "Kabir",
    grade: "10",
    scores: { math: 76, science: 70, english: 82 },
    activities: null,
  },
  {
    id: 4,
    name: "Maya",
    grade: "8",
    scores: { math: 89, science: 94, english: 91 },
    activities: ["dance"],
  },
  {
    id: 5,
    name: "Arjun",
    grade: "9",
    scores: { math: 55, science: 65, english: 60 },
    activities: ["football"],
  },
];

function findHighest(students, subject) {
  let max = 0;
  let result = "";

  for (let student of students) {
    for (let key in student.scores) {
      if (key == subject) {
        if (max < student.scores[key]) {
          max = student.scores[key];
          result = student;
        }
      }
    }
  }

  console.log(
    `Top student is ${result.name} mark is ${result.scores[subject]}`,
  );
}

function addStatus(students) {
  for (let student of students) {
    let total = 0;

    for (let mark in student.scores) {
      total += student.scores[mark];
    }

    if (total >= 60) {
      student.status = "Pass";
    } else {
      student.status = "Fail";
    }
  }
}

// findHighest(student, "math"); // Top student is Diya mark is 92
// addStatus(student);
// console.log(student);
