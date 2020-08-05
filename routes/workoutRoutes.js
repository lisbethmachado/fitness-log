const router = require('express').Router()
const Workout = require('../models')

router.get('/workouts', (request, response) => {
    Workout.find()
        .then(workouts => response.json(workouts))
        .catch(error => console.error(error))
});

router.post('/workouts', (request, response) => {
    Workout.create(request.body)
        .then(() => response.sendStatus(200))
        .catch(error => console.error(error))
});

module.exports = router