const mongoose = require('mongoose')
const HttpErorr = require('../modules/HttpErorr');

const getRate = ((req, res, next) => {
    console.log(req.params.id)
    // console.log(req.body)
    res.json({ message: 'getRate done' })
  })

const createRate = (req, res, next) => {
    console.log(req.body)
    res.json({ message: 'createRate done' })
  }
  
  const editRate = ((req, res, next) => {
    console.log(req.params.id)
    console.log(req.body)
    res.json({ message: 'editRate done' })
  })
  

  const getComment = ((req, res, next) => {
    console.log(req.params.id)
    // console.log(req.body)
    res.json({ message: 'getComment done' })
  })

const createComment = (req, res, next) => {
    console.log(req.body)
    res.json({ message: 'createComment done' })
  }
  
  const editComment = ((req, res, next) => {
    console.log(req.params.id)
    console.log(req.body)
    res.json({ message: 'editComment done' })
  })
  

  exports.createRate = createRate;
  exports.editRate = editRate;
  exports.getRate = getRate;

  exports.createComment = createComment;
  exports.editComment = editComment;
  exports.getComment = getComment;
