const itemDB= require('../models/item');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

 function getItem(req,res){
    return res.render('addItem.ejs');
}

function postItem(req,res){
    const post = new itemDB({
        ItemID: req.body.ItemID,
        itemType: req.body.itemType,
        itemName: req.body.itemName,
        itemValue: req.body.itemValue,
        itemdesc: req.body.itemdesc,
        
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
    }

module.exports = {postItem , getItem};
