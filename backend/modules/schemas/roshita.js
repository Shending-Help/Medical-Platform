const Schema = mongoose.Schema;
const roshitaSchema = new Schema({
    creatorId: { type: String, required: true },
    doctorId: { type: String, required: true },
    patientId: { type: String },
    createdDate: { type: Date, required: true },
    edited: { type: Boolean, required: true },
    date: { type: Date },
    title: { type: String, required: true },
    description: { type: String },
    resultPhoto: { type: String }
})

module.exports = mongoose.model('Roshita', roshitaSchema)