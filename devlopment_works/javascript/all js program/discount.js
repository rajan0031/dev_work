var listprice = prompt("enter your listing price");
var sellprice = prompt("enter your sell price");
var discount = (listprice - sellprice) / listprice;
var ans = discount * 100;
var x = listprice < sellprice;
console.log(`
hey customer you have got a discount of : ${ans}


atm : ${typeof x}


`);

