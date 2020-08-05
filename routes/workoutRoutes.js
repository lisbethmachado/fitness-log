const router = require('express').Router();
const Workout = require('../models/Workout'); 

router.get('/api/workouts', function (request, response) {
  Workout.find({}, null, {sort: 'date'}, function(err, workouts){
    if (err){
      console.error(error)
    }

    response.json(workouts)
  });
  
  //(request.body)
  //.then( workouts => response.json(workouts))
  //.catch( error => console.error(error))
});

// router.post('/api/workouts', (request, response) => {
//   db.Workout.create(request.body)
//   .then( () => response.sendStatus(200))
//   .catch( error => console.error(error))
// });

// router.put('/api/workouts/:id', (request, response) => {
//     db.Workout.findOneAndUpdate({_id: request.params.id}, request.body)
//     .then( () => response.sendStatus(200))
//     .catch(error => response.sendStatus(400))
//   });
  
//   //delete a workout
//   router.delete('/api/workouts/:id', (request, response) => {
//     db.Workout.deleteOne({_id: request.params.id})
//     .then( () => response.sendStatus(200))
//     .catch(error => response.sendStatus(400))
//   });

module.exports = router;