// Bring Mongoose into the project
var mongoose = require('mongoose');
var topics = require('./topic');

// Build the connection string
var dbURI = 'mongodb://user:Password01@ds035260.mongolab.com:35260/rochesterjsweek1';
// Create the database connection
mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

var topicModel = require('./topic');

