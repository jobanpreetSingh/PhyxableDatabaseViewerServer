var express = require('express');
var router = express.Router();
const PatientSchema = require('../public/src/model/userSchema')
/* Read Patients from database */
router.get('/', async (req, res) => {
  try {
    const patient = await PatientSchema.find({});//find all nodes inside the collection

    if (patient) {
      res.status(200).send(patient)
    }
    else {
      throw new Error('data not find')
    }

  } catch (error) {
    console.log(error)
  }

});

module.exports = router;
