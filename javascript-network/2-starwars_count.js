#!/usr/bin/node
const request = require('request');

// Get the API URL from command line arguments
const apiUrl = process.argv[2];

// Character ID for "Wedge Antilles"
const characterId = 18;

// Send a GET request to the API endpoint
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    // Parse the response body as JSON
    const data = JSON.parse(body);

    // Filter the movies where "Wedge Antilles" is present
    const moviesWithWedge = data.results.filter(movie =>
      movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

    // Get the count of movies
    const movieCount = moviesWithWedge.length;

    // Print the number of movies
    console.log(movieCount);
  }
});
