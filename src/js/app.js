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
    pageImg.style.background = `url("/img/${pageName}.jpg") center no-repeat`
}

articleImages.forEach(img => {
    img.parentElement.classList.add("text-center");
})


