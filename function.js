var pics = new Array("/pics/img_01.jpg", "/pics/img_02.jpg", "/pics/img_03.jpg", "/pics/img_04.jpg", "/pics/img_05.jpg", "/pics/img_06.jpg");
var thumb = new Array("/pics/thumb_01.jpg", "/pics/thumb_02.jpg", "/pics/thumb_03.jpg", "/pics/thumb_04.jpg", "/pics/thumb_05.jpg", "/pics/thumb_06.jpg");

window.onload = function (){

    document.getElementById ("previous").onclick = previousImg;

	document.getElementById("slideshow").onclick = slideshow;

    document.getElementById("next").onclick = nextImg;

    showing();
}

function showing(){
    var showing_img = document.getElementById("showing_img").src;
    showing_img = showing_img.substring(showing_img.indexOf("/pics/"));

    for(var f=0;f<pics.length;f++)
        document.getElementById(thumb[f]).style.opacity="40%";

    for(var i=0; i<pics.length ; i++){
        if(pics[i]===showing_img){
            document.getElementById(thumb[i]).style.opacity="100%";
            break;
        }
    }
}

function change_img(num){
    var showing_img = document.getElementById("showing_img").src = pics[num];
    showing();
}

function previousImg(){

}

function slideshow(){

}

function nextImg(){
    
}