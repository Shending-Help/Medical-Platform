const express = require("express");
const router = express.Router()

const medicalHistory = require('../controller/medicalHistory')

router.get('/roshita/:id', medicalHistory.getRoshita)
router.patch('/roshita/:id', medicalHistory.editRoshita)
router.post('/roshita/', medicalHistory.createRoshita)

router.get('/labResult/:id', medicalHistory.getLabResult)
router.patch('/labResult/:id', medicalHistory.editLabResult)
router.post('/labResult/', medicalHistory.createLabResult)


module.exports = router;