const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("email");
const emailError = document.querySelector("#email + .error");
const country = document.getElementById("country");
const countryError = document.querySelector("#country + .error");
const zipcode = document.getElementById("zipcode");
const zipcodeError = document.querySelector("#zipcode + .error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + .error");
const passwordC = document.getElementById("passwordc");
const passwordCError = document.querySelector("#passwordc + .error");

function validatePasswordC() {
  passwordC.addEventListener("input", function () {
    if(passwordC.value === password.value) {
      passwordCError.textContent = "";
    } else {
      showError();
    }
  });

  form.addEventListener("submit", function (event) {
    if(!form.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  function showError() {
    passwordCError.textContent = "Password and password confirmation must be match."
  }
}

function validatePassword() {
  password.addEventListener("input", function () {
    if(password.validity.valid) {
      passwordError.textContent = "";
    } else {
      showError();
    }
  });

  form.addEventListener("submit", function (event) {
    if(!form.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  function showError() {
    if(password.validity.valueMissing) {
      passwordError.textContent = "You need to enter a password.";
    } else if(password.validity.patternMismatch) {
      passwordError.textContent = "A password must be eight characters including one letter, one number and one special character.";
    } 
  }
}

function validateZipcode() {
  zipcode.addEventListener("input", function () {
    if (zipcode.validity.valid) {
      zipcodeError.textContent = "";
    } else {
      showError();
    }
  });
  
  form.addEventListener("submit", function (event) {
    if(!form.validity.valid) {
      showError();
      event.preventDefault();
    }
  })

  function showError() {
    if (zipcode.validity.valueMissing) {
      zipcodeError.textContent = "You need to enter a zip code.";
    } else if (zipcode.validity.patternMismatch) {
      zipcodeError.textContent = "Entered value needs to be a zip code.";
    }
  }
}

function validateCountry() {
  country.addEventListener("input", function () {
    if (country.validity.valid) {
      countryError.textContent = "";
    } else {
      showError();
    }
  });

  form.addEventListener("submit", function (event) {
    if (!country.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  function showError() {
    if (country.validity.valueMissing) {
      countryError.textContent = "Please select a country.";
    }
  }
}

function validateEmail() {
  email.addEventListener("input", function (event) {
    if (email.validity.valid) {
      emailError.textContent = "";
    } else {
      showError();
    }
  });

  form.addEventListener("submit", function (event) {
    if (!email.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  function showError() {
    if (email.validity.valueMissing) {
      emailError.textContent = "You need to enter an e-mail address.";
    } else if (email.validity.patternMismatch) {
      emailError.textContent = "Entered value needs to be an e-mail address.";
    } else if (email.validity.tooShort) {
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailError.className = "error active";
  }
}
validateEmail();
validateCountry();
validateZipcode();
validatePassword();
validatePasswordC();