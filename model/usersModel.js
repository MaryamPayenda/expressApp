const mongoose = require("mongoose");
// creating schema and identifying the documents and it's datatype
const usersDataSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please fill the name field"],
    trim: true,
  },
  userPass: {
    type: String,
    required: [true, "Please, Write password"],
  },

  age: {
    type: Number,
    required: [true, "Please, Enter your age"],
  },
  fwd: {
    type: String,
    required: [true, "Please Your batch NO"],
  },
  toolStack: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
  },
});
// exporting the schema and creating new collection

module.exports = mongoose.model("usersData", usersDataSchema);
