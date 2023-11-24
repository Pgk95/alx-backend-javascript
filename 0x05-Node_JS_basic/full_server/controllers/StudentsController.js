const { readDatabase } = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase('./database.csv')
      .then((fields) => {
        const sortedFields = Object.keys(fields).sort((a, b) => a.localeCompare(b));
        let message = 'This is the list of our students\n';

        for (const field of sortedFields) {
          const students = fields[field];
          const formattedStudents = students.join(', ');
          message += `Number of students in ${field}: ${students.length}. List: ${formattedStudents}\n`;
        }

        response.status(200).send(message);
      })
      .catch((error) => {
        response.status(500).send(`Cannot load the database: ${error.message}`);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase('./database.csv')
      .then((fields) => {
        const students = fields[major];
        const formattedStudents = students.join(', ');

        response.status(200).send(`List: ${formattedStudents}`);
      })
      .catch((error) => {
        response.status(500).send(`Cannot load the database: ${error.message}`);
      });
  }
}

module.exports = { StudentsController };
