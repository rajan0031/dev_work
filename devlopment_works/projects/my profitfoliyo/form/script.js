const form = document.getElementById("signup-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Perform validation and submit data to server here

  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);
}

/*
const form = document.getElementById("signup-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Send data to server
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "submit-form.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log("Error:", xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.log("Error:", xhr.statusText);
  };
  xhr.send(`username=${username}&email=${email}&password=${password}`);
}


*/
