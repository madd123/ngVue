var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/shop', function(req, res, next) {
    res.render('shop/index', { title: 'Express' });
});

router.get('/docs', function(req, res, next) {
    res.render('docs/index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
    res.render('yc/login', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
    res.render('yc/register', { title: 'Express' });
});

module.exports = router;
