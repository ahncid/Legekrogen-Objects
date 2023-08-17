function validate() {
  let form = document.forms["signUpForm"];
  let errorBox = document.querySelector(".errorMessage");
  const errorMessages = [];

  if (form["name"].value.trim() === "") {
    errorMessages.push("Navn er påkrævet");
  }

  if (form["email"].value.trim() === "") {
    errorMessages.push("Email er påkrævet");
  }
  if (errorMessages.length !== 0) {
    errorBox.classList.add("show");
    errorBox.innerHTML =
      "<h4>Fix the following errors:</h4>" + errorMessages.join("<br>");
    return false;
  }

  return true;
}
