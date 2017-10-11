var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/docs', function(req, res, next) {
    res.render('docs/index', { title: 'Express' });
});

router.get('/docs/wph', function(req, res, next) {
  res.render('docs/wph/index', { title: 'Express' });
});

router.get('/docs/insert', function(req, res, next) {
  res.render('docs/insert', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
    res.render('log-reg/login', { title: 'Login',bg:"bg1","main":"main-log" });
});

router.get('/register', function(req, res, next) {
    res.render('log-reg/register', { title: 'Register',bg:"bg2","main":"main-reg" });
});

router.get('/zp/docs', function(req, res, next) {
    res.render('zp/docs', { title: 'docs'});
});

router.get('/zp/introduce', function(req, res, next) {
    res.render('zp/introduce', { title: 'introduce'});
});

router.get('/zp/VueExample', function(req, res, next) {
    res.render('zp/VueExample', { title: 'VueExample'});
});

router.get('/docs/course', function(req, res) {
    res.render('docs/course', { });
});

router.get('/aboutus', function(req, res) {
    res.render('aboutus', { });
});

module.exports = router;

