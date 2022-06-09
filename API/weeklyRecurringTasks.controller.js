const express = require('express');
const app = express();
const weeklyRecurringTasksRoutes = express.Router();

// Task model
let weeklyRecurringTask = require('./Models/weeklyRecurringTask');

// Add Task
weeklyRecurringTasksRoutes.route('/weeklyRecurringTasks').post((req, res, next) => {
    weeklyRecurringTask.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Tasks
weeklyRecurringTasksRoutes.route('/weeklyRecurringTasks').get((req, res) => {
    weeklyRecurringTask.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log("***************",data)
      res.json(data)
    }
  })
})

// Get All Open Tasks
weeklyRecurringTasksRoutes.route('/weeklyRecurringTask/open').get((req, res) => {
    weeklyRecurringTask.find({Done:false}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single task
weeklyRecurringTasksRoutes.route('/weeklyRecurringTask/:id').get((req, res) => {
    weeklyRecurringTask.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update task
weeklyRecurringTasksRoutes.route('/weeklyRecurringTask/:id').put((req, res, next) => {
    weeklyRecurringTask.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

module.exports = weeklyRecurringTasksRoutes;