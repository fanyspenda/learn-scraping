import mongoose from "mongoose";
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);

mongoose
  .connect("mongodb://localhost:27017/blossomzones-scrapper")
  .then(() => {
    console.log("connected");
  })
  .catch(error => {
    console.log(error);
  });
