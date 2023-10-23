#!/usr/bin/node
const request = require('request');

// Get the movie ID from command line arguments
const movieId = process.argv[2];

// Construct the API endpoint URL
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send a GET request to the API endpoint
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    // Parse the response body as JSON
    const data = JSON.parse(body);

    // Extract the movie title from the response
    const movieTitle = data.title;

    // Print the movie title
    console.log(movieTitle);
  }
});
