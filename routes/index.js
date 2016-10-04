var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/testmao', function(req, res, next) {
  res.render('maotest', { title: 'Express' });
});
module.exports = router;
