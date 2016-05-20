var express = require('express');
var router = express.Router();
var configSchema = require('../models/index.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  configSchema.findOne().then((config) => {
    res.render('index', {
        title: 'Customer Satisfaction',
        config: config
    });
  });
});

router.post('/', function(req, res, next) {
  var key = req.body.key;
	configSchema.findOne().then((config) => {
    if(key === config.key) {
      res.redirect('/feedback');
    } else {
      res.redirect('/forbidden');
    }

	});
});


module.exports = router;
