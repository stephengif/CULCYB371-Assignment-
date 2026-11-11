# CULCYB371-Assignment-
# Student Dataset Generator

**Course:** CUL-CYB 371 – Data Mining and Data Warehousing
**Assignment:** Assignment Two
**Author:** [ADEBIYI STEPHEN OLASUBOMI], [25/17990]

## Description
A Node.js script that generates a fictional dataset of 200 students and saves it as a CSV file. All data is randomly generated and does not belong to any real person.

## Dataset Fields
| Column | Description 
| Matric_Number | Student ID in the format `YY/NNNNN`, where `YY` is the admission year and `NNNNN` is a unique 5-digit number |
| Department | One of 5 departments, picked at random |
| Level | 100, 200, 300, 400 or 500 |
| Attendance_Percentage | Between 40 and 100 |
| Average_Exam_Score | Between 0 and 100, loosely linked to attendance |

## How It Works
- The admission year in each matric number matches the student's level, so a 100 level student has the newest year and a 500 level student the oldest.
- Every matric number is unique.
- Exam scores are calculated from attendance plus random variation, so the dataset contains a realistic pattern for mining.

## How to Run
1. Install [Node.js](https://nodejs.org).
2. Download or clone this repository.
3. In the project folder, run:
   ```
   node generateDataset.js
   ```
4. The file `students.csv` is created in the same folder.

## Files
- `generateDataset.js` – the script that generates the data
- `students.csv` – the generated dataset (200 records)

## Sample Output
```
Matric_Number,Department,Level,Attendance_Percentage,Average_Exam_Score
26/88485,Software Engineering,100,88.1,80.5
24/87460,Software Engineering,300,69.9,45.0
```
