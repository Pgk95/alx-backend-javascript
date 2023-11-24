class

AppController {
  static

  getHomepage(request, response) {
    response.status(200).send('Helo Holberton School!');
  }
}

module.exports = AppController;
