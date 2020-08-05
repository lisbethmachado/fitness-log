const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  // day: new Date(new Date().setDate(new Date().getDate() - 9)),
  exercises: [{
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]
});


// const Workout = mongoose.model('Workout', new mongoose.Schema({
//   exercises:[{
//     type: {type: String},
//     name: String,
//     duration: Number,
//     weight: Number,
//     reps: Number,
//     sets: Number,
//     distance: Number
//   }]
// }));

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;