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
1) Find the student who scored the highest mark in a given subject.
2) Add pass/fail status based on total marks.
3) Return students who participate in at least one activity.
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

function studentActivityReport(students){
  let result = [];
  for(let student of students){
    if(student.activities !== null){
      result.push(student.name)
    }
  }
  return result
}

// findHighest(student, "math"); // Top student is Diya mark is 92
// addStatus(student);
// console.log(student);
// console.log(studentActivityReport(student))

