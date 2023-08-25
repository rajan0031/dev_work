var ans = prompt("enter the name");
var t = 12;
while (t--) {
  switch (ans) {
    case "admin":
      console.log("you have full access");
      break;
    case "coadmin":
      console.log("you have full access to add users ");
      break;
    case "caller":
      console.log("you have full access to call details");
      break;

    default:
      break;
  }
}
