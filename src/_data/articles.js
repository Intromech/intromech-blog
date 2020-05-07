const axios = require('axios');
const showdown = require('showdown');
const converter = new showdown.Converter();
require('dotenv').config();
// var hostURL = 'https://intromech-cms.herokuapp.com/articles';


// Make a request for a user with a given ID
// module.exports 

module.exports = axios.get((`${process.env.HOST}/articles`),{
  headers: {
    Authorization: process.env.JWT
  },
})
  .then(function (response) {
    // var articlesArray = [];
    // response.data.forEach(function(data){
    //   var artObj = {
    //     name: data.title,
    //     author: data.user.username,
    //     content: converter.makeHtml(data.content),
    //     image: data.image.url,
    //     id: data.id
    //   };
    //   articlesArray.push(artObj);
    // });
    // return articlesArray;

    // response.data.forEach(data => {
    //   console.log("------------------------------------------------------------");
    //   console.log(data.id);
    //   console.log(data.user.username);
    //   console.log(data.title);
    //   console.log(data.content);
    //   console.log(data.image.url);
    //   console.log(data.slug);
    //   console.log("------------------------------------------------------------");
    // })

    var articlesArray = [];
    response.data.forEach(data => {
      var artObj = {
        id: data.id,
        author: data.user.username,
        title: data.title,
        content: converter.makeHtml(data.content),
        img: process.env.HOST + data.image.url,
        slug: data.slug,
        categories: data.categories
      };
      articlesArray.unshift(artObj);
    });
    
    return articlesArray;

    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
});
