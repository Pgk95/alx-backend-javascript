const fs = require('fs');

const readDatabase = async (filePath) => {
  try {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    const students = data.split('\n').map((line) => line.split(','));
    const fields = {};

    for (const student of students) {
      const field = student[1];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student);
    }

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = readDatabase;
