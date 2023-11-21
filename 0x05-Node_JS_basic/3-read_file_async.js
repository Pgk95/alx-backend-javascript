const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(Error('Cannot load the database'));
      if (data) {
        const lines = data.trim().split('\n').slice(1);
        console.log(`Number of students: ${lines.length}`);
        const csStudents = lines.filter((line) => line.endsWith('CS')).map((line) => line.split(',')[0]);
        console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
        const sweStudents = lines.filter((line) => line.endsWith('SWE')).map((line) => line.split(',')[0]);
        console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
        resolve();
      }
    });
  });
}

module.exports = countStudents;
