var arr=new Array(5);
var ord = 0;//代表当前图片的序号，从0开始。
var myTimer = null;
 
function  initUI() {
    $("#box li:first").css({"backgroundColor":"#c1c1c1"});
}
 
function  initEvent() {
    $("#box").mouseenter(function () {
        stopPlay();
    });
 
    $("#box").mouseleave(function () {
        autoPlay();
    });
 
    $("#box li").click(function () {
        goImg($(this).index());
    });
 
    $("#leftArrow").click(function () {
        let transord =ord-1;
        transord = transord<0?arr.length-1:transord;
        goImg(transord);
    });
 
    $("#rightArrow").click(function () {
        let transord =ord+1;
        transord = transord>arr.length-1?0:transord;
        goImg(transord);
    });
}
 
//1、自动播放
function autoPlay() {
    myTimer = setInterval(function () {
        //一、改变数据
        // 1、记录当前序号（淡出的图片序号）
        let outOrd = ord;
        //2、改变要显示的图片的序号（淡出图片序号加一）
        ord++;
        if(ord>arr.length-1){
            ord=0;
        }
        //二、改变外观
        let $img = $("#box img");
        //1、淡入淡出效果
        //让一张(outOrd)淡出 当前消失
        $img.eq(outOrd).animate({"opacity":0},600);
        //让一张(ord)淡入下一张图片显示
        $img.eq(ord).animate({"opacity":1},600);
        //2、改变豆豆的颜色；
        $("#box li").eq(ord).css({"backgroundColor":"#c1c1c1"}).siblings().css({"backgroundColor":"#333"});
    },5000);
}
 
//2、停止播放
function stopPlay() {
    window.clearInterval(myTimer);
}
 
//3、跳转到指定的图片
function  goImg(transOrd) {
    //一、改变数据
    // 1、记录当前序号（淡出的图片序号）
    let outOrd = ord;
    //2、改变要显示的图片的序号（传入的图片序号）
    ord=transOrd;
    if(ord>arr.length-1){
        ord=0;
    }
    //二、改变外观
    let $img = $("#box img");
    //1、淡入淡出效果
    //让一张(outOrd)淡出 当前消失
    $img.eq(outOrd).animate({"opacity":0},600);
    //让一张(ord)淡入下一张图片显示
    $img.eq(ord).animate({"opacity":1},600);
    //2、改变豆豆的颜色；
    $("#box li").eq(ord).css({"backgroundColor":"#c1c1c1"}).siblings().css({"backgroundColor":"#333"});
}
 
$(function () {
    //1、初始化界面
    initUI();
    //2、绑定事件
    initEvent();
    //3、自动播放
    autoPlay();
});
