function get(name, role) {
  if (name == "rajan" || role == "admin") {
    console.log("you have full access to your company");
  } else if (name == "roham" || role == "subadmin") {
    console.log("you have full access to add or delete the courses");
  }
}
var name = prompt("enter tour name ");
get(name, "admin");
