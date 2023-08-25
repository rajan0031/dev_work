const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/youtubeRegistration")
  .then(() => {
    console.log(
      `connection successful `
    );
  })
  .catch(() => {
    console.log("there is an error");
  });


  /// 0.0.0.0:27017


  
