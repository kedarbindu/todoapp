const express = require('express');
const app = express();
const tasksRoute = express.Router();

// Task model
let Task = require('./Models/task');

// Add Task 
tasksRoute.route('/todos').post((req, res, next) => {
  Task.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Tasks
tasksRoute.route('/todos').get((req, res) => {
  Task.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get All Open Tasks
tasksRoute.route('/todos/open').get((req, res) => {
  Task.find({Done:false}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single task
tasksRoute.route('/todos/:id').get((req, res) => {
  Task.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update task
tasksRoute.route('/todos/:id').put((req, res, next) => {
  Task.findByIdAndUpdate(req.params.id, {
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

module.exports = tasksRoute;