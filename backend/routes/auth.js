const express = require("express")
const User = require("../models/User")
const router = express.Router()
const { body, validationResult } = require("express-validator")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const { model, modelNames } = require("mongoose")

dotenv.config();
const salt = process.env.secrete;

router.post("/signup", [
    body("name", "Enter a valid name").isLength({ min: 4 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid name").isLength({ min: 8 })
],

    async (req, res) => {
        let succes = false;
        const error = validationResult(req)


        if(!error.isEmpty()){
            return res.status(400).json({errors:error.array()})
            
        }
        try { 

            let user=await User.findOne({email: req.body.email})
            if(user){
                return res.status(400).json({success , error:"This email is already exist"})
            }
            const hide=await bcrypt.genSalt(10);
            const secpass =await bcrypt.hash(req.body.password, hide);
            user=await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                isadmin: req.body.isadmin

            })
            succes=true;
            const data = {
                user:{id:user.id}

            }
            const authToken=jwt.sign(data,salt);
            console.log(success , authToken);
            res.json({success,authToken})

        } 
        
        catch (error) {

            console.log(error.message)
            res.status(500).send("internal server error")
            
        }  
    }
)








router.post("/signup", [
    body("email", "Enter a valid email").exists(),
    body("password", "Enter a valid name").exists()
],

    async (req, res) => {
        let succes = false;
        const error = validationResult(req)


        if(!error.isEmpty()){
            return res.status(400).json({errors:error.array()})
            
        }

        const {email , password }= req.body
        try { 

            let user=await User.findOne({email})
            if(!user){
                return res.status(400).json({success , error:"The email does not exist"}) 
            }


            const comparePass = await bcrypt.compare(password, user.password)
            if(!comparePass){
                return res.status(400).json({succes, error:"INVALID CREDENTIAL"})
            }
            
        

            succes=true;
            const data = {
                user:{id:user.id}

            }
            const authToken=jwt.sign(data,salt);
            console.log(success , authToken);
            res.json({success,authToken})

        } 
        
        catch (error) {

            console.log(error.message)
            res.status(500).send("internal server error")
            
        }  
    }
)

module.exports = router


