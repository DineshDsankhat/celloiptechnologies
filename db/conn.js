const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

//connetion
mongoose
  .connect("mongodb://localhost:27017/doctor")
  .then(() => {
    console.log("Connection with Database");
  })
  .catch(() => {
    console.log("Error in Mongo");
  });

  