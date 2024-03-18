const express = require("express")
const Course = require("../models/Course")
const Record = require("../models/Record")
const validateUser = require("..//middleware/authentication")
const router = express.Router()
const { body, validationResult } = require("express-validator")


router.get("/course", validateUser, async (req, res) => {





    try {
        const course = await Course.find();
        res.json(course)
    }

    catch (error) {
        res.status(500).send("INERNAL SEREVER ERROR!!!!")
    }

}




)


router.get("/record", validateUser, async (req, res) => {


    try {
        const record = await Record.find();
        res.json(record)
    }

    catch (error) {
        res.status(500).send("INERNAL SEREVER ERROR!!!!!!")
    }

}



)


router.post("/addnote", [
    body("tittle", "Enter a Tittle").exists(),
    body("desctription", "Enter a discrption").isLength({ min: 500 }),
    body("price", "Enter a price").exists(),
    body("author", "Enter the author name").exists()

],

    async (req, res) => {
        let succes = false;
        const error = validationResult(req)


        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })

        }
        try {
            const { tittle, author, desctription, price } = req.body
            const course = new Course({
                tittle, author, description, price, user: req.body.id
            })

            const uploadCourse = await Course.save();
            res.send("Course uploaded succesfully");
        }

            catch (error) {
                res.status(500).send("INERNAL SEREVER ERROR!!!!!!")


}
    }
)




module.exports = router