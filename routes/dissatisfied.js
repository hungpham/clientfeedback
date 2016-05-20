var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dissatisfied', {
      title: 'Dissatisfied',
      message: 'Thank you for you helping us to improve! Our sports ambassador will serve you immediately!'
  });
});

module.exports = router;
