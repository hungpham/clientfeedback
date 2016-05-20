/**
Created by Hung.Pham on 2016/05/16
*/
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

router
  .post('/', function(req, res) {
    res.jsonp({'status': 200, 'message': 'OK'});
  })
  .put('/', function(req, res) {
    res.send('Update the bird');
  });

module.exports = router;