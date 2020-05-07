module.exports = function(config) {

    config.addPassthroughCopy("src/css");
    config.addPassthroughCopy("src/js");
    config.addPassthroughCopy("src/img");
    return  {
      dir: {
        input: "src",
        output: "dist",
        data: "_data"
      }
    };
  
};