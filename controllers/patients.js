const Patient = require("../models/patient");

const getPatients = (req, res, next) => {
  const patients = Patient.fetchAll();
  res.send(patients);
};

const getPatient = (req, res, next) => {
  const patient = Patient.fetchById(req.params.patientId);
  if (patient === undefined) {
    res.send(`Patient with id-${req.params.patientId} not found`);
  } else {
    res.send(patient);
  }
};

const postPatient = (req, res, next) => {
  const patientId = Patient.fetchAll().length + 1;
  const patient = new Patient(patientId, req.body.name);
  patient.save();
  res.send("Patient has been added");
};

const updatePatient = (req, res, next) => {
  const patient = Patient.fetchById(req.params.patientId);
  if (patient === undefined) {
    res.send(`Patient with id-${req.params.patientId} not found`);
  } else {
    patient.update(patient.id, req.body);
    res.send("Patient details has been updated");
  }
};

const deletePatient = (req, res, next) => {
  const patient = Patient.fetchById(req.params.patientId);
  if (patient === undefined) {
    res.send(`Patient with id-${req.params.patientId} not found`);
  } else {
    Patient.delete(patient.id);
    res.send(`Patient with id-${req.params.patientId} has been deleted`);
  }
};

module.exports = {
  postPatient: postPatient,
  getPatients: getPatients,
  getPatient: getPatient,
  updatePatient: updatePatient,
  deletePatient: deletePatient,
};
