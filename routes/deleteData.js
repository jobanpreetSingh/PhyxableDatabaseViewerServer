var express = require('express');
var router = express.Router();
const PatientSchema = require('../public/src/model/userSchema')
/* Delete patients */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params //getting id from the paramaters
    const deletePatient = await PatientSchema.findByIdAndDelete(id) // find patient by id and delete.

    if (!id) {
      return res.status(400).send('no patient exsist');
    }

    else if (deletePatient) {
      console.log('deletePatient outside', deletePatient)
      res.status(200).send({ message: "patient deleted  successfully" });
    }

    else if (!deletePatient) {
      throw new Error('patient not found')
    }

  } catch (error) {
    res.status(500).send(error)
  }

});
module.exports = router;
