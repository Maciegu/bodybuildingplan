const mongoose = require('mongoose');

const PersonalDataSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: true
    },
    weight: {
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
    goal: {
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
});

const PersonalData = mongoose.model('PersonalData', PersonalDataSchema);


module.exports = PersonalData;