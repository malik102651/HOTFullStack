const expressAsyncHandler = require("express-async-handler")
const Schedule = require("../Models/scheduleModel")

const schedule = expressAsyncHandler(async (req, res) => {

    
    console.log(req.body)

    const schedule = await Schedule.create({
        schedule: req.body.schedule
    })

    if (schedule) {
        res.status(201).json({
            schedule
        })
    } else {
        res.status(400);
        throw new Error("Error Occured!")
    }

})

module.exports = { schedule }