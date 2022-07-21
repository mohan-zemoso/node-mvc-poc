const Patient = require("../models/patient");

const getAddPatient = (req, res, next) => {
  res.render("patient", { pageTitle: "Add Patient", path: "/admin/patient" });
};

const postAddPatient = (req, res, next) => {
  const patient = new Patient(req.body.name);
  patient.save();
  res.redirect("/");
};

const getPatients = (req, res, next) => {
  const patients = Patient.fetchAll();
  res.render("home", { pageTitle: "Homepage", patients: patients });
};

module.exports = {
  getAddPatient: getAddPatient,
  postAddPatient: postAddPatient,
  getPatients: getPatients,
};
