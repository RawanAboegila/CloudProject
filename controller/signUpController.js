const signupDB= require('../models/user');
const path= require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

 function getSignUp(req,res){
    return res.render('signUp.ejs');
}

function postSignUp(req,res){
    const post = new signupDB({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        Gender: req.body.Gender,
        addressOne: req.body.pasaddressOnesword,
        addressTwo: req.body.addressTwo,


        })
        post
        .save()
        .then((result)=>{
        return res.status(200).json({
        msg: "Success",
        post: result
        })})
        .catch((err)=>{
         return res.status(500).send({
                error: "Server error, please check input and try again later"
        });
        })
    };
module.exports = {getSignUp , postSignUp};
