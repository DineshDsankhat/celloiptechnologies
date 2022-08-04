const e = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Doctor Schema
const doctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

Doctor = mongoose.model("Doctor", doctorSchema);

async function createDoctor(userParam) {
  if (await Doctor.findOne({ name: userParam.name })) {
    throw 'name "' + userParam.name + '" is already taken';
  }
  const doctor = new Doctor({
    name: userParam.name,
    password: userParam.password,
  });
  await doctor.save();
  return doctor;
}

async function authenticate({ name, password }) {
  const user = await Doctor.findOne({ name });
  if (password == user.password) {
    return user;
  } else {
    return "No User Found";
  }
}

module.exports = { createDoctor, authenticate };
