//页面导航；分类列表功能
$.get("http://h6.duchengjiu.top/shop/api_cat.php", function (data) {
    var obj = data;
    //					console.log(obj);

    for (var i = 0; i < obj.data.length; i++) {
        if(i<3){
            $("#shopNav1").append('<li><a href="shop.ejs?cat_id=' + obj.data[i].cat_id + '">' + obj.data[i].cat_name + '</a></li>');
        }else if(i>=3&&i<6){
            $("#shopNav2").append('<li><a href="shop.ejs?cat_id=' + obj.data[i].cat_id + '">' + obj.data[i].cat_name + '</a></li>');
        }else{
            $("#shopNav3").append('<li><a href="shop.ejs?cat_id=' + obj.data[i].cat_id + '">' + obj.data[i].cat_name + '</a></li>');
        }
        
       
        
        
    }

});