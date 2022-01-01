const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Post = require('./models/user');
const bodyParser = require('body-parser');
const signupRoute = require('./routes/route');
require('dotenv/config');
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true ,useUnifiedTopology: true,
useCreateIndex: true, }, () => console.log('connected to DB!'));
app.use(bodyParser.json());

// app.use('/signup', signupRoute);

app.use(bodyParser.urlencoded({
    extended: true}));


app.get('/',(req,res)=>{
    res.set({
        'Access-control-Allow-Origin': '*'
        });
       return  res.render("startUp.ejs");
    
})
app.listen(3000);