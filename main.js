function morePosts() {
  document.querySelector(".load-btn").style.display = "none";
  document.querySelector(".loader").style.display = "block";


  fetch('data.json')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      (myJson ? document.querySelector(".loader").style.display = "none" : console.log('error'));
      document.querySelector(".load-btn").style.display = "block";
      console.log(myJson);
      makePost(myJson);
    });

  function makePost(data) {
    const sliderTemplate = document.getElementById('post').innerHTML;
    const compiledTemplate = Handlebars.compile(sliderTemplate);
    const ourGeneratedHTML = compiledTemplate(data);
    const slidesContainer = document.querySelector('.posts-container');
    slidesContainer.innerHTML = ourGeneratedHTML;
  }
};

function like() {
  alert('#hireDen')
}

morePosts();

