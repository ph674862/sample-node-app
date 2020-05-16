var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/healthcheck', function(req, res, next) {
  res.send({data:{message:"Up and Running"}})
});

module.exports = router;
