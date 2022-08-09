const onFocus = document.getElementById("validation-input");
onFocus.addEventListener("blur", onFocusChange);

function onFocusChange() {
  console.log(this.value.length);
  if (this.getAttribute("data-length") == this.value.length) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else {
    this.classList.add("invalid");
    this.classList.remove("valid");
  }
}
