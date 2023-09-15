const form = document.getElementById("loginform");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

function showError(input, msg) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = msg;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkRequired(inputArr) {
  let isValid = true;
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      isValid = false;
      showError(input, "This Field is Required");
    } else {
      showSuccess(input);
    }
  });
  return isValid;
}

function checkEmail(input) {
  const emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const isEmailValid = emailRegex.test(input.value);
  return isEmailValid;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkRequired([userName, email, password])) {
    checkEmail(email);
  } else {
  }
});
