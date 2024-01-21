const mongoose = require('mongoose');

const PersonalDataSchema = new mongoose.Schema({
    weight: {
        type: Number,
        required: true
    },
    weightGoal: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    objective: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    days: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    uniqal_id: {
        type: Number
    }
    
});

const PersonalData = mongoose.model('PersonalData', PersonalDataSchema);


module.exports = PersonalData;