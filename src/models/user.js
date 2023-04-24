const mongoose = require("mongoose");
const user = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength:5,
        maxLength:255
    },
    lastname: {
        type:String,
        required: true,
        minLength:5,
        maxLength: 255
    },
    tel:{
        type: String,
        required: true,
    },
    username:{
        type:String,
        required: true,
        unique: true,
        minLength:5,
        maxLength: 255
    },
    password: {
        type: String,
        required: true,
        minLength:6,
        maxLength:255
    }
})

module.exports = mongoose.model("User", user);