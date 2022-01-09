const express = require("express");
const router = express.Router()

const route = require('../controller/user')  // ****************** 

router.get('/:id', route.getUser)
router.patch('/:id', route.editUser)
router.post('/', route.createUser)


// router.get('/doctor/:id', route.getComment)
// router.patch('/doctor/:id', route.editComment)
// router.post('/doctor/', route.getComment)

// router.get('/patient/:id', route.getComment)
// router.patch('/patient/:id', route.editComment)
// router.post('/patient/', route.getComment)

// router.get('/admin/:id', route.getComment)
// router.patch('/admin/:id', route.editComment)
// router.post('/admin/', route.getComment)

// router.get('/resep/:id', route.getComment)
// router.patch('/resep/:id', route.editComment)
// router.post('/resep/', route.getComment)


module.exports = router;