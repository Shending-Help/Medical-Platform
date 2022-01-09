const Schema = mongoose.Schema;
const rateSchema = new Schema({
    creatorId: { type: String, required: true },
    doctorId: { type: String, required: true },
    createdDate: { type: Date, required: true },
    comment: { type: String },
    rate: { type: Number, required: true },
})

module.exports = mongoose.model('Rate', rateSchema)