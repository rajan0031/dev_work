function login() {
  var nm = document.getElementById("name").Value;
  var dep = document.getElementById("depart").value;
  var rl = document.getElementById("roll").value;
  var pass = document.getElementById("passward").value;
  if (nm == "rajan" || dep == "cse" || rl == "63" || pass == "12345") {
    location.assign("http://127.0.0.1:5500/newpage.html");
  } else {
    alert("try another way of sign up");
  }
}
