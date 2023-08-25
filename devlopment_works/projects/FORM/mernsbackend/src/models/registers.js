const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirmpassword: {
    type: String,
    require: true,
  },
});

// we need to create collection

const Register = new mongoose.model("Register", EmployeeSchema);

module.exports = Register;
