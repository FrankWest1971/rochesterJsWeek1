var mongoose = require('mongoose');

var topicSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    category: String,
    votes: Number,
    createdOn: {
        type: Date,
        default: Date.now
    },
    modifiedOn: Date,
    lastLogin: Date
});

mongoose.model( 'Topic', topicSchema );

