const axios = require('axios');
require('dotenv').config();

module.exports = axios.get((`${process.env.HOST}/landings`))
  .then(function (response) {
    
    return {
      name: response.data[0].image.name,
      image: process.env.HOST + response.data[0].image.url,
      message: response.data[0].message
    }
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
})


