const express = require('express');
const router = express.Router();

const planTrackerActions = require('../actions/api/planTrackerActions');

router.get('/planstrack', planTrackerActions.getAllPlansTracker);


router.get('/planstrack/:id', planTrackerActions.getPlanTracker);


router.post('/planstrack', planTrackerActions.savePlanTracker);


router.put('/planstrack/:id', planTrackerActions.updatePlanTracker);


router.delete('/planstrack/:id', planTrackerActions.deletePlanTracker);

module.exports  = router;