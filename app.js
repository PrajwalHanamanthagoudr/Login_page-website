const signUpBtn = document.querySelector("#sign-up-btn");
const signInBtn = document.querySelector("#sign-in-btn");
const signUpForm = document.querySelector("#sign-up-form");
const signInForm = document.querySelector("#sign-in-form");

signUpBtn.addEventListener("click", function () {
  signUpForm.style.display = "block";
  signInForm.style.display = "none";
});

signInBtn.addEventListener("click", function () {
  signInForm.style.display = "block";
  signUpForm.style.display = "none";
});
