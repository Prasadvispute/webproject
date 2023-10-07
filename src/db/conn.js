const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/youtubeRegistration")
  .then(() => {
    console.log("Connection iss Successfull");
  })
  .catch((e) => {
    console.log("No connection");
  });
