const form = document.querySelector(".login-form");
const inputLogin = form.querySelector("[name='email']");
const inputPassword = form.querySelector("[name='password']");
console.log("form:", form, "input:", inputLogin);

form.addEventListener("submit", handleSubmit);
const resValues = {
  email: null,
  password: null,
};

function handleSubmit(event) {
  event.preventDefault();

  if (inputLogin.value === "" || inputPassword.value === "") {
    return alert("Please fill in all the fields!");
  }

  resValues.email = inputLogin.value;
  resValues.password = inputPassword.value;
  console.log(resValues);
  event.currentTarget.reset();
}
