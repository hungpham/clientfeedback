var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('forbidden', {
      title: 'Forbidden',
      message: 'You do not have permission to access.'
  });
});

module.exports = router;
