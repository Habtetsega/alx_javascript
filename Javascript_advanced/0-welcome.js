#!/usr/bin/node
function welcome(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;

  function displayFullName() {
    console.log('Welcome ' + fullName + '!');
  }

  displayFullName();
}

welcome('John', 'Doe');
