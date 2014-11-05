var express = require('express');
var router = express.Router();
var apiRoutes = require('./api/api-routes');

router.use('/api', apiRoutes);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
