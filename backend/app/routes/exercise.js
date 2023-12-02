const express = require('express');
const router = express.Router();

const exerciseActions = require('../actions/api/exerciseActions');


router.get('/exercises', exerciseActions.getAllExercises);


router.get('/exercises/:id', exerciseActions.getExercise);


router.post('/exercises', exerciseActions.saveExercise);


router.put('/exercises/:id', exerciseActions.updateExercise);


router.delete('/exercises/:id', exerciseActions.deleteExercise);

module.exports  = router;


// PROBKOWO BO RACZEJ TO ODRZUCE