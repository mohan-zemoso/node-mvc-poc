const express = require("express");

const router = express.Router();

const patientController = require("../controllers/patients");

router.get("/patient", patientController.getAddPatient);

router.post("/patient", patientController.postAddPatient);

module.exports = {
  router: router,
};
