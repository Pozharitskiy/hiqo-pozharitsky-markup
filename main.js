fetch('data.json')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
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