const request = require('request');
const fs = require('fs');

// Get the URL from the command line argument
const url = process.argv[2];

// Make a GET request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    // Save the response body to a file
    fs.writeFile('webpage.html', body, (error) => {
      if (error) {
        console.error('Error saving file:', error);
      } else {
        console.log('File saved successfully!');
        // Print the response body
        console.log(body);
      }
    });
  }
});
