const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
         required: [true, 'please enter your full name'],
    },

    username: {
        type: String,
         required: [true, 'please add a username'],
         unique: true,
         minlength:[4, 'username must be atleast 4 char'],
         maxlength: [10, 'username must be less than 10 char']

    },
    password: {
        type: String,
        required: [true, 'please add a password'],
         maxlength: [8, 'password must be less than 8 char']

    },
    email: {
        type:String,
        required: [true, 'please add an email'],

    },
    Gender: {
        type:String,
        required: [true, 'please choose your gender'],

    },
    addressOne: {
        type: String,
        required: [true, 'please add First address'],
        maxlength: [30, 'address must be less than 30 char']
    },
    addressTwo: {
        type: String,
        maxlength: [30, 'address must be less than 30 char']
    },
    

});
const User = mongoose.model('user', userSchema);

module.exports = User;