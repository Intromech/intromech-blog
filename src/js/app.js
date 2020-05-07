const pageName = document.querySelector('.page-name h1').innerHTML.toLocaleLowerCase();
const pageImg = document.querySelector('.page-name-container');

pageImg.style.background = `url("/img/${pageName}.jpg") center no-repeat`
