const pageName = document.querySelector('.page-name h1').innerHTML.toLowerCase();
const pageImg = document.querySelector('.page-name-container');
const pageTitle = document.querySelector('title').innerHTML.toLowerCase();
const articleImages = document.querySelectorAll('.show-article p img');
// document.querySelector('.show-article img').classList.add("text-center");
// console.log(document.querySelector('.show-article img'));

// Setting Background Image of each page
if (pageTitle == 'show'){
    const imgURL = document.querySelector('.show-img').getAttribute("src")
    pageImg.style.background = `url("${imgURL}") center no-repeat`
} else {
    var getColor = getRandomColor();
    pageImg.style.background = getColor;
}

articleImages.forEach(img => {
    img.parentElement.classList.add("text-center");
})



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


