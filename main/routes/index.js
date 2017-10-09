
var express = require('express');
var router = express.Router();

var Person ={
    title:"Erpes是的0违法未到法定",

}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lm', function(req, res, next) {
    res.render('lm/index', Person
);
  });


  router.get('/lm/123', function(req, res, next) {
    res.render('lm/index', { title: 'Expr第二个ess' });
  });

router.get('/shop', function(req, res, next) {
    res.render('shop/index', { title: '测试' });
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
    res.render('yc/login', { title: 'Login',bg:"bg1","main":"main-log" });
});

router.get('/register', function(req, res, next) {
    res.render('yc/register', { title: 'Register',bg:"bg2","main":"main-reg" });
});

router.get('/course', function(req, res, next) {
    res.render('yc/course', { });
});

router.get('/aboutus', function(req, res, next) {
    res.render('yc/aboutus', { });
});

module.exports = router;

