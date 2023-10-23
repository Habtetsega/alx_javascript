javascript
function validatePassword() {
  var password = document.getElementById("password").value;
  var error = document.getElementById("error");

  // Reset error message
  error.innerHTML = "";

  // Check password length
  if (password.length < 8) {
    error.innerHTML = "Password must be at least 8 characters long.";
    return false;
  }

  // Check for uppercase letter
  if (!/[A-Z]/.test(password)) {
    error.innerHTML = "Password must contain at least one uppercase letter.";
    return false;
  }

  // Check for lowercase letter
  if (!/[a-z]/.test(password)) {
    error.innerHTML = "Password must contain at least one lowercase letter.";
    return false;
  }

  // Check for numeric digit
  if (!/\d/.test(password)) {
    error.innerHTML = "Password must contain at least one numeric digit.";
    return false;
  }

  // Check for special character
  if (!/[!@#$%^&*]/.test(password)) {
    error.innerHTML = "Password must contain at least one special character.";
    return false;
  }

  return true;
}
