const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Task = new Schema({
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
   }
}, {
   collection: 'tasks'
})

module.exports = mongoose.model('Task', Task)