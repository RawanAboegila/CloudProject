const express = require('express');
const signUpController=require('../controller/signUpController.js');
const bkEnd = express.Router();


bkEnd
        .route('/')
        .get(signUpController.getSignUp)
        .post(signUpController.postSignUp);


        bkEnd.get('/signUp', (req,res)=>{
               return res.render("signUp.ejs");
        });

        bkEnd.get('/dashboard', (req,res)=>{
                return res.render("dashboard.ejs");
         });
         
        


module.exports = bkEnd;