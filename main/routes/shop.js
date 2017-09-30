var express=require('express');
var router=express.Router();

router.get('/',function (req,res,next) {
   res.render('shop/index',{});
});
router.get('/settle',function (req,res,next) {
   res.render('shop/settle',{title:'这是结算页面'});
});

module.exports = router;