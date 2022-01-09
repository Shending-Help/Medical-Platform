const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    creatorId: { type: String, required: true },
    userId: { type: String, required: true },
    createdDate: { type: Date, required: true },
    email:{ type: String, required: true },
    phone:{ type: String, required: true },
    password:{ type: String, required: true },
    specilization:{ type: String, required: true },
    degree:{ type: String, required: true },
    description:{ type: String, required: true },
    photo:{ type: String, required: true },
    appointments:{ type: String, required: true },
    history:{ type: String, required: true },
    status: { type: String, required: true },
})

module.exports = mongoose.model('User', userSchema)