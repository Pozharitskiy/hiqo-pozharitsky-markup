document.addEventListener("DOMContentLoaded", function loadingFunc() {
  const dataService = new DataService();
  const drawService = new Draw();

  function loadMorePosts() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    dataService.getPosts()
      .then((data) => {
        if (data) {
          loader.style.display = 'none';
        }
        drawService.drawPost(data);
      });
  }

  loadMorePosts();
  document.querySelector('.load-btn').addEventListener('click', loadMorePosts);
})
