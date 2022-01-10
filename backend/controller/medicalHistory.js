const mongoose = require('mongoose')
const HttpErorr = require('../modules/HttpErorr');

const getRoshita = ((req, res, next) => {
    console.log(req.params.id)
    // console.log(req.body)
    res.json({ message: 'getRoshita done' })
  })

const createRoshita = (req, res, next) => {
    console.log(req.body)
    
    res.json({ message: 'createRoshita done' })
  }
  
  const editRoshita = ((req, res, next) => {
    console.log(req.params.id)
    console.log(req.body)
    res.json({ message: 'editRoshita done' })
  })
  

  const getLabResult = ((req, res, next) => {
    console.log(req.params.id)
    // console.log(req.body)
    res.json({ message: 'getLabResult done' })
  })

const createLabResult = (req, res, next) => {
    console.log(req.body)
    res.json({ message: 'createLabResult done' })
  }
  
  const editLabResult = ((req, res, next) => {
    console.log(req.params.id)
    console.log(req.body)
    res.json({ message: 'editLabResult done' })
  })
  

  exports.createRoshita = createRoshita;
  exports.editRoshita = editRoshita;
  exports.getRoshita = getRoshita;

  exports.createLabResult = createLabResult;
  exports.editLabResult = editLabResult;
  exports.getLabResult = getLabResult;
