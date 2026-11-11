const fs = require("fs");

const departments = [
  "Computer Science",
  "Cybersecurity",
  "Software Engineering",
  "Information Technology",
  "Data Science",
];
const levels = [100, 200, 300, 400, 500];
const currentIntakeYear = 2026; // the year the current 100 level students were admitted

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

const usedMatrics = new Set(); // remembers every matric number already created

function makeMatric(yy) {
  let matric;
  do {
    const number = Math.floor(10000 + Math.random() * 90000); // 10000 to 99999
    matric = yy + "/" + number;
  } while (usedMatrics.has(matric)); // try again if this one exists
  usedMatrics.add(matric);
  return matric;
}

const rows = ["Matric_Number,Department,Level,Attendance_Percentage,Average_Exam_Score"];

for (let i = 1; i <= 200; i++) {
  const level = randomItem(levels);

  // 100 level = admitted this intake year, 200 level = one year earlier, and so on
  const admissionYear = currentIntakeYear - (level / 100 - 1);
  const yy = String(admissionYear).slice(-2);

  const matric = makeMatric(yy);

  const attendance = randomBetween(40, 100);
  const score = Math.min(100, Math.max(0, attendance * 0.6 + randomBetween(-5, 35)));

  rows.push([matric, randomItem(departments), level, attendance.toFixed(1), score.toFixed(1)].join(","));
}

fs.writeFileSync("students.csv", rows.join("\n"));
console.log("students.csv created with 200 records");