const mongoose = require('mongoose');

const TrainingPlanSchema = new mongoose.Schema({
    plan: {
        type: Array,

    },
    uniqal_id: {
        type: Number,
    },
    planName: {
        type: String,
    }
});

const TrainingPlan = mongoose.model('TrainingPlan', TrainingPlanSchema);

module.exports = TrainingPlan;