function Draw() { }

Draw.prototype.draw = function (id, data) {
  const rawTemplate = document.getElementById(id).innerHTML;
  const compiledTemplate = Handlebars.compile(rawTemplate);
  // TODO: loop
  for (let i = 0; i < data.post.length; i++) {
    const generatedHTML = compiledTemplate(data.post[i]);
    const generatedHTMLContainer = document.createElement('div');
    generatedHTMLContainer.className = id;
    generatedHTMLContainer.innerHTML = generatedHTML;
    const container = document.getElementById('container');
    container.appendChild(generatedHTMLContainer);
  }
}

Draw.prototype.drawPost = function (data) {
  this.draw('post', data);
}

Draw.prototype.drawPortfolio = function (data) {
  this.draw('portfolio', data);
}

Draw.prototype.drawFolders = function (data) {

}