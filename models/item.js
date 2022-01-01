const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    ItemID:{
       type: Number,
       required: [true,'please add a Item ID'],
       unique: true,
   },
   itemType:{
       type: String,
       maxlength:[15,'item Type must be less than 15 char']
   },
   itemdesc:{
       type:String,
       maxlength:[150,'item Type must be less than 15 char']

   },
   itemName:{
       type: String,
       required: [true,'please add a item Name'],
       maxlength:[15,'item Name must be less than 15 char']
   },
   itemOwner:{
       type: String,
       required: [true,'please add a item Owner '],
   },
   itemValue:{
       type: Number,
       required: [true,'please add a item Value '],
       maxlength:[10,'item Value must be less than 10 char']
   }
});

const Item = mongoose.model('item', ItemSchema);

module.exports = Item;