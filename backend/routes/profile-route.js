const express = require("express");
const profileController = require('../controllers/profile-controller');

const router = express.Router();


router.get('/:pid', profileController.getProfileID)

module.exports = router;