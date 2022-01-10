const mongoose = require('mongoose');
const HttpErorr = require('../modules/HttpErorr');
const Appointment = require('../modules/schemas/appointment')
const getAppointment = async (req, res, next) => {
  console.log(req.params.id)
  appointId = req.params.id;
  let appointment;
  try { appointment = await Appointment.findById(appointId); }
  catch (e) { const error = new HttpErorr('find appointment fails', 500); return next(error) }
  res.json({ message: 'getAppointment done', appointment })
}

const createAppointment = async (req, res, next) => {
  const { creatorId, doctorId, patientId, createdDate, date, status } = req.body;
  console.log(creatorId)

  const createdAppointment = new Appointment({
    creatorId,
    doctorId,
    patientId,
    createdDate,
    date,
    status
  })
  try { await createdAppointment.save(); }
  catch (e) { const error = new HttpErorr('Creating appoint mentfails', 500); return next(error) }
  res.json({ message: 'createAppointment done', createdAppointment })
}

const editAppointment = async (req, res, next) => {
  const appointId = req.params.id;
  console.log(appointId)
  console.log(req.body)
  const { creatorId, doctorId, patientId, date, status } = req.body;
  console.log(creatorId)
  let appointment;
  try {
    appointment = await Appointment.findById(appointId)
  } catch (e) { const error = new HttpErorr('find appointid faild', 500); return next(error) }
  //if not found make condition
  appointment.date=date;
  appointment.status=status;


  res.json({ message: 'editAppointment done' })
}


exports.getAppointment = getAppointment;
exports.createAppointment = createAppointment;
exports.editAppointment = editAppointment;

