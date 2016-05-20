var express = require('express');
var router = express.Router();
var FeedbackLevelSchema = require('../models/feedback.js');

/* GET home page. */
router.get('/', function(req, res, next) {

  FeedbackLevelSchema.findOne().then((doc) => {
    res.render('feedback', {
      title: doc.title.en,
      headline: doc.title,
      levels: doc.level
    });
  });
});

router.post('/', function(req, res, next) {
  var feedbackLevel = req.body.feedbackLevel;
  console.log(feedbackLevel);
  //TODO: Save data information before redirect.
  if(feedbackLevel == 0 || feedbackLevel == 1) {
    res.redirect('/satisfied');
  } else if(feedbackLevel == 2 || feedbackLevel == 3 || feedbackLevel == 4) {
    res.redirect('/dissatisfied');
  } else {
    res.redirect('/forbidden');
  }
});


module.exports = router;
