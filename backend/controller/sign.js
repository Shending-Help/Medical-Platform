const mongoose = require('mongoose')
const HttpErorr = require('../modules/HttpErorr');
const User =require('../modules/schemas/user')
const signup = async (req, res, next) => {
  console.log(req.body)
  const { type, name, email, phone, password, specilization, degree, description, photo } = req.body;
  if (type !== 'D' || 'P') { res.json({ error: "invalid type" }) }
  if (!String(email).match(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/)) { res.json({ error: "invalid email" }) }
  if (String(name).length <= 2) { res.json({ error: "invalid name" }) }
  if (!String(phone).match(/^01[0125][0-9]{8}$/)) { res.json({ error: "invalid phone" }) }
  if (String(password).length <= 5) { res.json({ error: "week password" }) }
  // if(specilization!=='D'||'P'){res.json({error:"invalid type"})}
  // if(degree!=='D'||'P'){res.json({error:"invalid type"})}
  
  let userfounded;
  try{
userfounded = await User.find();//************ */
  }catch(e){const error = new HttpErorr('find appointment fails', 500); return next(error)}





  res.json({ message: 'signup done' })
}

const signin = ((req, res, next) => {
  console.log(req.body)
  res.json({ message: 'signin done' })
})

exports.signup = signup;
exports.signin = signin;