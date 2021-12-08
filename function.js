var pics = new Array("/pics/img_01.jpg", "/pics/img_02.jpg", "/pics/img_03.jpg", "/pics/img_04.jpg", "/pics/img_05.jpg", "/pics/img_06.jpg");
var thumb = new Array("/pics/thumb_01.jpg", "/pics/thumb_02.jpg", "/pics/thumb_03.jpg", "/pics/thumb_04.jpg", "/pics/thumb_05.jpg", "/pics/thumb_06.jpg");

var pos=0;
var running=0;

window.onload = function (){

    document.getElementById ("previous").onclick = previousImg;

	document.getElementById("slideshow").onclick = slideshow;

    document.getElementById("next").onclick = nextImg;

    showing();
}

function showing(){

    for(var i=0;i<pics.length;i++)
        document.getElementById(thumb[i]).style.opacity="40%";

    document.getElementById(thumb[pos]).style.opacity="100%";
}

function change_img(num){
    var showing_img = document.getElementById("showing_img").src = pics[num];
    pos = num;
    showing();
}

function previousImg(){
    pos--;
    if(pos<0)
        pos = (pics.length)-1;
    document.getElementById("showing_img").src = pics[pos];
    showing();
}

function slideshow(){
}

function nextImg(){
    pos++;
    if(pos==pics.length)
        pos=0;
    document.getElementById("showing_img").src = pics[pos];
    showing();
}