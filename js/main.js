
(function loadingFunc() {
  function compileLoadedData(data) {
    const rawTemplate = document.getElementById('post').innerHTML;
    const compiledTemplate = Handlebars.compile(rawTemplate);
    const ourGeneratedHTML = compiledTemplate(data);
    const ourGeneratedHTMLContainer = document.createElement('div');
    ourGeneratedHTMLContainer.className = 'posts-container-small';
    ourGeneratedHTMLContainer.innerHTML = ourGeneratedHTML;
    const cellboxContainer = document.getElementById('container');
    cellboxContainer.appendChild(ourGeneratedHTMLContainer);
  }

  function loadMorePosts() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    fetch('../data.json')
      .then(response => response.json())
      .then((data) => {
        if (data) {
          loader.style.display = 'none';
        }
        compileLoadedData(data);
      });
  }

  loadMorePosts();
  document.querySelector('.load-btn').addEventListener('click', loadMorePosts);
})();