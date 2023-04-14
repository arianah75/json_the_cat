const request = require("request");
const breedName = process.argv[2];

// Define the API endpoint URL
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.log("Error occurred:", error);
  } else {
    const data = JSON.parse(body);

    if (data.length === 0) {
      console.error(`Breed "${breedName}" not found.`);
    } else {
      const breed = data[0];
      console.log(breed.description);
    }
  }
}).on('error', (err) => {
  console.log("Error occurred:", err.message);
});
