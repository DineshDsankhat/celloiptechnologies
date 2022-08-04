const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Patient  Schema
const patientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
  },
});
Patient = mongoose.model("Patient", patientSchema);

//functional

async function registerPatient(userParam) {
  if (await Patient.findOne({ name: userParam.name })) {
    throw 'patient name "' + userParam.name + '" is already taken';
  }
  const patient = new Patient({
    name: userParam.name,
    email: userParam.email,
    age: userParam.age,
    gender: userParam.gender,
  });
  await patient.save();
  return patient;
}

//patientList
async function patientList() {
  return await Patient.find();
}

//searchPatient
async function searchPatient(name) {
  if (await Patient.findOne({ name })) {
    return Patient.findOne({ name })
  }
  else {
    throw 'patient name "' + name + '" is not Found';
  }
}

// deletePatient
async function deletePatient(id) {
  return await Patient.findByIdAndRemove(id)
}

//shorting
async function sortbyname() {

}
// module exports
module.exports = {
  registerPatient,
  patientList,
  searchPatient,
  deletePatient,
  sortbyname,
};
