const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({


    name: {
        type: String, 
        required: true 
    },

    
    email: {
        type: String, 
        required: true,
        unique: true
    },

    
    password: {
        type: String, 
        required: true 
    },

    isadmin: {
        type: Boolean,
        default: false
    },

    
    date: {
        type: Date,
        default: Date.now()
    },



})

module.export= mongoose.model("user", userSchema);
