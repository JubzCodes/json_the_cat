const request = require('request');
const search = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, response, body) => {
  if (error) {
    console.log("Error: " + error);
  }
  //console.log(response && response.statusCode);
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log("Breed Not Found!");
  }
});

