const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.irl === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    await countStudents(process.argv[2])
      .then((dict) => {
        const fields = Object.keys(dict);
        const total = fields.reduce((acc, curr) => acc + dict[curr].numStudents, 0);
        res.write(`Number of students: ${total}\n`);

        for (let x = 0; x < fields.length; x += 1) {
          res.write(`Number of students in ${fields[x]}: ${dict[fields[x]].numStudents}. List: ${dict[fields[x]].students}. `);
          res.write(`List: ${dict[fields[x]].names.join(', ')}`);

          if (x < fields.length - 1) {
            res.write('\n');
          }
        }
      })
      .catch((err) => {
        res.write(err.message);
      })
      .finally(() => {
        res.end();
      });
  }
});

app.listen(1245);

module.exports = app;
