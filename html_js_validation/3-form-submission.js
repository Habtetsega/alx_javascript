javascript
// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Retrieve form field values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Validate form fields
  if (name.trim() === "" || email.trim() === "") {
    document.getElementById("error").innerHTML = "Please fill in all required fields.";
    document.getElementById("success").innerHTML = "";
  } else {
    document.getElementById("error").innerHTML = "";
    document.getElementById("success").innerHTML = "Form submitted successfully!";
    document.getElementById("myForm").reset(); // Reset form fields
  }
}

// Add event listener to the form element
document.getElementById("myForm").addEventListener("submit", handleFormSubmit);
