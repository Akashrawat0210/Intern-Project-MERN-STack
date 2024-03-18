const mongoose = require("mongoose")
const env = require("dotenv")
env.config()
const dbKey = process.env.databaseKey




const dbconnection = async () => {
    try {

        mongoose.connect(dbKey)
        console.log("COnnected to Database")
    } catch (error) {
        console.log("ERROR")    
    }
}

module.exports = dbconnection
