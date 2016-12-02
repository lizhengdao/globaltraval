/**
 * Created by weiyi on 2016/12/1.
 */
var POSITION_INDEX = 0, POSITION_TUOR = 1, POSITION_BOOKED = 2, POSITION_SENSERY = 3, POSITION_ABOUT = 4;
window.onload = function () {
    var link_ul = document.getElementById("header_link").children;

    var fram_travel = document.getElementById("travel_info");
    var fram_booked = document.getElementById("booked");
    var fram_scenery = document.getElementById("scenery");
    var fram_about = document.getElementById("about");

    var headTitle = document.getElementById("headTitle");
    var headDsc = document.getElementById("headDsc");

    var contentArr = [fram_travel, fram_booked, fram_scenery, fram_about];
    var dataArr=[
        ["旅游资讯","介绍各种最新旅游信息、资讯要闻、经典攻略等"],
        ["机票订购","各种飞机票、火车票、汽车票和轮渡票的订购服务"],
        ["风景欣赏","旅游景点的图片合集等"],
        ["公司简介","公司的发展历程、获得荣誉以及联系方式"]];

    for (var index = 0; index < link_ul.length; index++) {
        linkClick(index);
    }
    function linkClick(index) {
        link_ul[index].onclick = function () {
            setClickState(index);
            setData(index);
            for (var i = 0; i < link_ul.length-1; i++) {
                if (i == (index-1)) {
                    contentArr[i].style.display = "block";
                } else {
                    contentArr[i].style.display = "none";
                }
            }
        };
    }
    //设置标题和描述
    function setData(index){
        headTitle.innerHTML=dataArr[index-1][0];
        headDsc.innerHTML=dataArr[index-1][1];
    }
    function setClickState(index) {
        for (var i = 0; i < link_ul.length; i++) {
            if (i == index) {
                link_ul[i].className = "ishover";
            } else {
                link_ul[i].className = "unhover";
            }
        }
    }
}


