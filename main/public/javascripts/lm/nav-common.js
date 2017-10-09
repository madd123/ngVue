var m1 = angular.module('myNav',[]);
m1.controller('Aaa',function($scope){
    console.log(2);

    $("#denglu").click(function(){
        console.log(2)
    });


})
m1.controller('dl',function(){
    
    $("#denglu").click(function(){
        console.log(2)
    });
});
// m2.controller('LeftIn',function($scope){

// })
// m2.directive("myLeftIn",function(){
//     return{
//         restrict:"A",
//         link: function(scope,element,attr){
//             console.log(scope);
//         },
//     }
//     // console.log(2)
// })


// console.log($('#denglu'))
// setTimeout(function(){
//     console.log(2)
//     $("#denglu").click(function(){
//         console.log(1);
//     })
// },5000)
