const axios = require('axios');
require('dotenv').config();

module.exports = axios.get((process.env.HOST+"/categories"),{
  headers: {
    Authorization: process.env.JWT
  },
})
  .then(function (response) {
  
    var catArr = [];
    response.data.forEach(data => {
        catArr.push(data.name);
    });

    return catArr;

    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
});
