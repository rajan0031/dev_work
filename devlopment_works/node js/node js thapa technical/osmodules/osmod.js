const os = require("os");

console.log(os.arch());

const val1 = os.freemem();
console.log(`${val1 / 1024 / 1024 / 1024}`);

console.log(os.hostname());

console.log(os.version());

console.log(os.type());
