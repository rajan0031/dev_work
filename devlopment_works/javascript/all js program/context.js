function tipper(a, bill) {
  var tip = parseInt(a);
  var bill = parseInt(bill);

  console.log(bill + tip);
}
var bill = prompt("enter the value of bill");
var tip = prompt("enter the value of tips");
tipper(tip, bill);
