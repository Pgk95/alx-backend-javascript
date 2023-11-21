const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const records = data.split('\n').filter(Boolean);

    if (records.length <= 1) {
      throw new Error('No data available');
    }

    const students = records.slice(1).map((record) => record.split(',')).filter((record) => record.length === 4);

    const fields = {
      CS: [],
      SWE: [],
    };

    students.forEach((student) => {
      if (student[3] === 'CS' || student[3] === 'SWE') {
        fields[student[3]].push(student[0]);
      }
    });

    console.log(`Number of students: ${students.length}`);

    Object.keys(fields).forEach((field) => {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
