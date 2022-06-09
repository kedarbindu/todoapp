const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let weeklyRecurringTask = new Schema({
    Title: {
        type: String
    },
    Description: {
        type: String
    },
    DueDate: {
        type: Date
    },
    Done: {
        type: Boolean
    },
    RecursOn: {
        type: String
    }
}, {
    collection: 'weeklyRecurringTasks'
})

module.exports = mongoose.model('weeklyRecurringTask', weeklyRecurringTask)