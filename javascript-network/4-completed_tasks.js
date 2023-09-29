const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Make a GET request to the API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const todos = JSON.parse(body);

    // Create an object to store the number of completed tasks by user id
    const completedTasksByUserId = {};

    // Iterate through each todo
    todos.forEach((todo) => {
      // Check if the task is completed
      if (todo.completed) {
        // Increment the count of completed tasks for the user id
        if (completedTasksByUserId[todo.userId]) {
          completedTasksByUserId[todo.userId]++;
        } else {
          completedTasksByUserId[todo.userId] = 1;
        }
      }
    });

    console.log(completedTasksByUserId);
  }
});
