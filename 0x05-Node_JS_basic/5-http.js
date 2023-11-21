const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    const databaseName = process.argv[2];

    if (!databaseName) {
      res.statusCode = 500;
      res.end('Internal Server Error: Database name is missing.\n');
      return;
    }

    fs.readFile(databaseName, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Internal Server Error: ${err.message}\n`);
      } else {
        const lines = data.trim().split('\n').slice(1);

        if (lines.length === 0) {
          res.statusCode = 200;
          res.end('This is the list of our students: (empty)\n');
        } else {
          res.statusCode = 200;
          res.end(`This is the list of our students:\n${lines.join('\n')}\n`);
        }
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(1245);

module.exports = app;
