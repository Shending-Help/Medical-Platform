const express = require("express");
const router = express.Router()

const route = require('../controller/rate')  // ****************** 

router.get('/comment/:id', route.getComment)
router.patch('/comment/:id', route.editComment)
router.post('/comment/', route.createComment)

router.get('/:id', route.getRate)
router.patch('/:id', route.editRate)
router.post('/', route.createRate)



module.exports = router;