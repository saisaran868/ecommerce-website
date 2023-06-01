// Getting references to the form elements
const emailInput = document.querySelector("#floatingInput");
const passwordInput = document.querySelector("#floatingPassword");
const signUpButton = document.querySelector(".bt");

// Adding event listener to the form's submit button
signUpButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission when clicked sign up button it wont go to index.html

  // Getting input values
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

  // Performing the redirection if data is valid
  if (emailFlag && passwordFlag) {
    window.location.href = "home.html";
  } else {
    // Display an error message
    if (!emailFlag) {
      alert("Please enter a valid email address.");
    }
    if (!passwordFlag) {
      alert("Password length should be greater than or equal to 6 characters.");
    }
  }
});
