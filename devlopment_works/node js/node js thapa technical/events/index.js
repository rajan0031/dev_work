const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
  console.log("my name is Rajan");
});

event.on("say", () => {
  console.log("my name is Rajan bas aur kya");
});

event.on("sayaddress", () => {
  console.log("my name is Rajan living in babhnauli bazar ");
});

event.on("checkpage", (sc, msg) => {
  console.log(`the status code is ${sc} and page is ok`) ;
});
event.emit("sayMyName");

event.emit("say");

event.emit("sayaddress");

event.emit("checkpage", 200, "ok");
