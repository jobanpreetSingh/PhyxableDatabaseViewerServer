var express = require('express');
var router = express.Router();
const PatientSchema = require('../public/src/model/userSchema')
/* Add Patients  */
router.post('/', async (req, res) => {
    const { email, name, phone } = req.body;
    const phoneLength = Math.ceil(Math.log10(phone));//get phone number length
    //case 1-> if any field empty throw error
    if (!email || !phone || !name) {
        return res.status(422).send({ error: 'please fill all the required fields' })

    }
    //case 2-> if phone number length > 10 ||< 0 throw error
    else if (phoneLength > 10 || phoneLength < 10) {
        res.status(422).send({ error: 'phone number is not valid' })
    }
    else {
        try {
            //case 1-> with the help of Schema find the email if already inside database throw error else save();
            const userExist = await PatientSchema.findOne({ email: email })
            if (userExist) {
                return res.status(422).send({ error: 'user already exist' })
            }
            const user = new PatientSchema({ email, name, phone })
            await user.save()
            res.status(201).send(user)

        } catch (error) {
            console.log(error)
        }
    }

});

module.exports = router;