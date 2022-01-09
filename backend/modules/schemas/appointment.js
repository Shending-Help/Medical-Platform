const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
    creatorId: { type: String, required: true },
    doctorId: { type: String, required: true },
    patientId: { type: String },
    createdDate: { type: Date, required: true },
    date: { type: Date },
    status: { type: String, required: true },
})

module.exports = mongoose.model('Appointment', appointmentSchema)