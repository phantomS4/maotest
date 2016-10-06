var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/testmao', function(req, res, next) {
  res.render('maotest', { title: 'Express' });
});
router.get('/newFile', function(req, res, next) {
  res.render('newFile', { title: 'Express' });
});
router.get('/mao', function(req, res, next) {
  res.render('123', { title: 'Express' });
});
router.get('/xiaogou', function(req, res, next) {
  res.render('tuzi', { title: 'Express' });
});
module.exports = router;
