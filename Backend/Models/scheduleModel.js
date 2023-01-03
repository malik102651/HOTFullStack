const mongoose = require('mongoose')

const scheduleSchema = mongoose.Schema(
    {
        schedule: [{
            hour: {
                type: String,
                required: true,
            },
            day: {
                type: String,
                required: true,
            }
        }]
    },
    {
        timestamps: true

    });

    //console.log(scheduleSchema)

const Schedule = mongoose.model("Schedule", scheduleSchema);
module.exports = Schedule;

