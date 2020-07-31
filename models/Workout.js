const mongoose = require("mongoose")

const Schema = mongoos.Schema;

const WorkoutSchema = new Schema({
    // CODE HERE
    day: {
        type: Date
    },
    exercises: {
        type: []
    },
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;