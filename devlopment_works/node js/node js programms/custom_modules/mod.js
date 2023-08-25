console.log("this is mod.js");

function average(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum / arr.length;
}

/*
module.exports = {
  avg: average,
  name: "rajan",
  age: "19",
};

*/

module.exports.name = "Rajan";
