$(function(){
    var page=0;
    var len=$(".slide-img li").length;
    var play=true;

//定义一个公共函数
    function slideplay(){
        //先让所有的图片隐藏
        $(".slide-img li").css("display","none");
        //指定图片显示eq(index),指定第index()图片显示
        $(".slide-img li").eq(page).css("display","block");
        //所有按钮的样式重置
        $(".slide-page li").css("background","transparent");
        //指定一个按钮样式
        $(".slide-page li").eq(page).css("background","#ffffff");
    }

//定义一个轮播函数
    function slide(){
        if(play){
            slideplay();
            page++;
            page%=len;}
        setTimeout(slide,1000)
    }
//首次执行
    slide();


})