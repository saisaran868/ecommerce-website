// Get references to the form elements
const emailInput = document.querySelector("#floatingInput");
const passwordInput = document.querySelector("#floatingPassword");
const signUpButton = document.querySelector(".bt");
const errorAlert = document.querySelector("#errorAlert");

// Add event listener to the form's submit button
signUpButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  const email = emailInput.value;
  const password = passwordInput.value;

  // Validation flags
  let emailFlag = false;
  let passwordFlag = false;

  // Validate email
  if (email.includes("@") && email.includes(".")) {
    emailFlag = true;
  }

  // Validate password
  if (password.length >= 6) {
    passwordFlag = true;
  }

  // Perform the redirection if data is valid
  if (emailFlag && passwordFlag) {
    window.location.href = "home.html";
  } else {
    // Display an error message
    if (!emailFlag) {
      showError("Please enter a valid email address.");
    }
    if (!passwordFlag) {
      showError("Password length should be greater than or equal to 6 characters.");
    }
  }
});

// Function to show the error message in the modal dialog
function showError(message) {
  errorAlert.textContent = message;
  errorAlert.style.display = "block";
}
