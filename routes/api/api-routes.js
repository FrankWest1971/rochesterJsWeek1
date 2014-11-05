var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Topic = mongoose.model('Topic');


router.get('/topics2', function(req, res){
    res.send('Hello'); 
    
}); 

/* GET a list of topics. */
router.get('/topics', function(req, res) {
    
    var query = Topic
        .find('')
        .sort('name');
    
    query.exec()
        .then(
            // Success
            function(results) {
                res.send(results);
            },
            // Failure
            function(error) {
                console.warn('Topic list failed: %O', error);
                res.status(400);
                res.send(error);
            }
        );
});

/* GET a specific topic by ID. */
router.get('/topics/:topicId', function(req, res) {
    
    var query = Topic
        .findById(req.params.topicId);
    
    query.exec()
        .then(
            // Success
            function(result) {
                res.send(result);
            },
            // Failure
            function(error) {
                console.warn('Topic by ID failed: %O', error);
                res.status(400);
                res.send(error);
            }
        );
});


/* POST - Create topic */
router.post('/topics', function(req, res) {
    Topic.create(req.body)
        .then(
            // Success
            function(results) {
                res.send(results);
            },
            // Failure
            function(error) {
                console.warn('Topic create failed: %O', error);
                res.status(400);
                res.send(error);
            }
        );
});

/* PUT - Update topic */
router.put('/topics/:topicId', function(req, res) {
    Topic.findByIdAndUpdate(req.params.topicId, req.body).exec()
        .then(
            // Success
            function(results) {
                res.send(results);
            },
            // Failure
            function(error) {
                console.warn('Topic create failed: %O', error);
                res.status(400);
                res.send(error);
            }
        );
});

/* DELETE - Delete topic */
router.delete('/topics/:topicId', function(req, res) {
    Topic.findByIdAndRemove(req.params.topicId, req.body).exec()
        .then(
            // Success
            function(results) {
                res.send(results);
            },
            // Failure
            function(error) {
                console.warn('Topic create failed: %O', error);
                res.status(400);
                res.send(error);
            }
        );
});

module.exports = router;
