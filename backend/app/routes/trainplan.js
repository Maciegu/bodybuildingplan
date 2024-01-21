const express = require('express');
const router = express.Router();

const planActions = require('../actions/api/trainingPlanActions');

router.get('/plans', planActions.getAllTrainingPlans);


router.get('/plans/:id', planActions.getTrainingPlan);


router.post('/plans', planActions.saveTrainingPlan);


router.put('/plans/:id', planActions.updateTrainingPlan);


router.delete('/plans/:id', planActions.deleteTrainingPlan);

module.exports  = router;