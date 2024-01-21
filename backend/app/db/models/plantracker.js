const mongoose = require('mongoose');

const PlanTrackerSchema = new mongoose.Schema({
    plan: {
        type: Array,

    },
    uniqal_id: {
        type: Number,
    },
    planName: {
        type: String,
    },
    data: {
        type: String,
    },
});

const PlanTracker = mongoose.model('PlanTracker', PlanTrackerSchema);

module.exports = PlanTracker;