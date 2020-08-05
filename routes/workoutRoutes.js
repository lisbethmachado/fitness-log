const router = require('express').Router()
const Workout = require('../models')

router.get('/workouts', (request, response) => {
  Workout.find()
  .then( workouts => response.json(workouts))
  .catch( error => console.error(error))
})