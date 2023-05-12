const request = require('request');

const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request.get(url, 'utf8', (error, response, body) => {
  if (error) {
    console.log(error);
  }
  if (response.statusCode !== 200) {
    console.log(`Error ${response.statusCode}`);
    return;
  }

  const data = JSON.parse(body);
  // console.log(data.length);
  // check the length of data
  if (data.length === 0) {
    console.log(`No results for ${breedName}`);
    return;
  }
  console.log(data[0].description);
});
