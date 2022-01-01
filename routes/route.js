const express = require('express');
const signUpController=require('../controller/signUpController.js');
const addItemController =require('../controller/addItemController.js');
const signbk = express.Router();
const itembk  =express.Router();


signbk
        .route('/')
        .get(signUpController.getSignUp)
        .post(signUpController.postSignUp);


        signbk.get('/signUp', (req,res)=>{
               return res.render("signUp.ejs");
        });

        signbk.get('/signUp/dashboard', (req,res)=>{
                return res.render("dashboard.ejs");
         });


itembk 
         //.route('/')
         .get(addItemController.getItem)
         .post(addItemController.postItem);
        


module.exports = {
       signbk :signbk,
       itembk :itembk
};