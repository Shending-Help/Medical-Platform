const mongoose = require('mongoose')
const HttpErorr = require('../modules/HttpErorr');

const getUser = ((req, res, next) => {
    console.log(req.params.id)
    // console.log(req.body)
    res.json({ message: 'getUser done' })
  })

const createUser = (req, res, next) => {
    console.log(req.body)
    res.json({ message: 'createUser done' })
  }
  
  const editUser = ((req, res, next) => {
    console.log(req.params.id)
    console.log(req.body)
    res.json({ message: 'editUser done' })
  })
  
  exports.getUser = getUser;
  exports.createUser = createUser;
  exports.editUser = editUser;


