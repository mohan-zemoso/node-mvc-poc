const express = require("express");

const router = express.Router();

const patientController = require("../controllers/patients");

router.get("/", patientController.getPatients);

module.exports = router;
