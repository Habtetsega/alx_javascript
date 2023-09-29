const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const characterId = 18;

// Make a GET request to the Star Wars API endpoint
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    // Parse the response body as JSON
    const films = JSON.parse(body);
    
    // Filter the films where Wedge Antilles is present
    const filmsWithWedgeAntilles = films.filter(film => film.characters.includes(https://swapi-api.alx-tools.com/api/people/${characterId}/));
    
    // Print the number of movies where Wedge Antilles is present
    console.log(filmsWithWedgeAntilles.length);
  }
});
