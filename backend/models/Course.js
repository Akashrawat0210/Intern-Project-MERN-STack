const mongoose = require("mongoose")
const courseSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"

    },



    title: {
        type: String, 
        required: true ,
        unique: true
    },


    author: {
        type: String, 
        required: true 
    },


    
    
    description: {
        type: String, 
        required: true,
    },

    
    price: {
        type: Number, 
        required: true, 
    },

    date: {
        type: Date,
        default: Date.now()
    },



    


})

module.export= mongoose.model("course", courseSchema);
