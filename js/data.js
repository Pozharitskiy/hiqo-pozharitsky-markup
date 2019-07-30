function DataService() {
  this.filesURL = '..';
}

DataService.prototype.get = function (fileName) {
  return fetch(`${this.filesURL}/${fileName}.json`)
    .then(
      response => response.json(),
      error => console.log(error)
    );
}

DataService.prototype.getPosts = function () {
  return this.get('data');
}
