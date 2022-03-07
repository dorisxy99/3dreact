const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'build')));

// Always require and configure near the top 
require('dotenv').config();

// Connect to the database
require('./config/database');

app.get('/api/test', function(req, res) {
    res.send("Hello world")
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});