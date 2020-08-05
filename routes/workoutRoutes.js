const router = require('express').Router();
const Workout = require('../models');

router.get('/api/workouts', (request, response) => {
  Workout.findAll()
  .then( workouts => response.json(workouts))
  .catch( error => console.error(error))
});

router.post('/api/workouts', (request, response) => {
  Workout.create(request.body)
  .then( () => response.sendStatus(200))
  .catch( error => console.error(error))
});

router.put('/api/workouts/:id', (request, response) => {
    Workout.findOneAndUpdate({_id: request.params.id}, request.body)
    .then( () => response.sendStatus(200))
    .catch(error => response.sendStatus(400))
  });
  
  //delete a workout
  router.delete('/api/workouts/:id', (request, response) => {
    Workout.deleteOne({_id: request.params.id})
    .then( () => response.sendStatus(200))
    .catch(error => response.sendStatus(400))
  });

module.exports = router