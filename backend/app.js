const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose')
const privitKEY = "mongodb+srv://MedicalCare:DFthRoE7OUrlIsi7@cluster0.euv6l.mongodb.net/MedicalCare?retryWrites=true&w=majority"
const sign = require('./routes/sign')
const appointment = require('./routes/appointment')
const medicalHistory = require('./routes/medicalHistory')
const rate = require('./routes/rate')
const user = require('./routes/user')

// const patient =require('./routes/patient')
// const doctor =require('./routes/doctor')



const app = express();

app.use(bodyParser.json())

app.use('/api/sing', sign);
app.use('/api/appointment', appointment);
app.use('/api/medicalHistory', medicalHistory);
app.use('/api/rate', rate);
app.use('/api/user', user);

// app.use('/api/patient',patient);
// app.use('/api/doctor',doctor);



try {
    mongoose.connect(privitKEY)
        .then(() => app.listen(5000))
        .catch((e) => console.log(e))
}
catch (e) { const error = new HttpErorr(' failed to connect to db', 500); return next(error) }////****************** */

