const mongoose = require("mongoose")
const RecordSchema = new mongoose.Schema({


    title: {
        type: String, 
        required: true 
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

module.export= mongoose.model("record", RecordSchema);
