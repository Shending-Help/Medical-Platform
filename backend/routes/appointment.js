const express = require("express");
const router = express.Router()

const sign = require('../controller/sign')
const appointment = require('../controller/appointment')


router.get('/:id', appointment.getAppointment)
router.patch('/:id', appointment.editAppointment)
router.post('/', appointment.createAppointment)
// router.post('/getAppointments/', appointment.getAppointments)
// router.post('/createAppointments/', appointment.createAppointments)




module.exports = router;
