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
//通过location.search获取get传参的数据 截取？后面的内容
var str = location.search.substr(1);
//用分割方法得到 = 号两边内容
var catId = str.split("=")
//用下标找到id的值
var madd =function(page=1){
    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_goods.php",
        "type": "GET",
        "data": {
            "cat_id": catId[1],
            "page":page,
            "pagesize":24
        },
        "dataType": "json",
        "success": function (response) {
            //    console.log(response);
            var obj = response.data;
            for (var i = 0; i < obj.length; i++) {
                var data = obj[i];
                var html = `
                        <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <img src="${data.goods_thumb}" alt="...">
                    <div class="caption">
                        <a href="detail.ejs?cat_id=${data.cat_id}&goods_id=${data.goods_id}"><h5>商品名称:${data.goods_name}</h5></a>
                        <h6>商品详情:${data.goods_desc}</h6>
                        <p>价格:${data.price}</p>
                        <p><a href="../../views/shop/cart.ejs" class="btn btn-primary" role="button">加入购物车</a></p>
                    </div>
                </div>
            </div>
                    `;
    
                $("#goodsList").append(html);
            }
        }
    });
}
madd();
// 分页
$(".Pre").click(function () {
    // console.log(1111);
    // console.log(this.innerHTML);
    $('.mdda').parent().addClass('active').siblings().removeClass('active');
    $('#goodsList').html('');
    madd($('.mdda').html());
});
$(".mdda").click(function () {
    // console.log(1111);
    // console.log(this.innerHTML);
    $(this).parent().addClass('active').siblings().removeClass('active');
    $('#goodsList').html('');
    madd($(this).html());
});
$(".Next").click(function () {
    // console.log(1111);
    // console.log(this.innerHTML);
    $(".mdda").parent().removeClass('active').siblings().addClass('active');
    $('#goodsList').html('');
    madd($('.mdda').html());
});