const mongoose = require("mongoose")
var validator = require('validator');
//  in file->
//      mongoose Schema for dataBase
const patientSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email  is inValid')
            }
        }
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    }
})

const PatientSchemaModel = mongoose.model('Patient', patientSchema)
module.exports = PatientSchemaModel;