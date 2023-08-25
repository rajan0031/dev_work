const bioData = {
  name: "rajan",
  age: 26,
  channel: "rajan-babu",
  father: "yogendra",
  mother: "asha devi",
};

//console.log(bioData.name);

// converting object to json data;

const jsonData = JSON.stringify(bioData);
//console.log(jsonData);

// converting json to object

const objData = JSON.parse(jsonData);
console.log(objData);
