const express = require("express");
const app = express();
const port = 3000;
require("./db/conn");

var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const Doctor = require("./Models/doctor");
const Patient = require("./Models/patient");

//api
//doctor Signup
app.post("/signup", (req, res) => {
    Doctor.createDoctor(req.body)
        .then((responce) => res.json({ responce }))
        .catch((err) => res.send(err));
});
//doctor Login
app.get("/login", (req, res) => {
    Doctor.authenticate(req.body)
        .then((responce) => res.json({ responce }))
        .catch((err) => res.send(err));
});

//patient register
app.post("/register", (req, res) => {
    Patient.registerPatient(req.body)
        .then((responce) => res.json({ responce }))
        .catch((err) => res.send(err));
});

//patient list
app.get("/list", (req, res) => {
    Patient.patientList(req.body)
        .then((responce) => res.json({ responce }))
        .catch((err) => res.send(err));
});

//patient searchbyname
app.get("/searchbyname", (req, res) => {
    Patient.searchPatient(req.body.name)
        .then((responce) => res.json({ responce }))
        .catch((err) => res.send(err));
});
//patient deletepatient

app.delete("/deletepatient", (req, res) => {
    Patient.deletePatient(req.body.id)
        .then((responce) => res.json({ responce }))
        .catch((err) => res.send(err));
});

//sorting
app.get("/sortbyname", (req, res) => {
    Patient.sortbyname().then((responce) => res.json({ responce }))
        .catch((err) => res.send(err))
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
