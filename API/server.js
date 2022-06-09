let express = require('express'),
   path = require('path'),
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   dbConfig = "mongodb://localhost:27017/tasksdb",
   apiPortNumber = 5000;

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig, {
   useNewUrlParser: true
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

// Setting up port with express js
const taskRoute = require('../API/tasks.controller')
const weeklyRecurringTasksRoutes = require('../API/weeklyRecurringTasks.controller')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(cors()); 
app.use(express.static(path.join(__dirname, 'dist/todoapp')));
app.use('/', express.static(path.join(__dirname, 'dist/todoapp')));
app.use('/api', taskRoute)
app.use('/api',weeklyRecurringTasksRoutes)

// Create port
const port = process.env.PORT || apiPortNumber;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});