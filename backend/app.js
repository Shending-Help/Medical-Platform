const bodyParser = require("body-parser");
const express = require("express");

const HomeRouter = require('./routes/home-route')
const ProfileRouter = require('./routes/profile-route')
const UserRouter = require('./routes/user-route')

const app=express();



app.use('/api/home',HomeRouter)
app.use('/api/profile',ProfileRouter)
app.use('/api/user',UserRouter)

app.listen(5000);