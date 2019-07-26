fetch('../data.json')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    createCellbox(myJson);
  });

fetch('../sliderData.json')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    giveSlides(myJson);
  });

fetch('../portfolioData.json')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    givePortfolioSlides(myJson);
  });

function createCellbox(cellboxData) {
  const rawTemplate = document.getElementById('cellbox').innerHTML;
  const compiledTemplate = Handlebars.compile(rawTemplate);
  const ourGeneratedHTML = compiledTemplate(cellboxData);
  const cellboxContainer = document.querySelector('.cellbox');
  cellboxContainer.innerHTML = ourGeneratedHTML;
}

function giveSlides(slidesData) {
  const sliderTemplate = document.getElementById('homeSlider').innerHTML;
  const compiledTemplate = Handlebars.compile(sliderTemplate);
  const ourGeneratedHTML = compiledTemplate(slidesData);
  const slidesContainer = document.querySelector('.header-slider');
  slidesContainer.innerHTML = ourGeneratedHTML;
}

function givePortfolioSlides(portfolioData) {
  const sliderTemplate = document.getElementById('portfolioSlider').innerHTML;
  const compiledTemplate = Handlebars.compile(sliderTemplate);
  const ourGeneratedHTML = compiledTemplate(portfolioData);
  const slidesContainer = document.querySelector('.scroller');
  slidesContainer.innerHTML = ourGeneratedHTML;
}