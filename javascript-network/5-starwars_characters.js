;

// Make a GET request to the API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Status:', response.statusCode);
  } else {
    const movie = JSON.parse(body);

    // Iterate through each character in the movie
    movie.characters.forEach((characterUrl) => {
      // Make a GET request to the character URL
      request(characterUrl, (error, response, body) => {
        if (error) {
          console.error('Error:', error);
        } else {
          const character = JSON.parse(body);
          console.log(character.name);
        }
      });
    });
  }
});
