var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('satisfied', {
      title: 'Satisfied',
      message: 'Thank you, and discover more on www.decathlon.co.th'
  });
});

module.exports = router;
