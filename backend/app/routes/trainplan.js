const express = require('express');
const router = express.Router();

const planActions = require('../actions/api/planActions');

router.get('/plans', planActions.getAllPlans);


router.get('/plans/:id', planActions.getPlan);


router.post('/plans', planActions.savePlan);


router.put('/plans/:id', planActions.updatePlan);


router.delete('/plans/:id', planActions.deletePlan);

module.exports  = router;