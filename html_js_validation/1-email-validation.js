javascript
function validateEmail() {
  var email = document.getElementById("email").value;
  var error = document.getElementById("error");

  // Reset error message
  error.innerHTML = "";

  // Check email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    error.innerHTML = "Please enter a valid email address.";
    return false;
  }

  return true;
}
